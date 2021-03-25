import { useEffect, useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import HomeHeader from '../../containers/HomeHeader';
import ContentTab from '../../components/ContentTab';
import FoodCard from '../../components/FoodCard';

import dishesList from '../../data/dishes';

import './main.scss';

interface IArrProps {
  image: string,
  title: string,
  price: number,
  availability: string
}

interface IProps extends Array<IArrProps> {}

const Home = () => {

  let { path, url } = useRouteMatch();

  const [ orderedDishes, setOrderedDishes ] = useState<IProps[]>([])

  const addOrderedDishes = (item: any) => {
    setOrderedDishes(oldArray => [...oldArray, item])
    console.log(orderedDishes);
  }

  useEffect(() => {
    console.log(orderedDishes);
  }, [orderedDishes]);

  console.log(path);

  return (
    <div className="homepage">
      <div className="content-section">
        <HomeHeader />
        <ContentTab.Group>
          <ContentTab.Option title="Hot Dishes" link="hot-dishes" active />
          <ContentTab.Option title="Cold Dishes" link="cold-dishes"/>
          <ContentTab.Option title="Soup" link="soup"/>
          <ContentTab.Option title="Grill" link="grill"/>
          <ContentTab.Option title="Appetizer" link="appetizer"/>
          <ContentTab.Option title="Dessert" link="dessert"/>
        </ContentTab.Group>
        <h1>Content</h1>

        <Switch>
          <Route exact path={`${path}hot-dishes`}>
            <FoodCard.Group>
              {
                dishesList.map((item, index) => (
                  <FoodCard.Card
                    key={index}
                    image={item.image}
                    availability={item.availability}
                    title={item.title}
                    price={item.price}
                    onClick={() => addOrderedDishes(item)}
                  />
                ))
              }
            </FoodCard.Group>
          </Route>

          <Route exact path={`${path}cold-dishes`}>

          </Route>
        </Switch>
      </div>
      <div className="payment-section">
        <h1>Payment</h1>

        {
          orderedDishes.length > 0 && orderedDishes.map((item, index) => (
            <h1 key={index}>Blin</h1>
          ))
        }
      </div>
    </div>
  )
}

export default Home;