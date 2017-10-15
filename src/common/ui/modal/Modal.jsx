import React from 'react'
import Modal from 'react-modal'


export default props => (
        <Modal
            contentLabel="Modal"
            style={ { overlay: { zIndex: 1040 } }}
            className="modal-dialog"
            closeTimeoutMS={150}
            isOpen={props.visible}
            onRequestClose={props.closeModal}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.closeModal}>
                            <span aria-hidden="true">×</span>
                        </button>
                        <h4 className="modal-title">{props.title}</h4>
                    </div>
                    <div className="modal-body" style={ {
                                                        maxHeight: "calc(100vh - 80px)",
                                                        overflowY: "auto"
                                                    }}>
                        {props.children}
                    </div>
                </div>
            </div>
        </Modal >
    )