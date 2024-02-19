
const RestaurantesCard = ({ restaurant }) => {

      return (
            <>
                  <li>
                        <img src={restaurant.imagem} alt={restaurant.name} />
                        <h3 className="title red">{restaurant.name}</h3>
                        <p className="paragraph">{restaurant.descricao}</p>
                  </li>
            </>

      )
}

export default RestaurantesCard