import pkg from "jsonwebtoken";
import { User } from "../models/index.js";

const { sign } = pkg;

async function register(username, email, password, role) {

  let result = {
    message: null,
    status: null,
    data: null,
  };

  try {

    // Throws SequelizeUniqueConstraintError if email exists.
    const newUser = await User.create({
      username: username,
      email: email,
      password: password,
      role: role
    });

    console.log('register service', newUser);

    if (newUser) {

      // Capture selective user data
      const userData = {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      role: newUser.role
      };

      result.message = `${newUser.email} registered successfully.`;
      result.status = 200;
      result.data = userData;

    }

  } catch (err) { 

    // Handle all errors here instead of throwing up.
    // Throws when email exists due to unique constraint.
    if (err.name === "SequelizeUniqueConstraintError") {
      result.status = 500;  // 500 Internal Server Error
      result.message = `${email} already exists.`;
    } else {
      // Log other errors that may occur.
      console.log(`${err.name}: ${err.message}`);
      result.status = 500;
      result.message = `${err.name}: ${err.message}`;
    }

  }

  return result; 
}

async function login(email, password) {
    
  let result = {
    message: null,
    status: null,
    data: null,
  };

  const user = await User.findOne({ where: { email: email } });

  if (!user) {

    // email does not exist.
    result.message = `${email} does not exist.`;
    result.status = 401;  // 401 Unauthorized
    console.log("login: ", JSON.stringify(result));

  } else if (!await user.validPassword(password)) {  

    // pwd validation failed.
    result.message = `Invalid password.`;
    result.status = 401;
    console.log("login: ", JSON.stringify(result));

  } else { 

    console.log('login service', user);

    // pwd validation passed.
    // Prepare user data for token generation.
    const userData = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role
    };

    // Synchronous sign.
    const token =  sign(userData, 'secret', { expiresIn: "1d" });

    // Add token into userData object.
    userData['token'] = token;

    result.message = `Login successful.`;
    result.status = 200;
    result.data = userData;

    console.log("login: ", JSON.stringify(result));
  }

  return result;
}

export {
    register,
    login
}