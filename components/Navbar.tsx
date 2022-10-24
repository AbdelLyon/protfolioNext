import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useContext, useEffect, useState } from 'react';
import { StateContext } from '../context/State.context';
import { Props } from '../interfaces/interfaces';
import BasicModal from './Modal';
import NavLink from './NavLink';

const Navbar: NextPage<Partial<Props>> = ({ onChangeCategory }): JSX.Element => {

  const { setState } = useContext(StateContext);
  const location = useRouter();
  const [className, setClassName] = useState<string>();

  const toggleClassName = useCallback(() => window.scrollY >= 578 ? setClassName('navbar-light') : setClassName(''), [setClassName])

  useEffect(() => {
    document.addEventListener('scroll', toggleClassName)
    return () => document.removeEventListener('scroll', toggleClassName)
  }, [toggleClassName])

  useEffect(() => {
    if (location.pathname !== "/") setState((state) => ({ ...state, color: "#83bdd1" }))
  }, [location.pathname, setState])

  const displayNavLink = () => {
    return (
      <>
        {
          location.pathname !== '/' &&
          <NavLink id='home' className="link" href={'/'}>
            Accueil
          </NavLink>
        }
        <NavLink id='about' className={`link ${location.pathname === '/about' && "active"}`} href={'/about'} >
          À-propos
        </NavLink>
        <NavLink id='projects' className={`link ${location.pathname === '/projects' && "active"}`} href={'/projects'}>
          Projects
        </NavLink>
        <NavLink id='contact' className={`link ${location.pathname === '/contact' && "active"}`} href={'/contact'}>
          Contact
        </NavLink>
      </>
    )
  }

  return (
    <div
      className={`container-nav ${className}`}
      style={{
        position: (location.pathname !== "/" && location.pathname !== "/contact")
          ? (className === "navbar-light") ? 'fixed' : 'absolute'
          : 'static',
      }}>
      {
        location.pathname === '/' &&
        <nav>
          <ul>
            <NavLink id='front-end' className="link" href={"#"} onChangeCategory={onChangeCategory}>
              Front-end
            </NavLink>
            <NavLink id='back-end' className="link" href={'#'} onChangeCategory={onChangeCategory}>
              Back-end
            </NavLink>
          </ul>
        </nav>
      }
      <nav>
        <ul className='nav-link'>
          {displayNavLink()}
        </ul>
        <BasicModal>
          <ul className="nav-link-burger">
            {displayNavLink()}
          </ul>
        </BasicModal>
      </nav>

    </div >

  )
}
export default Navbar;

