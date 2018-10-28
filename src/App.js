import React, { Component } from 'react';
import './App.css';
import {ProductTable, SearchBar} from './Components/Components';


const API_JSON = [
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Computer Goods", price: "$219.99", stocked: false, name: "CPU"},
  {category: "Computer Goods", price: "$432.99", stocked: true, name: "MotherBoard"},
  {category: "Computer Goods", price: "$941.99", stocked: false, name: "VGA"},
]


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText : '',
      inStockOnly : false
    }
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.handleInputCheck = this.handleInputCheck.bind(this)
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    })
  }

  handleInputCheck(checked) {
    this.setState({
      inStockOnly: checked
    })
  }

  render() {
    return (
    <div>
      <SearchBar 
        filterText={this.state.filterText} 
        inStockOnly={this.state.inStockOnly} 
        onFilterTextChange={this.handleFilterTextChange}
        onInputChecked={this.handleInputCheck}
      />
      <ProductTable filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} products={API_JSON} />
    </div>);
  }
}

export default App;
