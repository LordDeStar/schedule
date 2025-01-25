const {PrismaClient} = require('@prisma/client');

const getSubjects = async (req, res) =>{
    const client = new PrismaClient();
    const result = await client.subject.findMany({
        select:{
            id_subject: true,
            title_subject: true
        }
    });

    res.json(result);
}

const createSubject = async (req, res) =>{
    const client = new PrismaClient();
    const {title} = req.body;

    const result = await client.subject.create({
        data:{
            title_subject: title
        },
        select:{
            id_subject: true,
            title_subject: true
        }
    });
    res.json(result);
}

module.exports = {
    getSubjects,
    createSubject
}