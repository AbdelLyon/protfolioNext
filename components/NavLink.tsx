import { NextPage } from 'next';
import Link from 'next/link';
import { useContext } from 'react';
import { StateContext } from '../context/State.context';
import { Props } from '../interfaces/interfaces'

const NavLink: NextPage<Partial<Props>> = ({ id, className, href, children, onChangeCategory }): JSX.Element => {

  const { state } = useContext(StateContext);

  return (
    <li>
      <Link href={href}>
        <a id={id} className={className} onClick={onChangeCategory} style={{
          color: state.color,
          borderBottom: state.category === id ? `2px solid ${state.color}` : "2px solid transparent",
          transitionDuration: ".3s"
        }} >
          {children}
        </a>
      </Link>
    </li>
  )
}

export default NavLink;