import { Tutor } from "../models/index.js";

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

async function updateTutor(tutorId, subjectId, name, experience, highestEducation, hourlyRate, rating, testimony) {

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

    tutor.name = name;
    tutor.subjectId = subjectId;
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

async function addTutor(subjectId, name, experience, highestEducation, hourlyRate, rating, testimony) {

    let result = {
        message: null,
        status: null,
        data: null,
    };
    
    const tutor = await Tutor.create({subjectId, name, experience, highestEducation, hourlyRate, rating, testimony});

    await tutor.save();
    result.data = tutor;
    result.status = 200;
    result.message = "Tutor added successfully";


    return result;
}


export {
   getTutor,
   getTutors,
   updateTutor,
   deleteTutor,
   addTutor
};