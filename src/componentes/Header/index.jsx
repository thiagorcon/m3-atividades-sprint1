import Banner from '../Img/Banner.png'

const Header = () => {

     return (
          <>
               <div className='container section-padding md'>
                    <div>
                         <h1 className='title center'>TaquaraFood</h1>
                    </div>
                    <div>
                         <h4 className='title lg black center'>Descubra o melhor site de <span className='title red lg'>comida</span></h4>
                         <p className='section-padding md'>Mussum Ipsum, cacilds vidis litro abertis.  Delegadis gente finis, bibendum egestas augue arcu ut est. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Quem manda na minha terra sou euzis! A ordem dos tratores não altera o pão duris.</p>
                              <div className='title center'>
                         <a className='btn red ' href="#aboutApp">Saiba mais</a>
                         </div >
                    </div>
                    <div className='section-padding md'>
                         <img className='img' src={Banner} />
                    </div>
               </div >
          </>
     )
}

export default Header