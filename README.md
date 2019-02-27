**_Study purposes only._**

EXPRESS PARAM VALIDATOR
===

# TODO:
* Doc existing code
* Add validation options: 
* * ~~required~~
* * ~~type~~
* * ~~value~~
* * **email**
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