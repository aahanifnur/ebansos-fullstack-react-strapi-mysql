import React from 'react'
import GetCookie from '../hooks/GetCookies'
import { Navigate } from 'react-router-dom'

const Auth = () => {
const role = GetCookie('role')

function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 100);
    console.log('page to reload')
}

if(role === 'true'){
    refreshPage()
    return <Navigate to='/home'/>
} 
else if (role === 'false') {
    refreshPage()
    return <Navigate to='/admin'/>
}

  return (
    <div>Auth</div>
  )
}

export default Auth