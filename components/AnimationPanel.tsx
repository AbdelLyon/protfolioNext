import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext } from "react";
import { StateContext } from "../context/State.context";
import { Props } from "../interfaces/interfaces";

const AnimationPanel: NextPage<Partial<Props>> = ({ changeAnimation }): JSX.Element => {

  const { state } = useContext(StateContext);
  const location = useRouter();

  return (
    <>
      <div
        className={`panel ${state.isVisible && "opacity-animation-reverse"}`}
        style={{ backgroundColor: location.pathname === '/' ? state?.color : "#83bdd1" }}>
      </div>
      <div
        className={`panel ${state.isVisible ? !changeAnimation && location.pathname === '/' ? "translate-left-animation" : "height-animation" : ""}`}
        style={{ backgroundColor: location.pathname === '/' ? state?.color : "#83bdd1" }}>
      </div>
    </>
  )
}

export default AnimationPanel;