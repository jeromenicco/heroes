import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import './ModalHome.css'

const Modal = ({showModal,closeModal}) =>{
    return(
        showModal && (
            <>
            <div class="modal-overlay"></div>
            <div class="modal-holder">
                <div class="modal">
                    <span className="modal__close">
                        <FontAwesomeIcon icon={faTimes} className="modal__close" onClick={closeModal} /> 
                    </span>
                    <div className="modal__header">
                    <h6>Saisis un pseudo et sélectionne ton avatar</h6>              
                    </div>
                        <div className="modal__description">                  
                            <h4 className='title-difficulty'>Choisis une difficulté :</h4> 
                             <p className="range">                    
                            <FontAwesomeIcon icon={faAngleRight} className="icons" /> Easy : Timer réglé sur 80s on gagne 5s et perd rien<br />
                            <FontAwesomeIcon icon={faAngleRight} className="icons" /> Medium : Timer réglé sur 80s on gagne 5s et on perd 2s<br />
                            <FontAwesomeIcon icon={faAngleRight} className="icons" /> Expert : Timer réglé sur 60s on gagne 5s et on perd 5s<br />
                            <FontAwesomeIcon icon={faAngleRight} className="icons" /> Hardcore : Timer réglé sur 60s on gagne 2s et on perd 5s<br />
                            </p>  
                            <p className="txthide">Une nouvelle fenêtre apparaîtra avec une photo d’un Super Hero et 4 choix de nom aléatoires<br />
                            A toi de retrouver le bon !! (En cas de problème tu peux toujours passer à l’aide du bouton « SKIP «  )<br />
                            En cas de bonne réponse, le Timer augmentera de :<br />
                            <FontAwesomeIcon icon={faStar} className="icons" />
                            5 secondes (easy, medium, expert) ou 2 secondes (hardcore)                    
                            Une mauvaise réponse entrainera une pénalité de :<br />
                            <FontAwesomeIcon icon={faStar} className="icons" />
                            2 secondes (medium) ou 5s (expert et hardcore)                 
                            <h4>Marque un max de points ! </h4>                    
                            Tu retrouveras ton score une fois le temps écoulé avec la possibilité de consulter ton parcours avec la correction                       
                            </p>                       
                        </div>           
                     </div>
                </div>           
            </>
        )
       
     )
}

export default Modal