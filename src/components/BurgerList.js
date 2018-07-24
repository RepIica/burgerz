import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = (props)=> {
  const burgers = props.burgers

  const burgerItems = burgers.map(burger => {

    return(
      <BurgerItem
        burger={burger}
        key={burger.id}
        clickHandler={props.clickHandler}
      />

    )
  })

  return (
    <div className="BurgerList">
      {burgerItems}
    </div>
  )
}

export default BurgerList
