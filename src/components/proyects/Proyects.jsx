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
          proyectList.map(({name, cover, description, linkDeploy, linkRepo, toolsList}) => {
            return(
              <FolderProyect 
                key={name}
                name={name}
                cover={cover}
                description={description}
                linkDeploy={linkDeploy}
                linkRepo={linkRepo}
                toolsList={toolsList}
              />
            )
          })
        }
      </div>
      
      <div className='border animate__animated '></div>
    </article>
  );
};
