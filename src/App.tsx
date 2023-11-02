import { useState } from 'react'
import cheeseImg from './assets/cheese.png'
import meatImg from './assets/meat.png'
import pattyImg from './assets/patty.png'
import saladImg from './assets/salad.png'
import './App.css'

interface ingredientsInterface {
  name: string;
  count: number;
  img: string;
  id: number;
  price: number;
}

function App() {

  const [ingredients, setIngredients] = useState<ingredientsInterface[]>([
    {img: cheeseImg,  name: "Cheese", count: 0, id: 1, price: 10},
    {img: meatImg,  name: "Bacon", count: 0, id: 2, price: 10},
    {img: pattyImg,  name: "Meat", count: 0, id: 3,  price: 10},
    {img: saladImg,  name: "Salad", count: 0, id: 4,  price: 10},
  ]);

  const renderBurger = () => {
    const arrayOfIngredClass: string[] = []
    for (let i = 0; i < ingredients.length; i++) {
      if (ingredients[i].count > 0) {

        for (let g = 0; g < ingredients[i].count; g++){
          arrayOfIngredClass.push(ingredients[i].name);
        }
      }
    }

    return arrayOfIngredClass.map((item, i) => (
      <div key={i} className={item}></div>
    ))
  }

  const countClick = (id: number) => {
    console.log(id);
    setIngredients(ingredients.map(item => {
      if (item.id === id ) {
        return {
          ...item,
          count: item.count + 1
        }
      }
      return  item;
    }));
  };

  const deleteIngred = (id: number) => {
    setIngredients(ingredients.map(item => {
      if (item.id === id && item.count > 0) {
        return {
          ...item,
          count: item.count - 1
        }
      }
      return  item
    }))

  }

  return (
    <>
      <div className="ingredientsList">
        {ingredients.map(item => (
          <div className="ingredientsElement"  key={item.id}>
            <p> {item.name} </p>
            <img  onClick={()=> countClick(item.id)} src={item.img} className="ingredientsImg" alt={item.name}/>
            <p>Count {item.count}</p>
            <button onClick={()=> deleteIngred(item.id)} >x</button>
           </div>
        ))}
      </div>

      <div>
        <div className="Burger">
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
          {renderBurger()}

          <div className="BreadBottom"></div>
        </div>
      </div>
    </>
  )
}

export default App
