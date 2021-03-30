import React from 'react'

const Input = ({set}) => {
    const handleChangeU = (e) => {
        set[0]([e.target.name] = e.target.value)
    }
    const handleChangeL = (e) => {
        set[1]([e.target.name] = e.target.value)
    }

    return (
        <div className="memeCreationForm">
            <div className="test">
                <input type="text" name="utext" placeholder={set[3]} onChange={handleChangeU} className="center"/>
                <br/>
                <input type="text" name="ltext" placeholder={set[4]} onChange={handleChangeL} className="center"/>
                <br/>
                <button className="center" value="" onClick={set[2]}>Сменить фото</button> 
            </div>    
        </div>
    )
}

export default Input
