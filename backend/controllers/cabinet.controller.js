const {PrismaClient} = require('@prisma/client');

const getGrades = async (req, res) =>{
    const {user} = req.query;
    const client = new PrismaClient();

    const result = await client.grade_sheet.findMany({
        select:{
            id_sheet: true,
            id_subject: true,
            id_student: true,
            id_teacher: true,
            comment_sheet: true,
            grade_number: true,
            subject:{
                select: {
                    title_subject: true
                }
            },
            teacher:{
                select:{
                    name_teacher: true,
                    surname_teacher: true,
                    patronymic_teacher: true,
                    phone_teacher: true,
                    telegram_teacher: true,
                    email_teacher: true
                }
            }
        },
        where:{
            id_student: parseInt(user)
        }
    });

    res.json(result);
}

const getAVGGrades = async (req, res)=>{
    const {user, subject} = req.query;
    const client = new PrismaClient();
    const grades = await client.grade_sheet.findMany({
        where:{
            id_student: parseInt(user),
            id_subject: parseInt(subject)
        },
        select: {
            grade_number: true
        }
    });
    const result = grades.map(grade=>{
        try{
            return parseInt(grade.grade_number);
        }
        catch{}
    });
    if (result.length > 0){
        res.json({avg: result.reduce((sum, num)=> sum + num, 0) / result.length});
    }
    else{
        res.json({avg: 0});
    }
    
}

const setGrade = async (req, res) =>{
    const {user, grade, comment, student} = req.body;
    const client = new PrismaClient();

    const teacher = await client.teacher.findFirst({
        where: {
            id_teacher:user
        },
        select:{
            subject: true
        }
    });
    const result = await client.grade_sheet.create({
        data:{
            grade_number: grade,
            comment_sheet: comment,
            subject: {
                connect: {id_subject: teacher.subject.id_subject}
            },
            student: {
                connect: { id_student: student } 
            },
            teacher:{
                connect:{id_teacher: user}
            }
        }
    });
    res.json({message: "Оценка добавлена"});
}

module.exports = {
    getGrades,
    setGrade,
    getAVGGrades
}