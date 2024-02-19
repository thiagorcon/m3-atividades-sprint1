import Header from "../../componentes/Header"
import Footer from '../Footer'
import Form from '../AreaForm'
import About from "../AboutUs";
import Restaurant from "../Restaurant";

const HomePage = () => {

     return (
          <>
               
                    <Header />
                    <main>
                         <Restaurant />
                         <About />
                         <Form />
                    </main>
                    <Footer />
              
          </>
     );
}

export default HomePage