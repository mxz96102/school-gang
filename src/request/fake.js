import casual from 'casual-browserify'
import axios from 'axios'
import a1 from '../assets/1.png'
import a2 from '../assets/2.png'
import a3 from '../assets/3.png'
import a4 from '../assets/4.png'
import a5 from '../assets/5.png'

const randomFromArray = array => () => array[Math.floor(Math.random() * (array.length))]
const randomImg = randomFromArray([a1, a2, a3, a4, a5])
const randomSkill = randomFromArray(['UI', '设计', '游戏设计', 'java 工程师', 'C++', '后台', '前端', '游戏开发'])
const ALLCATE = [
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
]
const randomCateSet = () => {
  const cateSet = randomFromArray(ALLCATE)()
  return [cateSet.name, randomFromArray(cateSet.sub)()]
}
// const token = null

const faked = (type, cateSet = []) => {
  const [cate, sub] = cateSet.length === 2 ? cateSet : randomCateSet()
  return type === 'user'
    ? {
      uid: casual.uuid,
      name: casual.full_name,
      intro: casual.sentence,
      phone: casual.phone,
      qq: casual.phone,
      wx: casual.phone,
      skills: Array.from(new Array(3)).map(() => randomSkill()),
      experience: Array.from(new Array(casual.integer(2, 7))).map(() => ({
        uid: casual.uuid,
        name: casual.title,
        img: randomImg(),
        ddl: casual.unix_time,
        detail: casual.sentence
      })),
      img: randomImg()
    }
    : {
      uid: casual.uuid,
      parents: {
        category: {
          name: cate
        },
        subcategory: {
          name: sub
        }
      },
      from: casual.name,
      ddl: casual.unix_time,
      needs: [
        {
          name: randomSkill(),
          number: 2,
          uid: casual.uuid
        },
        {
          name: randomSkill(),
          number: 0,
          uid: casual.uuid
        },
        {
          name: randomSkill(),
          number: 5,
          uid: casual.uuid
        }
      ],
      name: casual.title,
      detail: casual.sentence,
      img: randomImg()
    }
}

export default {
  login (username, password) {
    return new Promise((resolve, reject) => {
      resolve({
        token: 'fuuuuuck',
        ...faked('user')
      })
    })
  },
  loginWithToken () {
    return new Promise((resolve, reject) => {
      resolve({
        token: 'newfuck',
        ...faked('user')
      })
    })
  },
  register (username, password) {
    return new Promise((resolve, reject) => {
      resolve({
        token: 'regfuck',
        ...faked('user')
      })
    })
  },
  getAll () {
    let requestSuccess = arguments[arguments.length - 1]
    requestSuccess = typeof requestSuccess === 'boolean' ? requestSuccess : true
    return new Promise((resolve, reject) => {
      const facked = {
        talents: {
          title: '按专业找人才',
          more: '#',
          categories: ALLCATE.map(cate => ({
            title: cate.name,
            subcategories: cate.sub.map(sub => ({
              title: sub,
              contents: Array.from(new Array(6)).map(() => (faked('user')))
            }))
          }))
        },
        projects: {
          title: '项目展示',
          more: '#',
          categories: ALLCATE.map(cate => ({
            title: cate.name,
            subcategories: cate.sub.map(sub => ({
              title: sub,
              contents: Array.from(new Array(6)).map(() => (faked('project', [cate.name, sub.name])))
            }))
          }))
        }
      }
      if (requestSuccess) {
        resolve(facked)
      } else {
        reject(new Error('502'))
      }
    })
  },
  getAllSkills () {
    return new Promise((resolve) => {
      resolve(['UI', '设计', '游戏设计', 'java 工程师', 'C++', '后台', '前端', '游戏开发'])
    })
  },
  getProjectDetail (uid) {
    let requestSuccess = arguments[arguments.length - 1]
    requestSuccess = typeof requestSuccess === 'boolean' ? requestSuccess : true
    return new Promise((resolve, reject) => {
      if (requestSuccess) {
        resolve({
          ...faked('project'),
          ...uid
        })
      } else {
        reject(new Error('404'))
      }
    })
  },
  getAllCate () {
    return new Promise((resolve) => {
      resolve(ALLCATE)
    })
  },
  getUser (userID) {
    let requestSuccess = arguments[arguments.length - 1]
    requestSuccess = typeof requestSuccess === 'boolean' ? requestSuccess : true
    return new Promise((resolve, reject) => {
      if (!requestSuccess) reject(new Error('404'))
      else {
        resolve({
          ...faked('user'),
          ...{
            uid: userID
          }
        })
      }
    })
  },
  addProject (project) {
    // new project
    console.log(project)
    axios.post('//localhost:8080/api/project', project)
    return new Promise((resolve, reject) => {
      resolve({
        ...faked('project', [project.cate, project.sub]),
        ...{uid: casual.uuid}
      })
    })
  },
  updateProject (projectID, project) {
    // do somthing here
    return new Promise((resolve, reject) => {
      resolve({
        ...faked('project', [project.cate, project.sub]),
        ...{uid: projectID}
      })
    })
  },
  updateUser (user) {
    // do somthing here
    return new Promise((resolve, reject) => {
      resolve({
        ...faked('user'),
        msg: 'success'
      })
    })
  },
  // should get user from session
  applyProject (projectID, needsID) {
    return new Promise((resolve, reject) => {
      resolve({
        msg: 'success'
      })
    })
  }
}
// 通知
