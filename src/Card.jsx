import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from './Button.jsx'
import Modal from '../components/Modal/Modal.jsx';
// import profilePic from './assets/react.svg';

function Card({category, items}){
    // const Card = (category, items) => {
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    // const [cardVisible, setCardVisible] = useState(false)
    // const handleCardClick = (e,item) => {
    //     e.stopPropagation();
    //     const updatedItem = item.map({ item})
    //     setCardVisible(true)
    // }

    const handleModal = (content) => {
        setModalContent(content);
        setModal(true)
    }

    // const cardDescription = items.map((item, index) => <div key={index} className="cardFocus">
    //         <h2 className="card-title">{item.name}</h2>
    //         <p className="card-text">#{index+1} -- {item.copy}</p>     
    //         <p className="card-text">{item.descrip}</p>
    //     </div>)


    // const cardModal = items.map((item, index) => <div key={index} className="cardFocus">
    //     <h2 className="card-title">{item.name}</h2>
    //     <p>{item.descrip}</p>
    //     <ul className="images">
    //         <li><img className="card-image" src={item.image} alt="Image" loading="lazy"/></li>
    //     </ul>
    // </div>)

    const cards = items.map((item, index) => <div key={index} className={item.isValid ? "card cardValid" : "card cardInvalid"}>            
                <div className="cardContent">
                    <h2 className="card-title">{item.name}</h2>
                    {/* <p className="card-text">#{index+1} -- {item.copy}</p>      */}
                    <div className="card-text">{item.copy}</div>
                    
                    {/* <button>View</button> */}
                    {/* <button className={item.id} onClick={() => handleModal([<h2 className="card-title">{item.name}</h2>,item.descrip,<img className="card-image" src={item.image} alt="Image" loading="lazy"/>])}>See More</button> */}
                    <button className="seeMoreBtn" onClick={() => handleModal([ <h2 className="card-title">{item.name}</h2>,<div className="card-text">{item.descrip}</div>,<div className="images"><img className="card-image" src={item.image[1]} alt="Image" loading="lazy"/></div>,<Button indexNo={index+1} name={item.name} url={item.url}/> ]) }>See More</button>
                </div>
                <img className="card-image" src={item.image[0]} alt="Image" loading="lazy"/>
    </div>);




        return(
            <>
                <h3>{category}</h3>
                {cards}     
                <Modal openModal={modal} closeModal={() => setModal(false)}>
                    {modalContent}
                </Modal>
            </>
        );
}
// Card.propTypes = {
//     category: PropTypes.string,
//     items: PropTypes.arrayOf(PropTypes.shape({
//         name: PropTypes.string,
//         copy: PropTypes.string,
//         age: PropTypes.number,
//         isValid: PropTypes.bool,
//         image: PropTypes.string,
//     })),

    
// }
// Card.defaultProps = {
//     category: "Category",
//     items:[],
// }
export default Card;