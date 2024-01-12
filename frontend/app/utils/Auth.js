import { Cookies } from 'react-cookie'

// set up cookies
const cookies = new Cookies();

export const setToken = (token) => {
  cookies.set('token', token, { maxAge: 60 * 60 * 24 })
}

export const removeToken = () => {
  cookies.remove('token')
}

export const getToken = () => {
  return cookies.get('token');
}