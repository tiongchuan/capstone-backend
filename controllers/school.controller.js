import { getSchool, getSchools, updateSchool, deleteSchool, addSchool } from "../services/school.services.js";

class SchoolController {

    // GET /general/school/:schoolId
    async retrieveSchool(req, res, next) {

    const result = await getSchool(req.params.schoolId);    
    res.status(result.status);

    return res.json({ data: result.data, message: result.message });
    } 

    // GET /general/schools
    async retrieveSchools(req, res, next) {

    const result = await getSchools();    
    res.status(result.status);

    return res.json({ data: result.data, message: result.message });
    } 
    
    // POST /protected/school/update
    async update(req, res, next) {

      if (typeof req.body.schoolId !== "number") 
      {
        res.status(400);
        return res.json({ message: "Incorrect request data" });
      }
  
      const result = await updateSchool(req.body.schoolId, req.body.name, req.body.area, req.body.schoolCode, req.body.type, req.body.funding);    
      res.status(result.status);
    
      return res.json({ data: result.data, message: result.message });
    }

     // DELETE /protected/school/delete/:tutorId
     async delete(req, res, next) {
  
        const result = await deleteSchool(req.params.schoolId);    
        res.status(result.status);
    
        return res.json({ data: result.data, message: result.message });
      }

     // PUT /protected/school/add
    async add(req, res, next) {

      const result = await addSchool(req.body.name, req.body.area, req.body.schoolCode, req.body.type, req.body.funding);    
      res.status(result.status);
    
      return res.json({ data: result.data, message: result.message }); 
    }

}

export default SchoolController;