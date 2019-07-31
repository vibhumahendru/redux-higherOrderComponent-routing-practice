let initialState = {
  count:0,
  name: "vibhu"
}

function reducer(state=initialState, action) {
  switch (action.type) {
    case "INC_COUNT":
    console.log("IN REDUCERRR");
      return {...state, count: state.count +1}
    case "NAME_CHANGE":
      return {...state, name:action.payload}

    default: return state

  }
}

export default reducer
