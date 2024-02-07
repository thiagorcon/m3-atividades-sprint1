import Banner from '../Img/Banner.png'

const Header = () => {

     return (
          <>
               <div>
               <h1>TaquaraFood</h1>
               </div>
               <div>
                    <h4 className='title lg black'>Descubra o melhor site de <span className='title red lg'>comida</span></h4>
                    <p>Mussum Ipsum, cacilds vidis litro abertis.  Delegadis gente finis, bibendum egestas augue arcu ut est. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Quem manda na minha terra sou euzis! A ordem dos tratores não altera o pão duris.</p>
                    
                    <a className='btn red' href="#">Saiba mais</a>
               </div>
               <div>
               <img src={Banner} />
               </div>
          </>
     )
}

export default Header