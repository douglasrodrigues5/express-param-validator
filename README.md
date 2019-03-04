**_Study purposes only._**

EXPRESS PARAM VALIDATOR
===

# TODO:
* Doc existing code
* Add validation options: 
* * ~~required~~
* * ~~type~~
* * ~~value~~
* * ~~email~~
* * **maximum length**
* * **minimum length**
* * **size**
* * **not allowed characters**
* Create user friendly method(s) to generate the validation object

## Testing:
```bash
  yarn run test
```

## Usage
```bash
  yarn add express-param-validator
```

```javascript
  const { paramValidator } = require('express-param-validator')

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

*The idea is to improve my repository management in addition to maintaining and developing simple parameter validation*
