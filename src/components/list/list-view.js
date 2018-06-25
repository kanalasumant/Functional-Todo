import React, { Component } from "react";
import { connect } from "react-redux";
import { updateList, deleteList } from "./actions";

import { Icon, Row, Col } from "antd";

import CardViewContent from "../card/card-view-content";
import ModalRenderProp from "../shared/modal-render-prop";

import getList from "./get-list-selector";

import "./list-style.css";

class ListView extends Component {
  deleteList = id => this.props.deleteList(id);

  updateList = ({ id, inputValue }) => {
    const listDetails = {
      listName: inputValue,
      listId: id
    };
    this.props.updateList(listDetails);
  };

  render() {
    const { list } = this.props;
    return (
      list.length !== 0 &&
      list.map(item => (
        <div key={item.id} className="main-list-view">
          <Row className="row-padding">
            <Col span={22}>
              <ModalRenderProp
                id={item.id}
                title="Update List Name"
                performAction={this.updateList}
                render={({ onClick }) => (
                  <div
                    onClick={onClick}
                    className="main-list-view-input wordwrap"
                  >
                    {item.text}
                  </div>
                )}
              />
            </Col>
            <Col span={2} className="main-list-view-icon">
              <Icon
                type="close"
                style={{ color: "red", fontSize: 16 }}
                onClick={() => this.deleteList(item.id)}
              />
            </Col>
          </Row>
          <CardViewContent listId={item.id} />
        </div>
      ))
    );
  }
}

const mapStateToProps = ({ list, board: { activeId } }) => ({
  list: getList(list, activeId)
});

const mapDispatchToProps = {
  updateList,
  deleteList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView);
