const state_shape = {
  board: {
    byId: {
      1: {
        id: 1,
        text: "Board1"
      },
      2: {
        id: 2,
        text: "Hello"
      }
    },
    allIds: [1, 2],
    currentId: 1
  },
  list: {
    byId: {
      1: {
        id: 1,
        boardId: 1,
        text: "rteeoiprt"
      },
      2: {
        id: 2,
        boardId: 2,
        text: "iweuroiwer"
      }
    },
    allIds: [1, 2]
  },
  card: {
    byId: {
      1: {
        id: 1,
        listId: 1,
        text: "card-in-list-1"
      },
      2: {
        id: 2,
        listId: 2,
        text: "card-in-list-2"
      }
    },
    allIds: [1, 2]
  }
};
