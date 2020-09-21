const ChangeCreditInfo = (creditInfo) => {
  return {
    type: "CHANGE_CREDIT_INFO",
    payload: creditInfo
  }
}

export { ChangeCreditInfo };