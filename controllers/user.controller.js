import { 
  getUser, 
  getUsers, 
  getProfileImage,
  updateProfileImage
} from "../services/user.services.js";
import multer from "multer"
import path from "path"

class UserController {

  // GET /general/user/:userId
  async retrieveUser(req, res, next) {

    const result = await getUser(req.params.userId);
       
    res.status(result.status);

    return res.json({ data: result.data, status: result.status, message: result.message });
  } 

  // GET /general/users
  async retrieveUsers(req, res, next) {

    const result = await getUsers();

    res.status(result.status);

    return res.json({ data: result.data, status: result.status, message: result.message });
  } 

  // Upload profile_img to server 
  async updateProfile_img(req, res, next) {
    try {
      const storage = multer.diskStorage({
          destination: function (req, file, cb) {
              cb(null, 'Images')
          },
          filename: function (req, file, cb) {
              cb(null, Date.now() + path.extname(file.originalname));
          }
      });
      const upload = multer({ 
        storage: storage,
        limits: { fileSize: 2000000 },
        fileFilter: function (req, file, cb) {
          const filetypes = /jpeg|jpg|png|gif/
          const mimetype = filetypes.test(file.mimetype)
          const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
          if (mimetype && extname) {
            return cb(null, true)
          }
          cb("Error: File upload only supports the following filetypes - " + filetypes)
        }, 
      }).single("profile_img");

      // POST /protected/user/updateProfile_img/:userId
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

}

export default UserController;