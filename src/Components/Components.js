import React from 'react';

// Product Row
function ProductRow(props) {  
  // Props: ItemName, ItemPrice, inStock
  const itemStyle = {
    "color": props.inStock ? 'black' : 'blue',
    "display": 'inline'
  }
  return (
    <tr>
      <td style={itemStyle}>{props.ItemName}</td>
      <td>{props.ItemPrice}</td>
    </tr>
  );
}


// Product Category Row
function ProductCategoryRow(props){
  return(
    <tr style={{'backgroundColor': 'blue'}}>{props.ItemType}</tr>
  );
}

// Product Table
function ProductTable(props){
  // Props : props.products
  // Need to identify how many diffrent categories
  const categories = []
  const tableRows = []
  props.products.forEach((product) => {
    // Checking if item already on categories list
    // If not includes, Add it to the list
    if(categories.indexOf(product.category) === -1) {
      categories.push(product.category)
    }
  });
  
  // Adding rows to table according categories
  categories.forEach((category) => {
    tableRows.push(<ProductCategoryRow ItemType={category}/>)
    props.products.forEach((product) => {
      if ((product.category) === category) {
        tableRows.push(<ProductRow ItemName={product.name} ItemPrice={product.price} inStock={product.stocked}/>)
      }
    })
  })

  return(
    <table>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.TextInputChange = this.TextInputChange.bind(this)
    this.CheckInputChange = this.CheckInputChange.bind(this)
  }

  TextInputChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  CheckInputChange(e) {
    this.props.onInputChecked(e.target.checked)
  }

  render () {
    return (
      <form>
        <input 
          type="text" 
          placeholder="Search..." 
          value={this.props.filterText}
          onChange={this.TextInputChange}
        />
        <p>
          <input 
            type="checkbox" 
            checked={this.props.inStockOnly}
            onChange={this.CheckInputChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}
export {ProductTable, SearchBar};