import ListaDeRestaurantes from "./ListaDeRestaurantes"
import IconRestaurantes from '../../componentes/Img/IconRestFamo.svg'

const Restaurant = () =>{
     
     return(
          <>
          <img src={IconRestaurantes} alt="" />
          <h2>Restaurantes famosos</h2>
          <ListaDeRestaurantes />
          </>
          
     )
}

export default Restaurant