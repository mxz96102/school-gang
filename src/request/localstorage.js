export const KEYS = {
  DATA: 'data',
  AUTH: 'auth',
  NAME: 'name',
  IMG: 'img',
  UID: 'uid'
}

export const getData = key => {
  return localStorage[key]
}

export const setData = (key, value) => {
  localStorage[key] = value
  return localStorage[key]
}

export const removeData = () => {
  localStorage.clear()
  return localStorage.getItem(KEYS.DATA)
}
