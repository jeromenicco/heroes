import React, { useState } from 'react';
import Modal from './ModalHome'
import AwesomeModal from './AwesomeModal'


import './HeaderHome.css';
const HeaderHome = () =>{

    const[openModal, setOpenModal] = useState(false);
    const showModal = ()=> { 
        setOpenModal(true)
    }
    const closeModal = ()=> {
        setOpenModal(false)
    }

    return(
        <div className="headerHome">
            <div className='game-rules' onClick={() =>showModal()} ><AwesomeModal  /></div>
            <div><Modal showModal={openModal} closeModal={closeModal} /></div>
        </div>
    )
}

export default HeaderHome