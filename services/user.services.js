import { User } from "../models/index.js";

async function getUser(userId) {

    let result = {
        message: null,
        status: null,
        data: null,
    };
  
    const user = await User.findByPk(userId);
  
    if (!user) {
        result.message = `User ID ${userId} is not found.`;
        result.status = 404;
        return result;
    }
  
  
    result.data = user;
    result.status = 200;
    result.message = "Retrieve successful";
  
    return result;
  }

  async function getUsers() {

    let result = {
        message: null,
        status: null,
        data: null,
    };
  
    const user = await User.findAll();
    
    result.data = user;
    result.status = 200;
    result.message = "Retrieve successful";
  
    return result;
  }

  async function getUsername(userId) {

    let result = {
        message: null,
        status: null,
        data: null,
    };
  
    const user = await User.findByPk(userId);
  
    if (!user) {
        result.message = `User ID ${userId} is not found.`;
        result.status = 404;
        return result;
    }
  
  
    result.data = user.username;
    result.status = 200;
    result.message = "Retrieve successful";
  
    return result;
  }

  export {
    getUser,
    getUsers,
    getUsername
}