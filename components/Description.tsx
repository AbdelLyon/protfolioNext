import { NextPage } from "next";
import { useContext } from "react";
import { StateContext } from "../context/State.context";
import { Props } from "../interfaces/interfaces";

const Description: NextPage<Partial<Props>> = (): JSX.Element => {

  const { state } = useContext(StateContext);

  return (
    <div className="description">
      <h3> {state?.title} </h3>
      <p> {state?.content} </p>
    </div>
  )
}
export default Description;