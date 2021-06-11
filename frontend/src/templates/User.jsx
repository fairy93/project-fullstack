import React from 'react'
import { UserMenu as Menu } from '../common'
import './table.style.css'

const User = ({children}) => (<>
    <h1>User</h1>
    <Menu/>
    {children}
</>)

export default User

// 유저-템플릿-앱 순자식