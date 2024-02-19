import ListaDeRestaurantes from "./ListaDeRestaurantes"
import IconRestaurantes from '../../componentes/Img/IconRestFamo.svg'

const Restaurant = () =>{
     
     return(
          <>
          <div className="container section-green section-padding" >
          <img src={IconRestaurantes} alt="" />
          <h2 className="title center">Melhores dicas de lanches</h2>
          <ListaDeRestaurantes />
          </div>
          </>
          
     )
}

export default Restaurant