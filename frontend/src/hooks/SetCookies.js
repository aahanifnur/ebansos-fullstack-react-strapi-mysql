import Cookie from 'js-cookie'

const SetCookie = (cookiename, jwt) => {
    Cookie.set(cookiename, jwt, {
        expires: 1,
        secure: true,
        sameSite: 'Strict',
        path: '/'
    })
}

export default SetCookie
