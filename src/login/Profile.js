import React , {useContext} from 'react'
import UserContext from '../components/Usercontext'

function Profile() {
    const {user} = useContext(UserContext)

    if(!user)return <h1>login </h1>
  return (
    <div>welcome {user.username}</div>
  )
}

export default Profile