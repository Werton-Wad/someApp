const key = 'token';

const setAuthInformation = (token) => {
  localStorage.setItem(key, token)
}

const getAuthInformation = () => { // 'токен'/null
  return localStorage.getItem(key);
}

const isAuthorized = () => { // true/false
  return !!getAuthInformation();
}

const clearAuthInformation = () => {
  return localStorage.removeItem(key);
}

export default {
  setAuthInformation,
  getAuthInformation,
  clearAuthInformation,
  isAuthorized,
}
