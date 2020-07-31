/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Badge } from 'reactstrap';

const CardDetail = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>Full story</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{props.character.name}</ModalHeader>
        <ModalBody>
        <img
        alt={props.character.name}
        src={props.character.image}
        style={{width:"320px", height:"320px"}} 
        />
        <h2>Name:<Badge href="#" color="primary">{props.character.name}</Badge> </h2>
        {props.character.species==="Saiyan" ? (
        <h2>Race:<Badge href="#" color="warning">{props.character.species}</Badge> </h2>
      ) : (
        <h2>Race:<Badge href="#" color="primary">{props.character.species}</Badge> </h2>
      )}
     
        <h3>Planet: {props.character.originPlanet}</h3>
        <h3>Gender: {props.character.gender}</h3>
        <h3>Status: {props.character.status}</h3>
        <h3>Story</h3>
        <p>{props.character.story}</p>
               </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CardDetail;