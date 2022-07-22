const createRules = (data) => {
  data.forEach((item) => {
    const rulesArray = []
    if (item.required) {
      const rules = {
        required: true,
        message: '必填'
      }
      rulesArray.push(rules)
    }
    item.rules = rulesArray
  })

  return data
}

export default createRules
