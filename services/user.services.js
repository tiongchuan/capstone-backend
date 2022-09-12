// import { User } from "../models/index.js";

// async function getUser(userId) {

//     let result = {
//         message: null,
//         status: null,
//         data: null,
//         profile_img: null
//     };
  
//     const user = await User.findByPk(userId);
  
//     if (!user) {
//         result.message = `User ID ${userId} is not found.`;
//         result.status = 404;
//         return result;
//     }
  
//     result.data = user;
//     result.profile_img = user.profile_img;
//     result.status = 200;
//     result.message = "Retrieve successful";
  
//     return result;
// }

// async function getUsers() {

//   let result = {
//       message: null,
//       status: null,
//       data: null,
//   };
  
//   const user = await User.findAll();
  
//   result.data = user;
//   result.status = 200;
//   result.message = "Retrieve successful";

//   return result;
// }

// async function getUsername(userId) {

//   let result = {
//       message: null,
//       status: null,
//       data: null,
//       profile_img: null
//   };

//   const user = await User.findByPk(userId);

//   if (!user) {
//       result.message = `User ID ${userId} is not found.`;
//       result.status = 404;
//       return result;
//   }

//   result.data = user.username;
//   result.profile_img = user.profile_img;
//   result.status = 200;
//   result.message = "Retrieve successful";

//   return result;
// }

// // update profile image
// async function updateProfileImage(userId, profile_img) {

//   let result = {
//       // userId: null,
//       // username: null,
//       // message: null,
//       // status: null,
//       // profile_img: null
//       message:null,
//       status:null,
//       data:null,
//       profile_img:null
//   };

//   const user = await User.findByPk(userId);

//   if (!user) {
//       result.message = `User ID ${userId} is not found.`;
//       result.status = 404;
//       return result;  
//   }

//   user.profile_img = profile_img;
//   // await user.update({profile_img: profile_img})
//   await user.save();
//   // console.log(user);

//   result.data = user;
//   result.status = 200;
//   result.message = "Update successful";
//   console.log(result);

//   return result;
// }

// // get profile image 
// async function getProfileImage(userId) {
//   let result = {
//     userId: null,
//     username: null,
//     message: null,
//     status: null,
//     data: null,
//     profile_img: null
//   };
//   const user = await User.findByPk(userId);
//   if (!user) {
//     result.message = `User ID ${userId} is not found.`;
//     result.status = 404;
//     return result;
//   }
//   result.data = user.profile_img;
//   result.status = 200;
//   result.message = "Retrieve successful";
//   return result;
// }

//   export {
//     getUser,
//     getUsers,
//     getUsername,
//     updateProfileImage,
//     getProfileImage
// }




import { User } from "../models/index.js";

async function getUser(userId) {

    let result = {
      message:null,
      status:null,
      data:null,
      profile_img:null
    };
  
    const user = await User.findByPk(userId);
  
    if (!user) {
        result.message = `User ID ${userId} is not found.`;
        result.status = 404;
        return result;
    }
  
    result.data = user;
    result.profile_img = user.profile_img;
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
      profile_img: null
  };

  const user = await User.findByPk(userId);

  if (!user) {
      result.message = `User ID ${userId} is not found.`;
      result.status = 404;
      return result;
  }

  result.data = user.username;
  result.profile_img = user.profile_img;
  result.status = 200;
  result.message = "Retrieve successful";

  return result;
}

// update profile image  
async function updateProfileImage(userId, profile_img) {

  let result = {

      message: null,
      status: null,
      data: null,
      profile_img: null

  };

  const user = await User.findByPk(userId);

  if (!user) {
      result.message = `User ID ${userId} is not found.`;
      result.status = 404;
      return result;
  }

  console.log(profile_img);
  user.profile_img = profile_img;

  // await user.update({profile_img: profile_img})
  await user.save();


  result.data = user;
  result.status = 200;
  result.message = "Update successful";
  // console.log(result);

  return result;
}

// get profile image 
async function getProfileImage(userId) {
  let result = {
    userId: null,
    username: null,
    message: null,
    status: null,
    data: null,
    profile_img: null
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

export {
  getUser,
  getUsers,
  getUsername,
  updateProfileImage,
  getProfileImage
}