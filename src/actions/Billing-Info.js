const ChangeBillingInfo = (BillingInfoObject) => {
  return {
    type: "CHANGE_BILLING_INFO",
    payload: BillingInfoObject
  }
}

export {ChangeBillingInfo};