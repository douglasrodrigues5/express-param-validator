const DEFAULT_ERROR_CODES = {
  404: 'Not found.',
  403: 'Bad request.',
  401: 'Unauthorized.'
}

export const paramValidator = (params, request, response, responseCallback) => {
  const errors = () => {
          const missingMessages = params
            .filter(x => !request.body[x.name] && !x.optional)
            .map(x => `Field '${x.name}' is missing. ( is required)`)

          const typingMessages = params
            .filter(x => typeof request.body[x.name] != x.type && request.body[x.name])
            .map(x => `'${x.name}' type is wrong (should be '${x.type}')`)

          const valueMessages = params
            .filter(x => x.oneOf && !x.oneOf.includes(request.body[x.name]))
            .map(x => `'${x.name}' value is not allowed. Should be one of: [${x.oneOf}]`)

          return [...missingMessages, ...typingMessages, ...valueMessages]
      }

  if(errors().length >= 1)
    return response.status(403).send({success: false, message: errors()})
  else if(responseCallback)
    return responseCallback(
      (errCode, errMsg) =>
        response.status(errCode).send({ success: false, message: errMsg || DEFAULT_ERROR_CODES[errCode]}),
      msg =>
        response.status(200).send({ success: true, message: msg }))
  else
    return response.status(200).send({ success: true, message: 'success' })
}
