
import './App.scss';
// import 'bootstrap/dist/css/bootstrap.css';
import Message from './views/Message';
import Navbar from './navigation/NavBar';
import Accordion from './views/Accordion';
import Carousel from './views/Carousel';
import Footer from './views/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <div className='backgorund'>
          <h1 className='title'>BARBERÍA RAUSTIN</h1>
        </div>

        <section id='about'>
          <div className='about-container'>
            <div className='about-content'>
              <div>
                <h2 className='about-title'>BARBERÍA RAUSTIN </h2>
                <p className='about-p'>
                  Desde 2021 nos dedicamos a mejorar la imagen de nuestros clientes. El objetivo es
                  brindar el mejor servicio y marcar tendencia. Por eso construimos un espacio en el mundo para que
                  disfrutes y te sientas cómodo. Queremos que RAUSTIN sea tu lugar donde, más allá de cambiar tu look,
                  puedes relajarte, disfrutar de tu refresco favorito y encontrarte con amigos.
                  <br />
                  <h6 className='p-h6' >
                    - Te esperamos -
                  </h6>
                </p>
              </div>

            </div>
          </div>
        </section>
        <Carousel />
        <Accordion />
        <Message />
        <Footer />
      </div>
    </>
  );
}

export default App;
