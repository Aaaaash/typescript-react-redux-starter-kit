export function someAction(name: string) {
  return {
    type: 'GET_SOME_DATA',
    name,
  }
}

export function getSuccess(data: any) {
  return {
    type: 'FETCH_USER_FULFILLED',
    data,
  }
}
