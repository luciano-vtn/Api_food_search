import React, { useEffect } from 'react';
import Portal from './Portal';
import { Overlay, Dialog } from './styled';


const Modal = ({children, open, onClose}) => {

    useEffect(() =>{
        function onEsc (e) {
            if (e.keyCode === 27) onClose();
        }

        window.addEventListener('keydown', onEsc);

        return () => {
            window.removeEventListener('keydown', onEsc);
        };
    }, [onClose]);

    if (!open) return null;

    function onOverlayClick () {
        onClose();
    }

    // Tratamento do evendo de propagação da 'MODAL' (STOP evento do Dialog)
    function onDialogClick ( e ) {

        e.stopPropagation();
    }

  return (
      <Portal>
          <Overlay onClick = { onOverlayClick }>
              <Dialog onClik = { onDialogClick } > { children } </Dialog>
          </Overlay>
      </Portal>
    );
};

export default Modal;