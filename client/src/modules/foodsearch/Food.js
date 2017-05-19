import React, { Component } from 'react';
import SelectedFoods from './SelectedFoods';
import FoodSearch from './FoodSearch';

class Food extends Component {
  state = {
    selectedFoods: [],
  }

  removeFoodItem = (itemIndex) => {
    const filteredFoods = this.state.selectedFoods.filter(
      (item, idx) => itemIndex !== idx,
    );
    this.setState({ selectedFoods: filteredFoods });
  }

  addFood = (food) => {
    const newFoods = this.state.selectedFoods.concat(food);
    this.setState({ selectedFoods: newFoods });
  }

  render() {
    const { selectedFoods } = this.state;
    // const { location, children } = this.props;

    return (
      <div className='ui text container'>
        <SelectedFoods
          foods={selectedFoods}
          onFoodClick={this.removeFoodItem}
        />
        <FoodSearch
          onFoodClick={this.addFood}
        />
      </div>
    );
  }
}

export default Food;
