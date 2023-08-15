import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './contact.css';

export const Contact = () => {
  const [hover, setHover] = useState(false);
  const [copy, setCopy] = useState(false);

  const emai = 'diego35502@hotmail.com';

  const isOnHover = () => setHover(true);
  const notOnHover = () => setHover(false);
  const isCopy = () => {
    setCopy(true);
    setTimeout(() => setCopy(false) , 1500);
  };

  return (
    <article className='contact__Container'>
        <div className='contact__p'>
          <p>¿Quieres trabajar conmigo?</p>
          <p>Aquí me puedes encontrar:</p>
        </div>
        
        <div className='contact__links'>
          <div className='contact__Icons'>
            <a href='https://github.com/diegosiac' target='_blank'>
              <GitHubIcon/>
              <span className='contact__Social'>Github</span>
            </a>
            <a href='https://www.linkedin.com/in/diegosiac/' target='_blank'>
              <LinkedInIcon/>
              <span className='contact__Social'>LinkedIn</span>
            </a>
          </div>

          <div className='contact__email'> 
            <CopyToClipboard text={emai}>
              <button 
                onClick={isCopy} 
                className='email__button' 
                onMouseEnter={isOnHover} 
                onMouseLeave={notOnHover}
              >
                {emai}
              </button> 
            </CopyToClipboard>
            <div className='email__copy' style={{ opacity: hover ? 1 : 0 , transform: `translateY(${hover ? 20 : 0}%)`}}> 
              <span>{copy ? 'Copiado' : 'Click Copiar'}</span> 
            </div> 
          </div>  
        </div>      
    </article>
  );
};
