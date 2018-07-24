import React, { Component } from 'react';

const BurgerItem = (props) => {
  const burger = props.burger

  const clicked = (e)=>{
    console.log(burger)
    props.clickHandler(burger)
  }

  return (
    <div>
      <div className="BurgerItem">
        {burger.name}
      </div>
      <div className="BurgerBottomBun">
        <button onClick={clicked}>Show</button>
        <button onClick={clicked}>Delete</button>
      </div>
    </div>
  )
}

export default BurgerItem
