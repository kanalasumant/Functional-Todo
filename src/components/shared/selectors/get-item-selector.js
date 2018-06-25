export default ({ byId, allIds }, key, ID) => {
  const list = [];
  for (const id of allIds) {
    if (byId[id][key] === ID) list.push(byId[id]);
  }
  return list;
};
