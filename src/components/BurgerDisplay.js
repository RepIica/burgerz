import React, { Component } from 'react';

const BurgerDisplay = (props) => {

  const burger = props.burger

  const categoryVal = (e) => {
    //run onChange?
  }

    return (
      <div className="BurgerDisplay">
        <img src={burger.imgURL}/>
        <br/>
        <h2>{burger.name}</h2>
        <br/>
        <select onChange={console.log} value={burger.category}>
          <option value="Relatable">Relatable</option>
          <option value="Bougie">Bougie</option>
        </select>
      </div>
    )
}

export default BurgerDisplay
