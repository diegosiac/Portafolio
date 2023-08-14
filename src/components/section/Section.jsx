import { useEffect } from 'react';
import useObserver from '../../hooks/useObserver';
import './section.css';

export const Section = ({children, headerName}) => {
  const [observer, setElements, entries] = useObserver({
    threshold: 0.10,
    root: null
  });

  useEffect(() => {
    const spans = document.querySelectorAll('.section__Header span');
    setElements(spans);

  }, [setElements]);

  useEffect(() => {
    entries.forEach( entry => {
      if(entry.isIntersecting){
        const span = entry.target;
        span.classList.add('animation__span');
        observer.unobserve(span);
      };
    });
  }, [entries, observer]);

  return (
    <section className='section'>

      <header className='section__Header'>
        <h2>{headerName}</h2>
        <span></span>
      </header>

      {children}

    </section>
  );
};

