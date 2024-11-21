const INITIAL_STATE = {
  collections: [
    {
      id: 1,
      urlTitle: "chairs",
    },
    {
      id: 3,
      urlTitle: "sofas",
    },
    {
      id: 5,
      urlTitle: "ottomans",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
