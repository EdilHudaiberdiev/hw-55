import React from 'react';

interface Props {
  item: {
    id: number;
    name: string;
    img: string;
    count: number
  };
  countClick: (id: number) => void;
  deleteIngred: (id: number) => void;
}

const Ingredients: React.FC<Props> = ({item, countClick, deleteIngred}) => {
  return (
    <div className="ingredientsElement">
      <p> {item.name} </p>
      <img  onClick={()=> countClick(item.id)} src={item.img} className="ingredientsImg" alt={item.name}/>
      <p>Count {item.count}</p>
      <button onClick={()=> deleteIngred(item.id)} >x</button>
    </div>
  );
};

export default Ingredients;