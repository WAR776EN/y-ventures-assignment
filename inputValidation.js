function validate (input) {
  const isPositiveInteger = /^\d+$/.test(input)
  if (isPositiveInteger) return true

  throw new Error('invalid input! Positive integer is expected')
}

module.exports = validate