import React, { Component } from 'react'
import Ingredient from './Ingredient'



export default class BurgerPane extends Component {
  render() {
    const ingredientComponents = this.props.clickedIngredients.map((item, i) => {
      return (
        <Ingredient 
          ingredient={item}
          key={`ingredient-${i}`}
        />

      )
    })
    return (
      <div>
        {ingredientComponents}
      </div>
    )
  }
}