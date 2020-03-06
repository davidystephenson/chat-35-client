function reducer (state = [], action) {
  console.log('action test:', action)
  switch (action.type) {
    case "ALL_CHANNELS":
      return action.payload
    case "NEW_CHANNEL":
      return [...state, action.payload]
    default:
      return state
  }
}

export default reducer