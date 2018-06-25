import React, { createRef, Component, Fragment } from "react";
import { Input, Modal } from "antd";

const initialState = { isModalOpen: false };

class ModalRenderProp extends Component {
  state = initialState;

  textInputRef = createRef();

  openModal = () =>
    this.setState({
      isModalOpen: true
    });

  closeModal = () => {
    this.textInputRef.current.input.value = "";
    this.setState(initialState);
  };

  performAction = () => {
    this.props.performAction({
      id: this.props.id,
      inputValue: this.textInputRef.current.input.value
    });
    this.textInputRef.current.input.value = "";
    this.closeModal();
  };

  render() {
    const Render = this.props.render;
    return (
      <Fragment>
        <Modal
          title={this.props.title}
          style={{ top: 20 }}
          visible={this.state.isModalOpen}
          onOk={this.performAction}
          onCancel={this.closeModal}
        >
          <Input ref={this.textInputRef} onPressEnter={this.performAction} />
        </Modal>
        <Render onClick={this.openModal} />
      </Fragment>
    );
  }
}

export default ModalRenderProp;
