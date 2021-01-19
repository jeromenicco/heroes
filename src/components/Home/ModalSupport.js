import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './ModalSupport.css';

const ModalSupport = ({showModalSupport,closeModalSupport}) =>{
    return(
        showModalSupport && (
                <>
                <div class="modal-overlay"></div>
                <div class="modal-holder">
                    <div class="modal">
                        <span className="modal__close">
                            <FontAwesomeIcon icon={faTimes} className="modal__close" onClick={closeModalSupport} /> 
                        </span>
                        <div className="modal__header">
                        <h3>Aider les créateurs de jeux&nbsp;!</h3>
                        </div>
                        <div className="modal__description">                       
                        <form className="form">
                            <h3>Montant du don</h3>
                            <button className="autre" value="Don ponctuel">Don ponctuel</button>
                            <button className="autre" value="Don mensuel">Don mensuel</button>
                            <button className="dons" value="2€">2€</button>
                            <button className="dons" value="5€">5€</button>
                            <button className="dons" value="10€">10€</button>
                            <button className="dons" value="autre">Autre</button>
                            <button className="autre paypal" value="Faire un don par carte">Don CB</button>
                            <button className="autre" value="Paypal">Paypal</button>                         
                        </form>
                        <p className="text">
                        Sur Internet, on trouve énormément de développeurs, parfois amateurs, qui pensent qu’il suffit d’avoir une idée, des modèles 3D trouvés sur Internet gratuitement et quelques bouts de codes pour sortir un jeu vidéo mais si on a des idées de jeux vidéo plein la tête; hélas, pour les réaliser il faut du temps. Pour certaines idées, il faut même beaucoup de temps et donc de l’argent... Merci de vos dons !</p> 
                        </div>
                    </div>
                </div>
            </>
            )

    )
}

export default ModalSupport