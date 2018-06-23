import casual from 'casual-browserify'

const randomImg = random => [
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAODxAPERAVFhARDxAQEBgVEhAVEBUQFRIWFxUZGBcZHSggGBolHRUWIz0iJzUrLjAwGB8zRDMsNygtLisBCgoKBwcNDgcHDisZHxkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABwgEBgEDBQL/xABOEAABAwIBCAQICgcECwAAAAABAAIDBBEFBgcSEyExQWEiUXGBCBQjMlKRobEVJDNCYnKCkqLBNUNTY3N0s2SytNEXJTRVZYOTo8LS8P/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCcUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcEqHc4OedtLI6mw5rJHsOjJM+7og4bwxoI0z9Ld2oJjRVNqc6ONSEk17xfg1sTAOwBqx/wDSNjP+8Z/vD/JBbpFUdmcjGW7sQm7y0+8L0KHO7jcR21YkHVJFCR6w0H2oLUIoDwTP5UNsKukjeOLoXOjdb6rtIE94UoZJZw8OxWzIZtGY/qpbMl7hez/skoNsREQEREBERAREQEREBERAREQEREBERARFi4piEVLDJUTPDIomF73HcGj3nlxQeZlllTT4RSuqpySLhsbG205JDua2/rvwAVc8qc6WJ4i8hszoISbNjgc5uzhpPHScfUOS6sr8oKrKXE2NijcQXamjiv5rCdpPAONrk8LDgFOebzNrS4RG2R7Wy1hA1krhcNPFsQPmjnvPsQVydQYmWl5hrC21ySyoIt1k2XVh2TVdUlgho536Zs0iJ+gTu84jRA5kq5qIPEwTJmkpoImNpIGuaxofoxM8+w0jci523XpfB8P7GP8A6bP8lkogxH4ZTu2GCMjnGw/kvMr8i8MqPlaCnPPUsa77zQCveRBF2PZkMNnBNO6SnfttY6yK/Njjf1EKH8s83tfgztY9unAHDRnivoA32aXGN27fs5lWxXxLE17S1zQ5rgWuBALSDvBB3hBX7N5nlmpy2mxImWDY1s1iZ2fX/aN5+d2qe8Or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',
  'data:image/png;base64,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',
  'data:image/jpeg;base64,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'
][random % 3]

// const token = null

const faked = type => {
  return type === 'user'
    ? {
      uid: casual.uuid,
      name: casual.first_name,
      ddl: casual.moment,
      skills: casual.array_of_words(casual.integer(0, 3)),
      experience: Array.from(new Array(casual.integer(2, 7))).map(() => ({
        projectID: casual.uuid,
        title: casual.title,
        img: randomImg(casual.integer(0, 2)),
        ddl: casual.moment
      })),
      img: randomImg(casual.integer(0, 2))
    }
    : {
      uid: casual.uuid,
      parents: {
        category: {
          name: casual.title,
          uid: casual.uuid
        },
        subcategory: {
          name: casual.title,
          uid: casual.uuid
        }
      },
      from: casual.name,
      ddl: casual.moment,
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
      img: randomImg(casual.integer(0, 2))
    }
}

export default {
  getAll () {
    let requestSuccess = arguments[arguments.length - 1]
    requestSuccess = typeof requestSuccess === 'boolean' ? requestSuccess : true
    return new Promise((resolve, reject) => {
      const facked = {
        talents: {
          title: '按专业找zz',
          more: '#',
          categories: Array.from(new Array(2)).map(() => ({
            uid: casual.uuid,
            title: casual.title,
            subcategories: Array.from(new Array(4)).map(() => ({
              uid: casual.uuid,
              title: casual.title,
              contents: Array.from(new Array(6)).map(() => (faked('user')))
            }))
          }))
        },
        projects: {
          title: '项目zz',
          more: '#',
          categories: Array.from(new Array(2)).map(() => ({
            uid: casual.uuid,
            title: casual.title,
            subcategories: Array.from(new Array(4)).map(() => ({
              uid: casual.uuid,
              title: casual.title,
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
  applyProject (projectID) {
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
  loginWithToken (token) {
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
