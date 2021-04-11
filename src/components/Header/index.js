import React from 'react'
import {Link} from 'react-router-dom'


export default function Header() {
    return (
        <div>
            <h1>Header </h1>
            <Link className="mr-2" to="/">Home</Link>
            <Link className="mr-2" to="/courses/frontend">Courses</Link>
            <Link className="mr-2" to="/course/bootccamp">Course Detail</Link>
            {/* <link to="/">Home</link> */}
        </div>
    )
}
