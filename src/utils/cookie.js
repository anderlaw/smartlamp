import Cookie from 'js-cookie'

function getCookie(key) {
  return Cookie.get(key)
}

function setCookie(key, val, days) {
  return Cookie.set(key, val, {
    expires: days
  })
}

function removeCookie(key) {
  return Cookie.remove(key)
}
export default {
  getCookie,
  setCookie,
  removeCookie
}
