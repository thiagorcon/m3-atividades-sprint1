import Pizza from '../../Img/Pizza.png'
import Sushi from '../../Img/Sushi.png'
import Hamburguer from '../../Img/Hamburguer.png'


const RestaurantesCard = () =>{

      return(
      <>
           
           < img src={Pizza} className='imagem'  alt='Imagem pizza' />
           <h3>titulo  decricao</h3>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ut, quos recusandae dignissimos numquam quam maiores laboriosam! Perspiciatis in rem vitae doloremque quam doloribus laborum veniam consequuntur necessitatibus veritatis. Adipisci.</p>
           
           
           < img src={Sushi} className='imagem'  alt='Imagem sushi' />
           <h3>titulo  decricao</h3>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ut, quos recusandae dignissimos numquam quam maiores laboriosam! Perspiciatis in rem vitae doloremque quam doloribus laborum veniam consequuntur necessitatibus veritatis. Adipisci.</p>
           
           
           < img src={Hamburguer} className='imagem'  alt='Imagem hamburguer' />
           <h3>titulo  decricao</h3>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ut, quos recusandae dignissimos numquam quam maiores laboriosam! Perspiciatis in rem vitae doloremque quam doloribus laborum veniam consequuntur necessitatibus veritatis. Adipisci.</p>
           

      </>

      )
}

export default RestaurantesCard