import React from 'react';

const ItemsRow = ({item, index}) => {
  const {name, date, time,image}=item;
  return (
    <tr className='font-bold'>
     <td>{index +1}</td> 
      <td>{name}</td>
      <td>
        <img
          src={image}
          alt={name}
          className='w-10'
        />
      </td>
      <td>{date}</td>
      <td>{time}</td>
      <td>
        <button className="btn btn-primary btn-xs">Mark</button>
      </td>
      <td>
        <button className="btn btn-secondary btn-xs">delete</button>
      </td>
    </tr>
  );
};

export default ItemsRow;