import { getUser, getUsers } from "../services/user.services.js";

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