import React from 'react';
import './itemList.css';

const ItemList = ({ items, deleteItem }) => {
  return (
    <ul className='ul'>
      {items.map((item, index) => (
        <li className='li' key={index}>
          <button onClick={() => deleteItem(index)}>X</button>
          {item}
          <div className='right_block'></div>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;