
import './App.scss';
// import 'bootstrap/dist/css/bootstrap.css';
import Message from './views/Message';
import Navbar from './navigation/NavBar';
import Accordion from './views/Accordion';
import Carousel from './views/Carousel';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Carousel />
        <section id='about'>
          <div className='about-container'>
            <div className='about-content'>
              <h2>Ayudamos a las empresas
                <br />crecer e innovar</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, id magnam. Voluptatibus quo modi molestiae praesentium, enim pariatur cum hic nesciunt ducimus iure nihil culpa maxime dolore quia quas! Nesciunt.

              </p>
            </div>
          </div>


        </section>
        <Accordion />
        <Message />

      </div>
    </>
  );
}

export default App;
