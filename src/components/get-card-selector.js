export default ({ byId, allIds }, listId) => {
  const list = [];
  for (const id of allIds) {
    if (byId[id].listId === listId) list.push(byId[id]);
  }
  return list;
};
