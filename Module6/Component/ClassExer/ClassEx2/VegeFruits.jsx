import { useState } from 'react';

// This is the small row for each fruit or vegetable
function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

// Heading for Fruits and Vegetables)
function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2" style={{ textAlign: 'left', paddingTop: '10px' }}>
        {category}
      </th>
    </tr>
  );
}

// This component filters the data and builds the table list
function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    // Check if the product name matches what is typed in search
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    // Check if we should skip items that are out of stock
    if (inStockOnly && !product.stocked) {
      return;
    }
    // If the category is new, add a category header row
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    // Product row 
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

// Search bar function 
function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <form style={{ marginBottom: '15px' }}>
      <input 
        type="text" 
        value={filterText} 
        placeholder="Search..." 
        onChange={(e) => onFilterTextChange(e.target.value)} 
      />
      <label style={{ display: 'block', marginTop: '10px' }}>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)} 
        />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

// The main component that brings everything together
export default function VegeFruitsTable() {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  
  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ];

  return (
    <div className="product-container">
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText} 
        onInStockOnlyChange={setInStockOnly} 
      />
      <ProductTable 
        products={PRODUCTS} 
        filterText={filterText}
        inStockOnly={inStockOnly} 
      />
    </div>
  );
}