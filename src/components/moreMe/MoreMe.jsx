import { useEffect } from 'react';
import useObserver from '../../hooks/useObserver';
import { skillNames } from '../../data/skillNames';
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
        <p>!Hola! Mi nombre es Diego y soy un apasionado por las cosas que se crean en internet y en la industria TI.</p>
        <p>
          Mi interes por el desarrollo web inicio en 2022, cuando comence como becario en un bootcamp de desarrollo web.
          Ya contaba con previos conocimientos de programacion, pero tenia curiosidad e interes por aprender mas.
          ¡Y resulto que me habria encantado tanto, que me convertiria en un autentico apasionado del mundo del desarrollo!
        </p>
        <p>
          He creado desde sitios de reservaciones con su propia base de datos (NoSql en FireBase), para almacenar
          las reservaciones y datos de los usuarios, preocupándome por la experiencia del usuario. Tanto he creado un sitio 
          web de ventas online, en el que hecho autenticaciones para los usuarios (gracias al Back-End con Node.js es 
          posible), asi los usuarios tienen completa privacidad y confianza en realizar sus compras con algun metodo de pago, 
          todo esto con un diseño, estructura y cierta calidad en la página que lo acompañe, todo esto creado con la 
          librería de React y aplicando el manejo de rutas para la parte de Fron-End.
        </p>
        <p>
          Continuamente me gusta estar realizando proyectos ambiciosos, me ayuda a ponerme aprueba y reforzar como mejorar 
          mis conocimientos. Si hay una idea ambiciosa hay un proyecto por realizar.
        </p>
        <p>Aquí un listado de las tecnologías con las que he estado trabajando recientemente:</p>
        <ul className='moreMe__Skills'>
          {
            skillNames.map(skill => <li key={skill}>{skill}</li>)
          }
        </ul>
      </div>

      <div className='moreMe__Img'>
        <img src='../assets/imgs/ibai.png' alt='DiegoCruz' id='PhotoDiego' className='animate__animated ' />
      </div>
    </article>
  );
};
