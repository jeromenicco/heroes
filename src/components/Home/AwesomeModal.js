import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

import './AwesomeModal.css'

function AwesomeModal (){
    return(
        <div >
             <FontAwesomeIcon icon={faQuestionCircle} className="modal-icon"  /> 
        </div>
    )
}
export default AwesomeModal
