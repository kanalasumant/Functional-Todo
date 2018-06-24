export default ({ byId, allIds }, activeId) => {
  const list = [];
  for (const id of allIds) {
    if (byId[id].boardId === activeId) list.push(byId[id]);
  }
  return list;
};
