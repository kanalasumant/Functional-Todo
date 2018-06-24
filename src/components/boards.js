import React from "react";
import { Icon, List } from "antd";

const Boards = ({ board, gotoBoard, deleteBoard }) => (
  <List
    bordered
    dataSource={board}
    renderItem={item => (
      <List.Item className="boards-item" key={item.id}>
        <List.Item.Meta title={item.text} onClick={() => gotoBoard(item.id)} />
        <Icon
          type="close"
          style={{ color: "red", fontSize: 20 }}
          onClick={() => deleteBoard(item.id)}
        />
      </List.Item>
    )}
  />
);

export default Boards;
