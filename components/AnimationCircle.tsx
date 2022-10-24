import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import { useContext } from "react";
import { StateContext } from "../context/State.context";
import { Props } from "../interfaces/interfaces";

const AnimationCircle: NextPage<Partial<Props>> = ({ changeAnimation }): JSX.Element => {

  const { state } = useContext(StateContext);

  return (
    <div
      className={`circle flex flex-row-center ${state.isVisible ? !changeAnimation ? "scale-animation" : "rotate-animation" : ""}`}
      style={{ backgroundColor: state.color }}>
      <FontAwesomeIcon
        className="icon-lg bg-white"
        icon={state.icon}
        color={state.color}
      />
    </div>
  )
}

export default AnimationCircle;