export default ({ id }, { allIds, activeId }) => {
  if (id === activeId) {
    if (allIds.length > 1 && allIds[0] === id) return allIds[1];
    // else if (allIds.length === 1) return 0;
    else return id - 1;
  } else {
    return activeId;
  }
};
