// We can simplify a function that returns the meaning of HTTP status codes by using a Hash Table instead

// Function
function statusCodeMeaning(number) {
  if (number === 200) return 'OK'
  if (number === 201) return 'Created'
  if (number === 400) return 'Bad Request'
  if (number === 401) return 'Unauthorized'
  if (number === 403) return 'Forbidden'
  if (number === 404) return 'Not Found'
  if (number === 500) return 'Internal Server Error'
  if (number === 503) return 'Service Unavailable'
}

// Hash Table
const statusCodes = {
  200: 'OK',
  201: 'Created',
  400: 'Bad Request',
  403: 'Forbidden',
  404: 'Not Found',
  500: 'Internal Server Error',
  503: 'Service Unavailable',
}
function statusCodeMeaning(number) {
  return statusCodes[number]
}

console.log(statusCodeMeaning(404))
console.log(statusCodeMeaning(500))
console.log(statusCodeMeaning(200))
