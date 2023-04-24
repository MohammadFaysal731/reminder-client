import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/item/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [item]);
  return (
    <div className="max-w-7xl mx-auto p-5">
      <button className="btn btn-xs btn-primary">
        <Link to="/items">Back</Link>
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* image  */}
        <div class="avatar">
          <div class="w-full mask mask-hexagon">
            <img src={item.image} alt={item.name} />
          </div>
        </div>
        {/* description */}
        <div className="">
          <h2 className="card-title">{item.name}</h2>
          <p>
            Was added in {item.date} at {item.time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
