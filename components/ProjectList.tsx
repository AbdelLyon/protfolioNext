import { useContext } from "react";
import { StateContext } from "../context/State.context";
import { Props } from "../interfaces/interfaces";
import { useInView } from 'react-intersection-observer';
import { NextPage } from "next";
import Image from "next/image";
import { width } from "@mui/system";

const ProjectList: NextPage<Partial<Props>> = (): JSX.Element => {

  const { state } = useContext(StateContext);

  const { ref: ref1, inView: ref1Element } = useInView({ triggerOnce: true, threshold: [1] });
  const { ref: ref2, inView: ref2Element } = useInView({ triggerOnce: true, threshold: [1] });
  const { ref: ref3, inView: ref3Element } = useInView({ triggerOnce: true, threshold: [1] });
  const { ref: ref4, inView: ref4Element } = useInView({ triggerOnce: true, threshold: [1] });
  const { ref: ref5, inView: ref5Element } = useInView({ triggerOnce: true, threshold: [1] });
  const { ref: ref6, inView: ref6Element } = useInView({ triggerOnce: true, threshold: [1] });

  return (
    <>
      <div className="project-content" id="test">
        <div ref={ref1} className={`project  ${ref1Element ? "translateUp1-animation" : ""} `}>
          <div style={{ position: "relative", height: "20rem" }}>
            <Image sizes="100vw" layout="fill" objectFit="cover" style={{ borderRadius: "5px" }} src="https://cdn.pixabay.com/photo/2022/10/03/00/15/wood-7494658_960_720.jpg" alt="image" />
          </div>
        </div>
        <div ref={ref2} className={`project ${ref2Element ? "translateUp2-animation" : ""} `}>
          <h3> {state?.title} </h3>
          <p>Lorem aceatfugiat quasi maxime sunt facilis, pariatur deserunt nobis beatae vitae ullam magni,animi obcaecati tempora illo! Magni molestiae commodi nihil sint molestias saepeincidunt? Quis repellat odit in perspiciatis dignissimos fuga eligendi.</p>

        </div>
      </div>
      <div className="project-content">
        <div ref={ref3} className={`project  ${ref3Element ? "translateUp1-animation" : ""} `}>
          <div style={{ position: "relative", height: "20rem" }}>
            <Image sizes="100vw" layout="fill" objectFit="cover" style={{ borderRadius: "5px" }} src="https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037_960_720.jpg" alt="image" />
          </div>
        </div>
        <div ref={ref4} className={`project ${ref4Element ? "translateUp2-animation" : ""} `}>
          <h3> {state?.title} </h3>
          <p>Lorem aceatfugiat quasi maxime sunt facilis, pariatur deserunt nobis beatae vitae ullam magni,animi obcaecati tempora illo! Magni molestiae commodi nihil sint molestias saepeincidunt? Quis repellat odit in perspiciatis dignissimos fuga eligendi.</p>
        </div>
      </div>
      <div className="project-content" id="test">
        <div ref={ref5} className={`project  ${ref5Element ? "translateUp1-animation" : ""} `}>
          <div style={{ position: "relative", height: "20rem" }}>
            <Image sizes="100vw" layout="fill" objectFit="cover" style={{ borderRadius: "5px" }} src="https://cdn.pixabay.com/photo/2021/05/29/18/59/petra-6294051_960_720.jpg" alt="image" />
          </div>
        </div>
        <div ref={ref6} className={`project ${ref6Element ? "translateUp2-animation" : ""} `}>
          <h3> {state?.title} </h3>
          <p>Lorem aceatfugiat quasi maxime sunt facilis, pariatur deserunt nobis beatae vitae ullam magni,animi obcaecati tempora illo! Magni molestiae commodi nihil sint molestias saepeincidunt? Quis repellat odit in perspiciatis dignissimos fuga eligendi.</p>

        </div>
      </div>
    </>

  )
}
export default ProjectList;