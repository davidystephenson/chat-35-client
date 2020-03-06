function reducer (state = [], action) {
  console.log('action test:', action)
  switch (action.type) {
    case "ALL_MESSAGES":
      return action.payload
    default:
      return state
  }
}

export default reducer