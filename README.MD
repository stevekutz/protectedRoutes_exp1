## Experiments with Protected Routes

### auth.js
 - auth obj defined to simuulate login/authentication
 - lower-case used because we are expecting an instance of auth obj
    - auth.login called with a callback when login successful & will redirect user to the protected route  
 - 
 
    
#### Configuration

1) Set up React app `yarn create react-app app`

2) Add router dependencies  `yarn add react-router-dom` and wrap `<App/> in <BrowserRouter>`

3) Add `react-spinner` dependencies
    - `yarn add @emotion/core react-spinner @emotion/styled babel-plugin-emotion`
    - ``
4) Add `semantic UI  React` dependencies and configure `index.html`
    - `yarn add semantic-ui-react`
    - add to `index.html`  
        `<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />`
5)         