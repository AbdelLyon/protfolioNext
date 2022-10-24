import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Props } from '../interfaces/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useContext, useState } from 'react';
import { faBarsStaggered, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { StateContext } from '../context/State.context';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const BasicModal: NextPage<Partial<Props>> = ({ children }): JSX.Element => {

  const { state } = useContext(StateContext);
  const location = useRouter();
  const [open, setOpen] = useState(false);
  const [modalAnimation, setModalAnimation] = useState('translate-up-burger-animation');

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleClick = useCallback(() => {
    setModalAnimation('translate-down-burger-animation')
    const timer = setTimeout(() => {
      setModalAnimation('translate-up-burger-animation')
      handleClose()
    }, 1000);
    return () => clearTimeout(timer)
  }, [])


  return (
    <>
      <div className={`burger icon ${location.pathname !== "/" && location.pathname !== "/contact" && "w-full"}`} onClick={handleOpen} >
        <FontAwesomeIcon fontSize={'2.2rem'} icon={faBarsStaggered} color={state.color} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={`modal ${modalAnimation}`}>
          <div className='icon' style={{ display: "flex", width: '100%', justifyContent: "flex-end" }} onClick={handleClick}>
            <FontAwesomeIcon fontSize={'2.2rem'} icon={faXmarkCircle} color={state.color} />
          </div>
          {children}
        </Box>
      </Modal>
    </>
  );
}


export default BasicModal;