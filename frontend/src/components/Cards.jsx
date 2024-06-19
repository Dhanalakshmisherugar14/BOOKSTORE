import React from "react";
import PropTypes from "prop-types";

function Cards({ item }) {
  if (!item) {
    return null; // Or render a placeholder/loading state
  }

  console.log(item.id);

  return (
    <div className="card w-96 min-h-96 max-h-96 dark:bg-base-100 bg-gray-100 shadow-2xl pt-5">
      <figure>
        <img src={item.image} alt={item.title} className="w-80 h-60"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-1">
          {item.title}&nbsp;
          <div className="badge badge-secondary">{item.price === 0 ? "FREE" : "NEW"}</div>
        </h2>
        <p>{item.description}</p>
        <p>Price: {item.price === 0 ? "Free" : `$${item.price}`}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{item.category}</div>
        </div>
      </div>
    </div>
  );
}

Cards.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cards;
