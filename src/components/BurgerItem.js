import React from 'react'
import "../styles/burgerItem.css"

const BurgerItem = ({ burger }) => {
    return (
        <div className='burgerItem'>
            <div><img alt="" src={burger.image} /></div>
            <div className='contentItem'>
                <h2>{burger.name}</h2>
                <h6>{burger.content}</h6>
                <i>{burger.price}  $</i>
            </div>

        </div>
    )
}

export default BurgerItem