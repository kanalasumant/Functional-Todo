import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCard, deleteCard } from "../actions";

import { Icon, Row, Col } from "antd";

import getCard from "../../shared/selectors/get-item-selector";

import ModalRenderProp from "../../shared/modal-render-prop";

import "../card-style.css";

class CardView extends Component {
  deleteCard = id => this.props.deleteCard(id);

  updateCard = ({ id, inputValue }) => {
    const cardDetails = {
      cardName: inputValue,
      cardId: id
    };
    this.props.updateCard(cardDetails);
  };

  render() {
    const { card } = this.props;
    return (
      card.length !== 0 &&
      card.map(item => (
        <Row key={item.id} className="row-padding">
          <Col span={22}>
            <ModalRenderProp
              id={item.id}
              title="Update Card Name"
              performAction={this.updateCard}
              render={({ onClick }) => (
                <div
                  onClick={onClick}
                  className="main-card-view-input wordwrap"
                >
                  {item.text}
                </div>
              )}
            />
          </Col>
          <Col span={2} className="main-card-view-icon">
            <Icon
              type="close"
              style={{ color: "red", fontSize: 16 }}
              onClick={() => this.deleteCard(item.id)}
            />
          </Col>
        </Row>
      ))
    );
  }
}

const mapStateToProps = ({ card }, { listId }) => ({
  card: getCard(card, "listId", listId)
});

const mapDispatchToProps = {
  updateCard,
  deleteCard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardView);
