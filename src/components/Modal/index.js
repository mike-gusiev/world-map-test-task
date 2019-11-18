import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import { 
    Backdrop,
    StyledModal,
    StyledCloseIcon
} from './styles'

const Modal = props => {

    const [element, setElement] = useState(null)

    useEffect(() => {
        
        const root = document.createElement('div')
        document.body.appendChild(root)
        document.body.style.overflow = 'hidden'

        setElement(root)

        return () => {
            document.body.removeChild(root)
            document.body.style.overflow = 'unset'
        }
    }, [])

    if (element) {
        return ReactDOM.createPortal(
            <Backdrop>
                <StyledModal>
                <StyledCloseIcon onClick={props.onClose} />
                    {props.children}
                </StyledModal>
            </Backdrop>,
            element
        )
    }
    return null
}

Modal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.node
    ])
}

export default Modal