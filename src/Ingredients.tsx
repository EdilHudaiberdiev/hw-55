import React from 'react';

interface Props {
  name: string;
  count: number;
  img: string;
}

const Ingredients: React.FC<Props> = ({name, count, img}) => {
  return (
    <div className="Ingredients">
      <img src={img} className="logo" alt={img} />
      <p>{name}</p>
      <p>Count {count}</p>
    </div>
  );
};

export default Ingredients;