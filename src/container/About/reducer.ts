const initialState = {
  myInfo: {}
}
export default function aboutReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'FETCH_USER_FULFILLED':
      console.log(action.data);
      return { ...state, myInfo: action.data };
    default:
      return state;
  }
}
