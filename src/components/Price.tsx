import React from 'react';


interface Props {
  number: number;
}

const Price:  React.FC<Props>= ({number}) => {
  return (
      <div className="totalPrice">Price {number}</div>
  );
};

export default Price;