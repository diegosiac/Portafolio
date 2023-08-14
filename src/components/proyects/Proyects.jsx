import { useEffect } from 'react';
import useObserver from '../../hooks/useObserver';
import { proyectList } from '../../data/proyectList';
import { FolderProyect } from '../folderProyect/FolderProyect';
import './proyects.css';
 
export const Proyects = () => {
  const [observer, setElements, entries] = useObserver({
    threshold: 0,
    root: null
  });

  useEffect(() => {
    const border = document.querySelectorAll('.border');
    setElements(border);

  }, [setElements]);

  useEffect(() => {
    entries.forEach( entry => {
      if(entry.isIntersecting){
        const border = entry.target;
        border.classList.add('animate__fadeInLeftBig');
        observer.unobserve(border);
      };
    });
  }, [entries, observer]);

  return (
    <article className='proyects__Container'>
      <div className='proyects__FoldersContainer'>
        {
          proyectList.map( proyect => {
            return(
              <FolderProyect 
                key={proyect.nameProyect}
                imgUrl={proyect.imgUrl} 
                name={proyect.nameProyect} 
                description={proyect.description} 
                linkProyect={proyect.linkProyect} 
                linkRepo={proyect.linkRepo} 
                toolsList={proyect.toolsList}
              />
            )
          })
        }
      </div>
      
      <div className='border animate__animated '></div>
    </article>
  );
};
