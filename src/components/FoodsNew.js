import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import FoodsForm from './FoodsForm';


class FoodsNew extends Component {
  render() {
    return (
      <div className="foods-new">
        <h3>Add Food</h3>
        <p> Please type in a food, and select the correct food and calorie data combination</p>
        <SearchBar />
        <p>Or, enter a food manually here:</p>
        <FoodsForm history={this.props.history} />
      </div>
    );
  }
}

export default FoodsNew;