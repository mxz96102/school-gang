import casual from 'casual-browserify'

const randomImg = () => {
  const imgs = [
    'https://avatars1.githubusercontent.com/u/17938744?s=460&v=4',
    'https://avatars0.githubusercontent.com/u/38151957?s=460&v=4',
    'https://avatars1.githubusercontent.com/u/32388319?s=460&v=4',
    'https://avatars0.githubusercontent.com/u/36807171?s=460&v=4',
    'https://avatars2.githubusercontent.com/u/23148748?s=460&v=4'
  ]
  return imgs[Math.floor(Math.random() * (imgs.length))]
}

// const token = null

const faked = type => {
  return type === 'user'
    ? {
      uid: casual.uuid,
      name: casual.full_name,
      phone: casual.phone,
      qq: casual.phone,
      wx: casual.phone,
      skills: casual.array_of_words(casual.integer(0, 3)),
      experience: Array.from(new Array(casual.integer(2, 7))).map(() => ({
        projectID: casual.uuid,
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
          name: 'UI射击石',
          number: 2,
          uid: casual.uuid
        },
        {
          name: 'UI射击水',
          number: 0,
          uid: casual.uuid
        },
        {
          name: 'UI射击木头',
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
              title: casual.word,
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

