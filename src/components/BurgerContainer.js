import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

const BurgerContainer = (props) => {

  const burgers = props.burgers

  return (
    <div className="BurgerContainer">
      <BurgerFilter />
      <BurgerList burgers={burgers} clickHandler={props.clickHandler}/>
    </div>
  )
}

export default BurgerContainer
