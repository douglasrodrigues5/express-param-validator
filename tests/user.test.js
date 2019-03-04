import REQ from './helpers/request'
import RES from './helpers/response'
import { paramValidator } from '../dist/param-validator'
import { auth } from './helpers/auth'
import { users, messages } from './contants/contants'

const REQUIRED_PARAMS = [
  {name: 'name', type: 'string'},
  {name: 'age', type: 'number'},
  {name: 'email', type: 'email'},
]

// just like router.post('/add', (req, res) => {})
const post = (req, res) => 
      paramValidator(
        REQUIRED_PARAMS,
        req,
        res, 
        (sendError, sendSuccess) => {
          if(auth(req.body.token))
            return sendSuccess('Success')
          else
            return sendError(401)
        }
      )

describe('Test valid and invalid user fields', () => {
  it('Should send 403 error due to invalid e-mail', () => {
    const response = post(REQ(users.invalid_user), RES)
    expect(response.message.includes(messages.invalidEmail)).toBeTruthy()
  })

  it('Should return success', () => {
    const response = post(REQ(users.valid_user), RES)
    expect(response.message.includes(messages.invalidEmail)).toBeFalsy()
  })
})