[![CircleCI](https://circleci.com/gh/gorda0/express-param-validator/tree/master.svg?style=svg)](https://circleci.com/gh/gorda0/express-param-validator/tree/master)

# EXPRESS PARAM VALIDATOR

# TODO:

- Doc existing code
- Add validation options:
- - ~~required~~
- - ~~type~~
- - ~~value~~
- - ~~email~~
- - **maximum length**
- - **minimum length**
- - **size**
- - ~~not allowed words(blacklist)~~
- Create user friendly method(s) to generate validation objects

## Testing:

```bash
  npm test
```

## Usage

```bash
  npm i -S express-param-validator
```

```javascript
  const { paramValidator } = require('express-param-validator')

  const REQUIRED_PARAMS = [
    {name: 'token', type: 'string'},
    {name: 'name', type: 'string'}
    {name: 'type', type: 'string'},
    {name: 'unit', type: 'number'},
    {name: 'price', type: 'number'},
    {name: 'expireDate', type: 'object'},
    {name: 'discount', type: 'string', optional: true},
    {name: 'email', type: 'email', blacklist: ['outlook']}
    {name: 'status', type: 'string', oneOf: ['active', 'inactive']}
  ]

  // just like router.post('/add', (req, res) => {})
  const post = function(req, res) {
    paramValidator(
        REQUIRED_PARAMS,
        req,
        res,
        function (sendError, sendSuccess) {
          if(auth(req.body.token))
            return sendSuccess('successfull message')
          else
            return sendError(401)
        }
      )
  }
```
