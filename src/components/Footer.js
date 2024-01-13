import React from 'react'
import { useSelector } from 'react-redux'


function Footer() {

        const backgroundColor = useSelector(state => state.color4 );

    return (
        <div className="Footer" style={{'backgroundColor': 'white'}}>
            <p>Footer Content</p>
        </div>
    )
}

export default Footer
