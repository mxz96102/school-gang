import casual from 'casual-browserify'
import a1 from '../assets/1.png'
import a2 from '../assets/2.png'
import a3 from '../assets/3.png'
import a4 from '../assets/4.png'
import a5 from '../assets/5.png'

const randomFromArray = array => () => array[Math.floor(Math.random() * (array.length))]
const randomImg = randomFromArray([a1, a2, a3, a4, a5])
const randomSkill = randomFromArray(['UI', '设计', '游戏设计', 'java 工程师', 'C++', '后台', '前端', '游戏开发'])

// const token = null

const faked = type => {
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
        title: casual.title,
        img: randomImg(),
        ddl: casual.unix_time
      })),
      img: randomImg()
    }
    : {
      uid: casual.uuid,
      parents: {
        category: {
          name: casual.word
        },
        subcategory: {
          name: casual.word
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
  getAll () {
    let requestSuccess = arguments[arguments.length - 1]
    requestSuccess = typeof requestSuccess === 'boolean' ? requestSuccess : true
    return new Promise((resolve, reject) => {
      const facked = {
        talents: {
          title: '按专业找人才',
          more: '#',
          categories: Array.from(new Array(2)).map(() => ({
            title: casual.word,
            subcategories: Array.from(new Array(4)).map(() => ({
              title: randomSkill(),
              contents: Array.from(new Array(6)).map(() => (faked('user')))
            }))
          }))
        },
        projects: {
          title: '项目展示',
          more: '#',
          categories: Array.from(new Array(2)).map(() => ({
            title: casual.word,
            subcategories: Array.from(new Array(4)).map(() => ({
              title: casual.word,
              contents: Array.from(new Array(6)).map(() => (faked('project')))
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
    return new Promise((resolve, reject) => {
      resolve({
        ...faked('project'),
        ...{uid: casual.uuid}
      })
    })
  },
  updateProject (projectID, project) {
    // do somthing here
    return new Promise((resolve, reject) => {
      resolve({
        ...faked('project'),
        ...{uid: projectID}
      })
    })
  },
  updateUser (userID, user) {
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
  },
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
  register (username, password, email) {
    return new Promise((resolve, reject) => {
      resolve({
        token: 'regfuck',
        ...faked('user')
      })
    })
  }
}
// 通知
