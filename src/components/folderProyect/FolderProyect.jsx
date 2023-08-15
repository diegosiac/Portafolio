import { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import useObserver from '../../hooks/useObserver';
import './folderProyect.css';

export const FolderProyect = ({cover, name, description, linkDeploy, linkRepo, toolsList}) => {
  const [margin, setMargin] = useState(false);

  const mouseInside = () => setMargin(true);
  const mouseOutside = () => setMargin(false);

  const [observer, setElements, entries] = useObserver({
    threshold: 0,
    root: null
  });

  useEffect(() => {
    const img = document.querySelectorAll('.folder__Img');
    setElements(img);
  }, [setElements]);

  useEffect(() => {
    entries.forEach( entry => {
      if(entry.isIntersecting){
        const img = entry.target;        
        img.classList.add('activeImg');
        setTimeout(() => img.classList.remove('activeImg'), 350);
        observer.unobserve(img);
      };
    });
  }, [entries, observer]);

  return (
    <div className='folder__Container' onMouseEnter={mouseInside} onMouseLeave={mouseOutside}>
      <div className='folder__Header'></div>
      <div className={`folder__Img ${ margin && 'activeImg' }`}>
        <img src={cover} alt={`Imagen del Proyecto ${name}`} height='200px' width='300px'/>
      </div>

      <div className='folder__Footer'>
        
        <div className='folder__Links'>
          <a href={linkRepo} target='_blank'>
            <GitHubIcon />
          </a>
          <a href={linkDeploy} target='_blank'>
            <OpenInNewIcon/>
          </a>
        </div>

        <h3>{name}</h3>
        <p>{description}</p>
      
        <ul className='folder__tools'>
          {
            toolsList.map( tool => (
              <li key={tool}>{tool}</li>
            ))
          }
        </ul>
        
      </div>

    </div>
  );
};
