export default {
  status : status => ({
    send: responseObject => ({status, ...responseObject})
  })
}