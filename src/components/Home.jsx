import './components.css';
import home from '../imgSRC/home.jpg'




function Home() {
  return (
    <div>
    <div className='home_class'>
    <section className='section_home'>
        <img src={home} alt='imagen inicio' className='img_home' />
        <div className='p_div'>
        <p>
            Hola! Somos Betty! nos especializamos en accesorios del placer 
            Disponemos una amplia variedad de stock de productos y siempre estamos buscando cosas nuevas
            Podemos asesorarte en lo que estes buscando y en cosas nuevas por conocer 
            Creemos que dentro del placer no existen los limites, así que abrimos las puertas a un mundo fantasticamente divertido
        </p>
        <p>
            "el mundo de la realidad tiene sus limites; el mundo de la realidad es infinito" J.J. Rosseau
        </p>
        </div>
    </section>
    </div>
    </div>
  )
}

export default Home