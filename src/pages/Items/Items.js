import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';

const Items = () => {
const { items} = useItems([]);
const navigate =useNavigate();
const handelNavigate =id =>{
  navigate(`/item/${id}`)
}
  return (
    <div className="max-w-7xl mx-auto p-5">
      <h2 className="text-center text-primary font-bold text-sm md:text-2xl uppercase mb-3">
        Items
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {items?.map(({_id, name, date, time, image }, index) => (
          <div className="card bg-base-100 shadow-xl" key={index}>
            <figure className="px-10 pt-10">
              <img src={image} alt={name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{name}</h2>
              <p>
                Was added in {date} at {time}
              </p>
              <div className="card-actions">
                <button
                  onClick={() => handelNavigate(_id)}
                  className="btn btn-primary"
                >
                  Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;