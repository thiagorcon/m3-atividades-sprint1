// import RestaurantesCard from "./RestaurantesCard"
// import lanchesData from "../../Img/Data"
import {restaurants} from '../../Data/restaurant'
import RestaurantesCard from './RestaurantesCard';

const ListaDeRestaurantes = () => {
 return (
    <>
      <ul>        
          {restaurants.map(restaurant => (
           <RestaurantesCard key={restaurant.id} restaurant={restaurant} />
          ))}        
      </ul>
    </>
 );
};


export default ListaDeRestaurantes