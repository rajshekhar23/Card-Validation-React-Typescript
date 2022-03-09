import React, {  useState } from 'react';
import { Modal, ModalBody } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

type Props = {
    children: any;
    isActive: boolean;
  }
  
  const CustomModal = (props: Props) => {

    const [modal, setModal] = useState(props.isActive);
    const toggle = () => setModal(!modal);
    
    return (
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalBody>{props.children}</ModalBody>
        </Modal>
      </div>
    );
  };
  
export default CustomModal;