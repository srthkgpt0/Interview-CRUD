import config from '../components/config'

export const setSessionStorageToken = (token) => {
  sessionStorage.setItem(`${config.NAME_KEY}:token`, token)
}
export const getSessionStorageToken = () => {
  const token = sessionStorage.getItem(`${config.NAME_KEY}:token`)
  return token
}

export const removeSessionStorageToken = () => {
  sessionStorage.removeItem(`${config.NAME_KEY}:token`)
}
