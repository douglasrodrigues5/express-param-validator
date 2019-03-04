import REQ from './helpers/request'
import RES from './helpers/response'
import { paramValidator } from '../dist/param-validator'
import { auth } from './helpers/auth'
import { products, messages } from './contants/contants'

const REQUIRED_PARAMS = [
  {name: 'token', type: 'string'},
  {name: 'name', type: 'string'},
  {name: 'type', type: 'string'},
  {name: 'unit', type: 'number'},
  {name: 'price', type: 'number'},
  {name: 'expireDate', type: 'object'},
  {name: 'discount', type: 'string', optional: true},
  {name: 'status', type: 'string', oneOf: ['active', 'inactive']}
]

// just like router.post('/add', (req, res) => {})
const post = (req, res) => 
      paramValidator(
        REQUIRED_PARAMS,
        req,
        res, 
        (sendError, sendSuccess) => {
          if(auth(req.body.token))
            return sendSuccess('product added')
          else
            return sendError(401)
        }
      )

describe('Test valid and invalid products', () => {
  it('Should send a valid response according product params and token validation', () => {
    const response = post(REQ(products.valid_product), RES)
    expect(response.status).toBe(200)
  })
  
  it('Should send an auth error response due to invalid token', () => {
    const response = post(REQ(products.valid_product_invalid_token), RES)
    expect(response.status).toBe(401)
  })

  it('Should send 403 bad request response', () => {
    const response = post(REQ(products.invalid_product), RES)
    expect(response.status).toBe(403)
  })

  it('Should send bad request response due to missing params', () => {
    const response = post(REQ(products.invalid_product), RES)
    expect(response.message.includes(messages.missingUnit)).toBeTruthy()
  })

  it('Should send bad request response due to missing and invalid params types', () => {
    const response = post(REQ(products.invalid_product_type_value), RES)
    expect(response.message.includes(messages.invalidType)).toBeTruthy()
  })

  it('Should send bad request response due to missing and invalid params values', () => {
    const response = post(REQ(products.invalid_product_type_value), RES)
    expect(response.message.includes(messages.notAllowedStatus)).toBeTruthy()
  })

  it('Should not detect optional params', () => {
    const response = post(REQ(products.invalid_product), RES)
    expect(response.message.includes(messages.missingDiscount)).toBeFalsy()
  })
})