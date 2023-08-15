import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import 'animate.css';
import './header.css';

export const Header = () => {
  return (
    <header className='header border-bottom'>
      <div className='header__container animate__animated animate__fadeInDown'>
        
        <div className='header__Title animate__animated animate__fadeInUpBig'>
          <h1 className='mobile'> 
            <span>F</span>
            <span>R</span>
            <span>O</span>
            <span>N</span>
            <span>T</span>
            <br/>
            <span>----</span>
            <span>E</span>
            <span>N</span>
            <span>D</span>
            <br/>
            <span>D</span>
            <span>E</span>
            <span>V</span>
            <span>E</span>
            <span>L</span>
            <span>O</span>
            <span>P</span>
            <span>E</span>
            <span>R</span>
          </h1>
          <h1 className='desktop'> 
            <div>
              <span>F</span>
              <span>R</span>
              <span>O</span>
              <span>N</span>
              <span>T</span>
              <span>----</span>
              <span>E</span>
              <span>N</span>
              <span>D</span>
            </div>
            <div>
              <span>D</span>
              <span>E</span>
              <span>V</span>
              <span>E</span>
              <span>L</span>
              <span>O</span>
              <span>P</span>
              <span>E</span>
              <span>R</span>
            </div>
          </h1>
        </div>

        <div className='header__info animate__animated animate__fadeInUp'>
          <span className='info__Icon'>
            <KeyboardDoubleArrowDownIcon sx={{ fontSize: "30px"}} />
          </span> 
          <p>
            <span>Acerca de mí:</span>Ayudo a personas 
            increíbles a crear e innovar proyectos web. Desde diseño de interacción, hasta sistemas de diseño escalables.  
          </p>
        </div>

      </div>
    </header>
  );
};
