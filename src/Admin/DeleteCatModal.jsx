import React from 'react'
import { useState } from 'react';
import { Modal,Button } from 'react-bootstrap'

function DeleteCatModal() {

    //delete modal
    const [deleteShow, setDeleteShow] = useState(false);

    const deleteModal = () => {
        return deleteModal(!deleteShow);
    }

  return (
    <div>
            <Button variant='danger' onClick={deleteModal} >Delete</Button>

            <Modal size="sm" show={deleteShow} onHide={() => setDeleteShow(false)} aria-labelledby="example-modal-sizes-title-sm">
                <Modal.Header closeButton onClick={deleteModal}>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Are you sure to delete category with id 1 ?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                            <Button variant='danger' onClick={deleteModal}> No</Button>
                            <Button variant='info' onClick={deleteModal}> Yes</Button>
                </Modal.Body>
            </Modal>

    </div>
  )
}

export default DeleteCatModal
