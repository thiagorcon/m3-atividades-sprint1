
const Form = () => {
     const Enviar = () => {
          alert('Obrigado pelo cadastro, em breve entraremos em contato');
       };
     return (
          <>
          <div className="container sm">
          <form className="form">
               <input type="text" placeholder="nome" className="form txt"/><br />
               <input type="email" placeholder="E-mail" /><br />
               <div className="title center">
               <button type="submit" className='btn green' onClick={Enviar}>Enviar</button>
               </div>              
          </form>
          </div>
          </>
     )
}

export default Form;