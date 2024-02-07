
const Form = () => {
     const Enviar = () => {
          alert('Obrigado pelo cadastro, em breve entraremos em contato');
       };
     return (
          <form className="form">
               <input type="text" placeholder="nome" /><br />
               <input type="email" placeholder="E-mail" /><br />
               <button type="submit" className='btn green' onClick={Enviar}>Enviar</button>
              
          </form>
     )
}

export default Form;