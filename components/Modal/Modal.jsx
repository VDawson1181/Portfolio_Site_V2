// Modal as a separate component
import { useEffect, useRef } from "react";
import React from 'react'
import './modal.css'

const Modal = ({ openModal, closeModal, children }) => {
    const ref = useRef();

    useEffect(() => {
        if(openModal){
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    },[openModal]);

  return (
    <dialog className="portfolioModal" ref={ref} onCancel={closeModal}>
        {children}
        <button onClick={closeModal}>Close</button>
    </dialog>
  )
}

export default Modal