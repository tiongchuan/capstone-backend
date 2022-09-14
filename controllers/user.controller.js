import { 
  getUser, 
  getUsers, 
  getUsername, 
  getProfileImage,
  updateProfileImage
} from "../services/user.services.js";
import multer from "multer"
import path from "path"

// set storage engine
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'Images');
  },
  filename: function(req, file, cb){
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// init upload
const upload = multer({
  storage: storage,
  limits: {fileSize: 2000000}, // 2MB limit for image size 
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('profile_img');

// check file type
function checkFileType(file, cb){
  // allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

class UserController {

    // GET /general/user/:userId
    async retrieveUser(req, res, next) {

    const result = await getUser(req.params.userId);    
    res.status(result.status);

    return res.json({ data: result.data, message: result.message });
    } 

    // GET /general/users
    async retrieveUsers(req, res, next) {

    const result = await getUsers();    
    res.status(result.status);

    return res.json({ data: result.data, message: result.message });
    } 

    // GET /general/user/username/:userId
    async retrieveUsername(req, res, next) {

        const result = await getUsername(req.params.userId);    
        res.status(result.status);
    
        return res.json({ data: result.data, message: result.message });
    } 

    // Upload profile_img to server 
    async updateProfile_img(req, res, next) {
      try {
      // Upload profile_img to server
      upload(req, res, async function (err) {
        if (err) {
          return res.status(400).json({ message: err });
        }
        const result = await updateProfileImage(req.params.userId, req.file.filename);
        res.status(result.status);
        return res.json({ data: result.data, message: result.message });
      });
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
    }

    // GET /general/user/profile_img/:userId
    async retrieveProfile_img(req, res, next) {
      try {
        const result = await getProfileImage(req.params.userId);
        res.status(result.status);
        return res.json({ data: result.data, message: result.message });
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
    }
  
    // // GET /general/tutors
    // async retrieveTutors(req, res, next) {
  
    //   const result = await getTutors();    
    //   res.status(result.status);
  
    //   return res.json({ data: result.data, message: result.message });
    // }  
    
    // // POST /protected/tutor/update
    // async update(req, res, next) {

    //   if (typeof req.body.tutorId !== "number") 
    //   {
    //     res.status(400);
    //     return res.json({ message: "Incorrect request data" });
    //   }
  
    //   const result = await updateTutor(req.body.tutorId, req.body.subjectId, req.body.name, req.body.experience, req.body.highestEducation, req.body.hourlyRate, req.body.rating, req.body.testimony);    
    //   res.status(result.status);
  
  
    //   return res.json({ data: result.data, message: result.message });
    // }

    //  // DELETE /protected/tutor/delete/:tutorId
    //  async delete(req, res, next) {
  
    //     const result = await deleteTutor(req.params.tutorId);    
    //     res.status(result.status);
    
    //     return res.json({ data: result.data, message: result.message });
    //   }

    //  // PUT /protected/tutor/add
    // async add(req, res, next) {

    //   const result = await addTutor(req.body.subjectId, req.body.name, req.body.experience, req.body.highestEducation, req.body.hourlyRate, req.body.rating, req.body.testimony);    
    //   res.status(result.status);
    
    //   return res.json({ data: result.data, message: result.message }); 
    // }

  }

export default UserController;