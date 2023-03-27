import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class PopupSubject extends Component {
    state = {
        values: [true],
        fullscreen: true,
        show: false,
    }

    handleShow(breakpoint) {
        //   setFullscreen(breakpoint);
        console.log(breakpoint)
        const breakp = breakpoint;
        this.setState({ fullscreen: breakp })
        this.setState({ show: true })
    }
    handleClose = () => {
        this.setState({ show: false })
    }
    render() {
        return (
            <>
                {this.state.values.map((v, idx) => (
                    <Button key={idx} className="me-2 mb-2" onClick={() => this.handleShow(v)}>
                        Show
                        {typeof v === 'string' && `below ${v.split('-')[0]}`}
                    </Button>
                ))}
                <Modal show={this.state.show} fullscreen={this.state.fullscreen} onHide={() => this.handleClose()}>
                    <Modal.Header closeButton>
                        {
                            /* i don't get below line what do you want ??? 
                            old line was like:
                            <Modal.Title>{this.props.subject.name}</Modal.Title>
                            */
                        }
                        <Modal.Title>{this.props.subject[0] ? this.props.subject[0].code : ""}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default PopupSubject;