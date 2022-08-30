import pkg from 'lodash';
import { login as _login, register as _register } from "../services/auth.services.js";

const { isEmpty } = pkg;

class AuthController {

  async login(req, res, next) {

    let email = req.body.email;
    let password = req.body.password;

    console.log(email, password);

    // Check params are not empty. 
    if (isEmpty(email) || isEmpty(password)) {
      //throw new Error("Email or password cannot be empty!");
      return res.status(500).json({message: "Email or password cannot be empty!"})
    }

    const result = await _login(email, password);
    return res.status(result.status).json(result);
  }

  async register(req, res, next) {

    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let role = req.body.role;

    console.log(username, email, password);

    // Check params are not empty. 
    if (isEmpty(username) || isEmpty(email) || isEmpty(password)) {
      //throw new Error("Username or email or password cannot be empty!");
      return res.status(500).json({message: "Username or email or password cannot be empty!"})
    }

    // Empty 'role' will default to 'user".
    const result = await _register(username, email, password, role);
    return res.status(result.status).json(result);
  }
}

export default AuthController;