import React from 'react'
import { useSelector } from 'react-redux'


function NavLink(props) {

    return (
        <div className="NavLink" style={{backgroundColor}}>
            <p>{props.content}</p>
        </div>
    )
}

export default NavLink
