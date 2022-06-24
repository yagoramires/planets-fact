import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalIcon from '../../assets/icon-hamburger.svg';
import Chevron from '../../assets/icon-chevron.svg';
import './Header.css';

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    modalOpen ? setModalOpen(false) : setModalOpen(true);
  };

  return (
    <div className='header'>
      <span className='header__logo'>the planets</span>
      <div className='modal'>
        <img
          src={ModalIcon}
          alt=''
          className='modal__icon'
          onClick={handleModal}
        />
        <nav className={`modal__nav ${modalOpen ? '' : 'hidden'}`}>
          <ul className='modal__ul'>
            <li className='modal__li'>
              <span className='modal__text'>
                <div className='modal__circle modal__circle--mercury'></div>
                <Link to='/mercury'>Mercury</Link>
              </span>
              <img src={Chevron} alt='' className='modal__arrow' />
            </li>
            <li className='modal__li'>
              <span className='modal__text'>
                <div className='modal__circle modal__circle--venus'></div>
                <Link to='/venus'>Venus</Link>
              </span>
              <img src={Chevron} alt='' className='modal__arrow' />
            </li>
            <li className='modal__li'>
              <span className='modal__text'>
                <div className='modal__circle modal__circle--earth'></div>
                <Link to='/earth'>Earth</Link>
              </span>
              <img src={Chevron} alt='' className='modal__arrow' />
            </li>
            <li className='modal__li'>
              <span className='modal__text'>
                <div className='modal__circle modal__circle--mars'></div>
                <Link to='/mars'>Mars</Link>
              </span>
              <img src={Chevron} alt='' className='modal__arrow' />
            </li>
            <li className='modal__li'>
              <span className='modal__text'>
                <div className='modal__circle modal__circle--jupiter'></div>
                <Link to='/Jupiter'>Jupiter</Link>
              </span>
              <img src={Chevron} alt='' className='modal__arrow' />
            </li>
            <li className='modal__li'>
              <span className='modal__text'>
                <div className='modal__circle modal__circle--saturn'></div>
                <Link to='/saturn'>Saturn</Link>
              </span>
              <img src={Chevron} alt='' className='modal__arrow' />
            </li>
            <li className='modal__li'>
              <span className='modal__text'>
                <div className='modal__circle modal__circle--uranus'></div>
                <Link to='/uranus'>Uranus</Link>
              </span>
              <img src={Chevron} alt='' className='modal__arrow' />
            </li>
            <li className='modal__li'>
              <span className='modal__text'>
                <div className='modal__circle modal__circle--neptune'></div>
                <Link to='/neptune'>Neptune</Link>
              </span>
              <img src={Chevron} alt='' className='modal__arrow' />
            </li>
          </ul>
        </nav>
      </div>
      <div className='menu'>
        <nav className='menu__nav'>
          <ul className='menu__ul'>
            <li className='menu__li menu__li--mercury'>
              <Link to='/mercury' className='link'>
                Mercury
              </Link>
            </li>
            <li className='menu__li menu__li--venus'>
              <Link to='/venus'>Venus</Link>
            </li>
            <li className='menu__li menu__li--earth'>
              <Link to='/earth'>Earth</Link>
            </li>
            <li className='menu__li menu__li--mars'>
              <Link to='/mars'>Mars</Link>
            </li>
            <li className='menu__li menu__li--jupiter'>
              <Link to='/jupiter'>Jupiter</Link>
            </li>
            <li className='menu__li menu__li--saturn'>
              <Link to='/saturn'>Saturn</Link>
            </li>
            <li className='menu__li menu__li--uranus'>
              <Link to='/uranus'>Uranus</Link>
            </li>
            <li className='menu__li menu__li--neptune'>
              <Link className='menu__li menu__li--neptune' to='/neptune'>
                Neptune
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
