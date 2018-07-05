import axios from 'axios'

import { getData, setData, KEYS } from './localstorage'

const mapProjectForward = (
  /* eslint-disable camelcase */
  {
    category,
    creator_id,
    creator_name,
    finish_time,
    id,
    img,
    intro,
    members_needed,
    name,
    subcategory
  }
) => {
  return {
    name,
    img,
    uid: id,
    parents: {
      category: {
        name: category
      },
      subcategory: {
        name: subcategory
      }
    },
    from: {
      name: creator_name,
      uid: creator_id
    },
    ddl: parseInt(finish_time),
    needs: members_needed.map(({skill, id, remain_number}) => ({name: skill, number: remain_number, uid: id})),
    detail: intro
  }
}
// eslint-disable-next-line
const mapProjectBack = ({ddl, detail, ...other}) => ({...other, finish_time: ''+ddl, intro: detail})
const mapTalentForward = (
  {
    experience,
    ...other
  }
) => ({
  ...other,
  experience: experience.map(mapProjectForward)
})
// eslint-disable-next-line no-unused-vars
const mapTalentBack = ({ wx, phone, ...other }) => ({ ...other, wechat: wx, phonenumber: phone })

let axiosWrap = axios.create({
  baseURL: 'http://youpaihust.com/api/',
  headers: {
    'Authorization': getData(KEYS.AUTH)
  }
})
const updateAuth = () => {
  axiosWrap = axios.create({
    baseURL: 'http://youpaihust.com/api/',
    headers: {
      'Authorization': getData(KEYS.AUTH)
    }
  })
}

