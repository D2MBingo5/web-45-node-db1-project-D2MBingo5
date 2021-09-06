exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  console.log('check payload middleware')
  next()
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  console.log('check unique middleware')
  next()
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  console.log('check id middleware')
  next()
}
