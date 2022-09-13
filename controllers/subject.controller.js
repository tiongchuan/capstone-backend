import { getSubject, getSubjects, updateSubject, addSubject, deleteSubject } from "../services/subject.services.js";

class SubjectController {

    // GET /general/subject
    async retrieveSubject(req, res, next) {

        const result = await getSubject(req.params.subjectId); 
            
        res.status(result.status);

        return res.json({ data: result.data, status: result.status, message: result.message });
    } 
  
    // GET /general/subjects
    async retrieveSubjects(req, res, next) {
  
        const result = await getSubjects();

        res.status(result.status);
  
        return res.json({ data: result.data, status: result.status, message: result.message });
    }  
    
    // POST /protected/subject/update
    async update(req, res, next) {

        if (typeof req.body.subjectId !== "number") {
        res.status(400);
        return res.json({ message: "Incorrect request data" });
      }
  
        const result = await updateSubject(req.body.subjectId, req.body.name, req.body.description);  

        res.status(result.status);
  
        return res.json({ data: result.data, status: result.status, message: result.message });
    }

     // DELETE /protected/subject/delete/:subjectId
    async delete(req, res, next) {
  
        const result = await deleteSubject(req.params.subjectId)

        res.status(result.status)
    
        return res.json({ data: result.data, status: result.status, message: result.message })
    }
    
    // PUT /protected/subject/add
    async add (req, res, next) {

        const result = await addSubject(req.body.name, req.body.description)

        res.status(result.status)

        return res.json({ data: result.data, status: result.status, message: result.message })
    }
}

export default SubjectController;