import { School } from "../models/index.js";

async function getSchool(schoolId) {

    let result = {
        message: null,
        status: null,
        data: null,
    };
  
    const school = await School.findByPk(schoolId);
  
    if (!school) {
        result.message = `School ID ${schoolId} is not found.`;
        result.status = 404;
        return result;
    }
  
    result.data = school;
    result.status = 200;
    result.message = "Retrieve successful";
  
    return result;
  }

async function getSchools() {

    let result = {
        message: null,
        status: null,
        data: null,
    };

    const school = await School.findAll();

    result.data = school;
    result.status = 200;
    result.message = "Retrieve successful";

    return result;
}

async function updateSchool(schoolId, name, area, schoolCode, type, funding) {

    let result = {
        message: null,
        status: null,
        data: null,
    };

    const school = await School.findByPk(schoolId);

    if (!school) {
        result.message = `School ID ${schoolId} is not found.`;
        result.status = 404;
        return result;
    }

    school.schoolId = schoolId;
    school.name = name;
    school.area = area;
    school.schoolCode = schoolCode;
    school.type = type;
    school.funding = funding;

    await school.save();
    result.data = school;
    result.status = 200;
    result.message = "School updated successful";

    return result;
}


async function deleteSchool(schoolId) {

    let result = {
        message: null,
        status: null,
        data: null,
    };
    
    const school = await School.findByPk(schoolId);

    if (!school) {
        result.message = `School ID ${schoolId} is not found.`;
        result.status = 404;
        return result;
    }

    await school.destroy();
    result.data = school;
    result.status = 200;
    result.message = "School deleted successful";

    return result;
}

async function addSchool(name, area, schoolCode, type, funding) {

    let result = {
        message: null,
        status: null,
        data: null,
    };
    
    const school = await School.create({name, area, schoolCode, type, funding});

    result.data = school;
    result.status = 200;
    result.message = "School added successful";

    return result;
}

export {
    getSchool,
    getSchools,
    updateSchool,
    deleteSchool,
    addSchool
}