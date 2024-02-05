
const RestaurantesCard = ({ restaurant }) => {

      return (
            <>
                  <li>
                        <img src={restaurant.imagem} alt={restaurant.name} />
                        <h3>{restaurant.name}</h3>
                        <p>{restaurant.descricao}</p>
                  </li>
            </>

      )
}

export default RestaurantesCard