const fetcher = {
  login (username, password) {
    return new Promise((resolve, reject) => {
      axiosWrap.post('/login', {
        name: username,
        password
      }).then(({data}) => {
        if (data['auth']) {
          setData(KEYS.AUTH, data['auth'])
          updateAuth()
          resolve(data['auth'])
        } else {
          reject(new Error('login fail'))
        }
      }).catch(e => {
        reject(e)
      })
    })
  },
  cacheProfile () {
    return new Promise((resolve) => {
      resolve({
        name: getData(KEYS.NAME),
        img: getData(KEYS.IMG),
        uid: getData(KEYS.UID)
      })
    })
  },
  loginWithToken () {
    return new Promise((resolve, reject) => {
      const auth = getData(KEYS.AUTH)
      if (auth) {
        resolve(auth)
      } else {
        reject(new Error('login fail'))
      }
    })
  },
  getProfile () {
    return new Promise((resolve, reject) => {
      axiosWrap.get('/profile')
        .then(({data}) => {
          resolve(mapTalentForward(data))
          setData(KEYS.NAME, data.name)
          setData(KEYS.IMG, data.img)
          setData(KEYS.UID, data.uid)
        }).catch(e => reject(e))
    })
  },
  register (username, password) {
    return new Promise((resolve, reject) => {
      axiosWrap.post('/register', {
        name: username,
        password
      }).then(({data}) => {
        if (data['auth']) {
          setData(KEYS.AUTH, data['auth'])
          resolve(data['auth'])
        } else {
          reject(new Error('login fail'))
        }
      }).catch(e => {
        reject(e)
      })
    })
  },
  getAll () {
    return new Promise((resolve, reject) => {
      Promise.all([
        axiosWrap.get('/project'),
        axiosWrap.get('/talent')
      ]).then(([projects, talents]) => {
        resolve(
          {
            talents: talents.data.map(mapTalentForward),
            projects: {
              title: '项目展示',
              more: '/projects',
              categories: [
                {
                  name: '产品&设计类',
                  sub: [
                    'logo 设计', '游戏设计', '网页设计', '短视频制作', '文件资料翻译'
                  ]
                }, {
                  name: '程序开发类',
                  sub: [
                    '微信公众号开发', '游戏开发', 'android 软件开发', '网页开发', 'ios 软件开发'
                  ]
                }
              ].map(({name, sub}) => {
                return ({
                  title: name,
                  subcategories: sub.map(title => {
                    return ({
                      title,
                      contents: projects.data.filter(d => d.subcategory === title).map(mapProjectForward)
                    })
                  })
                })
              })
            }
          }
        )
      }).catch(e => {
        reject(e)
      })
    })
  },
  getAllSkills () {
    return new Promise((resolve, reject) => {
      axiosWrap.get('/skill')
        .then(({data}) => resolve(data))
        .catch(e => reject(e))
    })
  },
  getProjectDetail (uid) {
    return new Promise((resolve, reject) => {
      axiosWrap.get(`/project/${uid}`)
        .then(({data}) => resolve(mapProjectForward(data)))
        .catch(e => reject(e))
    })
  },
  getAllCate () {
    return new Promise((resolve) => {
      resolve([
        {
          name: '产品&设计类',
          sub: [
            'logo 设计', '游戏设计', '网页设计', '短视频制作', '文件资料翻译'
          ]
        }, {
          name: '程序开发类',
          sub: [
            '微信公众号开发', '游戏开发', 'android 软件开发', '网页开发', 'ios 软件开发'
          ]
        }
      ])
    })
  },
  getUser (uid) {
    return new Promise((resolve, reject) => {
      axiosWrap.get(`/talent/${uid}`)
        .then(({data}) => resolve(mapTalentForward(data)))
        .catch(e => reject(e))
    })
  },
  addProject (project) {
    return new Promise((resolve, reject) => {
      axiosWrap.post('/project', mapProjectBack(project))
        .then(({data}) => {
          axios.all(project.needs.map(
            ({name, number}) => axiosWrap.post(`/project/${data.id}/member/needs`, {
              skill: name,
              number
            })
          )).then(() => resolve(data.id))
            .catch(e => reject(e))
        })
        .catch(e => reject(e))
    })
  },
  updateProject (project) {
    return new Promise((resolve, reject) => {
      axiosWrap.put(`/project/${project.uid}`, mapProjectBack(project))
        .then(({data}) => {
          resolve(data)
        })
        .catch(e => reject(e))
    })
  },
  updateUser (user) {
    return new Promise((resolve, reject) => {
      axiosWrap.put(`/profile`, mapTalentBack(user))
        .then(({data}) => {
          resolve(data)
        })
        .catch(e => reject(e))
    })
  },
  addSkill (skill) {
    return new Promise((resolve, reject) => {
      axiosWrap.post('/profile/skill', {name: skill})
        .then(({data}) => resolve(data))
        .catch(e => reject(e))
    })
  },
  removeSkill (id) {
    return new Promise((resolve, reject) => {
      axiosWrap.delete(`/profile/skill/${id}`)
        .then(({data}) => resolve(data))
        .catch(e => reject(e))
    })
  },
  getMyProject () {
    return new Promise((resolve, reject) => {
      axiosWrap.get(`/profile/project`)
        .then(({data}) => resolve(data.map(mapProjectForward)))
        .catch(e => reject(e))
    })
  },
  getRequest () {
    return new Promise((resolve, reject) => {
      axiosWrap.get('/request')
        .then(({data}) => {
          resolve(data.map(({user, ...other}) => ({...other, user: mapTalentForward(user)})))
        })
        .catch(e => reject(e))
    })
  },
  requestProject (projectId, needId) {
    return new Promise((resolve, reject) => {
      axiosWrap.post(`/project/${projectId}/request`, {need: needId})
        .then(({data}) => resolve(data))
        .catch(e => reject(e))
    })
  },
  acceptRequest (projectId, requestId) {
    return new Promise((resolve, reject) => {
      axiosWrap.put(`/project/${projectId}/request/${requestId}`)
        .then(({data}) => resolve(data))
        .catch(e => reject(e))
    })
  },
  rejectRequest (projectId, requestId) {
    return new Promise((resolve, reject) => {
      axiosWrap.delete(`/project/${projectId}/request/${requestId}`)
        .then(({data}) => resolve(data))
        .catch(e => reject(e))
    })
  }
}

export default fetcher
