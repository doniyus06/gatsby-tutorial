import React from "react"
import Link from "gatsby-link"

export default () => 
<div style={{ color: `blue` }}>
    <h1>Hello World!</h1>

    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <br />
    <div>
        <Link to="/pages-2">pages 2</Link>
    </div>
    <div>
        <Link to="/counter">counter</Link>
    </div>
</div>
