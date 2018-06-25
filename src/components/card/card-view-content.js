import React, { Component } from "react";
import { connect } from "react-redux";
import { createCard } from "./actions";

import { Row, Col } from "antd";

import CardView from "./card-view";
import ModalRenderProp from "../shared/modal-render-prop";

import "./card-style.css";

class CardViewContent extends Component {
  createCard = ({ inputValue }) => {
    const cardDetails = { cardName: inputValue, listId: this.props.listId };
    this.props.createCard(cardDetails);
  };

  render() {
    return (
      <Row>
        <Col span={24}>
          <CardView listId={this.props.listId} />
          <ModalRenderProp
            performAction={this.createCard}
            title="Create Card"
            render={({ onClick }) => (
              <div className="add-card" onClick={onClick}>
                <p>Add a card . . .</p>
              </div>
            )}
          />
        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps = {
  createCard
};

export default connect(
  null,
  mapDispatchToProps
)(CardViewContent);
