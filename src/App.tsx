import { useState } from 'react'
import cheeseImg from './assets/cheese.png'
import meatImg from './assets/meat.png'
import pattyImg from './assets/patty.png'
import saladImg from './assets/salad.png'
import './App.css'
import Ingredients from './components/Ingredients';
import Price from './components/Price';

interface ingredientsInterface {
  name: string;
  count: number;
  img: string;
  id: number;
  price: number;
}

function App() {

  const [ingredients, setIngredients] = useState<ingredientsInterface[]>([
    {img: cheeseImg,  name: "Cheese", count: 0, id: 1, price: 50},
    {img: meatImg,  name: "Bacon", count: 0, id: 2, price: 60},
    {img: pattyImg,  name: "Meat", count: 0, id: 3,  price: 80},
    {img: saladImg,  name: "Salad", count: 0, id: 4,  price: 10},
  ]);

  const [totalPrice, setTotalPrice] = useState<number>(30)



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
        setTotalPrice(prevState => prevState + item.price)
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
        setTotalPrice(prevState => prevState - item.price)
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
      <div className="container">
        <div className="ingredientsList">
          {ingredients.map(item => (
            <Ingredients key={item.id} item={item} deleteIngred={deleteIngred} countClick={countClick}/>
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

      </div>
      <Price number={totalPrice}/>
    </>
  )
}

export default App


