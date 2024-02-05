
const Form = () => {
     const Enviar = () => {
          alert('Obrigado pelo cadastro, em breve entraremos em contato');
       };
     return (
          <section>
               <input type="text" placeholder="nome" /><br />
               <input type="email" placeholder="E-mail" /><br />
               <button onClick={Enviar}>Enviar</button>
          </section>
     )
}

export default Form;