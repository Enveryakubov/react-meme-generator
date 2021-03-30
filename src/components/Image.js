import React from 'react'

const Image = ({utext, ltext, img, randImg}) => {  
    return (
        <div className="container">
            <h3 id="uppertext">{utext}</h3>
            <h3 id="lowertext">{ltext}</h3>
            <div onClick={randImg}>
                <img style={{width:"100%", display: "block", marginLeft: "auto", marginRight: "auto", borderRadius:"5px"}} src={img} alt=""/>
            </div>
        </div>
    )
}

export default Image
