import logoApp from '../../componentes/Img/IconApp.svg'
const About = () =>{
     
     return(
          <section>
               <div>
          <img src={logoApp} alt="" />
          <h4 className='title lg black'>Sobre o <span className='title lg red'> aplicativo</span></h4>
          </div>
          <div>
          <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptates cupiditate error repudiandae esse laudantium tempora suscipit nostrum eos aut provident dignissimos, dolorem, numquam blanditiis possimus non! Numquam, accusamus minima.</p>
          </div>
          
          </section>
     )
}

export default About