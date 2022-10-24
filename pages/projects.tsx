import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useState } from "react";
import { Link } from "react-scroll";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";

const Projects = (): JSX.Element => {

  const [open, setOpen] = useState(false);
  const handleClick = useCallback(() => setOpen(true), [setOpen])

  return (
    <Layout title='Projets'>
      <Header className="size-animation shadow-none">
        <div className="header-bg-image header-bg-image-project opacity-animation">
          <div className="container container-title translate-down-animation" >
            <h1 > Adipisci qui aliquid tenetur asperiores aliquid tenetur asperiores! </h1>
            <Link
              className="icon translate-down-alternate-animation"
              activeClass="active"
              onClick={handleClick}
              to="main"
              spy={true}
              smooth='easeInQuint'
              offset={0}
              duration={1000}>
              <FontAwesomeIcon width="1.6rem" icon={faAngleDoubleDown} />
            </Link>
          </div>
        </div>
      </Header>
      <main className="container" id="main"> {open && <ProjectList />}</main>
      {open && <Footer />}
    </Layout>
  )
}

export default Projects;