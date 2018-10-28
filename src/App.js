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
  {category: "Sporting", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting", price: "$9.99", stocked: true, name: "Baseball"},
]


class App extends Component {
  render() {
    return (
    <div>
      <SearchBar />
      <ProductTable products={API_JSON} />
    </div>);
  }
}

export default App;
