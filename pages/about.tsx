import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback, useState } from 'react'
import { Link } from 'react-scroll'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import ProjectList from '../components/ProjectList'
// import pdf from './files/cv.pdf';

const About = () => {

  const [open, setOpen] = useState(false);
  const handleClick = useCallback(() => setOpen(true), [setOpen])

  return (
    <Layout title='À propos'>
      <Header className='size-animation shadow-none'>
        <div className="header-bg-image header-bg-image-about opacity-animation ">
          <div className="container container-title translate-down-animation">
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
      <main className="container" id="main">
        {open &&
          <>
            <ProjectList />
            {/* <div className='flex flex-row-start'>
              <small className='mr-1'>Télecharger Mon cv ici </small>
              <a href={pdf} className="icon" target="_blank" rel="noreferrer" >  <FontAwesomeIcon icon={['fas', 'download']} /></a>
            </div> */}
          </>
        }
      </main>
      {open && <Footer />}
    </Layout>
  )
}

export default About