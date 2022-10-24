import { NextPage } from "next";
import { Props } from "../interfaces/interfaces";
import AnimationPanel from "./AnimationPanel";
import Navbar from "./Navbar";

const Header: NextPage<Partial<Props>> = ({
  changeAnimation,
  className,
  children,
  onChangeCategory
}): JSX.Element => {

  return (
    <div className="container-header">
      <AnimationPanel changeAnimation={changeAnimation} />
      <header className={className}>
        <Navbar onChangeCategory={onChangeCategory} />
        {children}
      </header>
    </div >
  )
}

export default Header;