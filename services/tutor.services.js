import { Tutor, viewTutor } from "../models/index.js";

async function getTutor(tutorId) {

    let result = {
        message: null,
        status: null,
        data: null,
    };

    const tutor = await Tutor.findByPk(tutorId);

    if (!tutor) {
        result.message = `Tutor ID ${tutorId} is not found.`;
        result.status = 404;
        return result;
    }


    result.data = tutor;
    result.status = 200;
    result.message = "Retrieve successful";

    return result;
}

async function getTutors() {

    let result = {
        message: null,
        status: null,
        data: null,
    };
    
    const tutors = await Tutor.findAll();

    result.data = tutors;
    result.status = 200;
    result.message = "Retrieve successful";

    return result;
}

async function updateTutor(tutorId, userId, subjectId, name, experience, highestEducation, hourlyRate, rating, testimony) {

    let result = {
        message: null,
        status: null,
        data: null,
    };
    
    const tutor = await Tutor.findByPk(tutorId);

    if (!tutor) {
        result.message = `Tutor ID ${tutorId} is not found.`;
        result.status = 404;
        return result;
    }

    tutor.userId = userId;
    tutor.subjectId = subjectId;
    tutor.name = name;
    tutor.experience = experience;
    tutor.highestEducation = highestEducation;
    tutor.hourlyRate = hourlyRate;
    tutor.rating = rating;
    tutor.testimony = testimony;

    await tutor.save();
    result.data = tutor;
    result.status = 200;
    result.message = "Tutor updated successfully";

    return result;
}


async function deleteTutor(tutorId) {

    let result = {
        message: null,
        status: null,
        data: null,
    };
    
    const tutor = await Tutor.findByPk(tutorId);

    if (!tutor) {
        result.message = `Tutor ID ${tutorId} is not found.`;
        result.status = 404;
        return result;
    }

    await tutor.destroy();
    result.data = tutor;
    result.status = 200;
    result.message = "Tutor deleted successfully";

    return result;
}

async function addTutor(userId, subjectId, name, experience, highestEducation, hourlyRate, rating, testimony) {

    let result = {
        message: null,
        status: null,
        data: null,
    };
    
    const tutor = await Tutor.create({userId, subjectId, name, experience, highestEducation, hourlyRate, rating, testimony});

    result.data = tutor;
    result.status = 200;
    result.message = "Tutor added successfully";


    return result;
}

async function getViewTutor() {
    let result = {
      message: null,
      status: null,
      data: null,
    };
  
    const tutorVIew = await viewTutor.findAll();
  
    result.data = tutorVIew;
    result.status = 200;
    result.message = `Retrieve successful`;
    return result
  }


export {
   getTutor,
   getTutors,
   updateTutor,
   deleteTutor,
   addTutor,
   getViewTutor
};