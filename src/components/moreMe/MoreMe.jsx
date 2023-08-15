import { useEffect } from 'react';
import useObserver from '../../hooks/useObserver';
import { skillNames } from '../../data/skillNames';
import character from '../../assets/imgs/character.png';
import './moreMe.css';

export const MoreMe = () => {

  const [observer, setElements, entries] = useObserver({
    threshold: 0,
    root: null
  });

  useEffect(() => {
    const img = document.querySelectorAll('#PhotoDiego');
    setElements(img);

  }, [setElements]);


  useEffect(() => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.classList.add('animate__fadeInRight');
        observer.unobserve(img);
      };
    });
  }, [entries, observer]);

  return (
    <article className='moreMe__Container'>

      <div className='moreMe__Text'>

        <h2 className='moreMe__name'>
          <span className='firstName'>Diego</span>
          <span className='lastName'>Cruz</span>
        </h2>

        <div>
          <p>
            Soy un desarrollador con experiencia en ReactJS y NodeJS.
          </p>
          <p>
            Continuamente estoy realizando proyectos, participando en hackathons y contribuyendo a proyectos, 
            lo que me ayuda a ponerme a prueba y mejorar mis conocimientos. Si hay una idea ambiciosa, hay un proyecto por realizar.
          </p>
        </div>

        <div className='moreMe__skills'>
          <p>Aquí un listado de las tecnologías con las que he estado trabajando recientemente:</p>
          <ul className='moreMe__Skills'>
            {
              skillNames.map(skill => <li key={skill}>{skill}</li>)
            }
          </ul>
        </div>

      </div>

      <div className='moreMe__Img'>
        <img src={character} alt='DiegoCruz' id='PhotoDiego' className='animate__animated ' />
      </div>
    </article>
  );
};
