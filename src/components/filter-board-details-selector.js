// refactor to use ternary
export default ({ activeId, byId, allIds }) => {
  if (allIds.length === 0) return { boardName: "", boardList: allIds };
  else return { boardName: byId[activeId].text, boardList: allIds };
};
