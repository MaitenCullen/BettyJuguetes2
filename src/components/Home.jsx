import './components.css';
import home from '../imgSRC/home.jpg'




function Home() {
  return (
    <div className='home_class'>
    <section className='section_home'>
      <div>
      <img src={home} alt='imagen inicio' className='img_home' />
      </div>
        <div className='p_div'>
        <p>
            Hola! Somos Betty! nos especializamos en accesorios del placer 
            Disponemos una amplia variedad de stock de productos y siempre estamos buscando cosas nuevas
            Podemos asesorarte en lo que estes buscando y en cosas nuevas por conocer 
            Creemos que dentro del placer no existen los limites, así que abrimos las puertas a un mundo fantasticamente divertido
        </p>
        <blockquote>
            "el mundo de la realidad tiene sus limites; el mundo de la realidad es infinito" J.J. Rosseau
        </blockquote>
        </div>
    </section>
    </div>
  )
}

export default Home