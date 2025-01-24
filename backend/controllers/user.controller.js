const {PrismaClient} = require('@prisma/client');
const argon = require('argon2');
const signInStudent = async (req, res)=>{
    const {login, password} = req.body;
    const client = new PrismaClient();
    let user = await client.student.findFirst({
        where:{
            login_student: login
        },
        select:{
            name_student: true,
            surname_student: true,
            password_student: true,
            patronymic_student: true,
            id_class: true,
            group:{
                select:{
                    title_class: true
                }
            }

        }
    });
    if (user == null) {
        res.status(404).json({message: "Пользователь не найден"});
    }
    else{
        const isPassValid = await argon.verify(user.password_student, password);
        if (!isPassValid){
            res.status(401).json({message: "Доступ запрещен"});
        }
        res.json(user);
    }
    
}

const signInTeacher = async(req, res)=>{
    const {login, password} = req.body;
    const client = new PrismaClient();
    let user = await client.teacher.findFirst({
        where:{
            login_teacher: login,
        },
        select:{
            password_teacher: true,
            name_teacher: true,
            surname_teacher: true,
            patronymic_teacher: true,
            phone_teacher: true,
            id_subject: true,
            telegram_teacher: true,
            email_teacher: true,
            subject: {
                select: {
                    title_subject: true
                }
                
            },
            group:{
                select:{
                    title_class: true
                }
            }
        }
    });
    const isPassValid = await argon.verify(user.password_teacher, password);
    if (!isPassValid){
        res.status(401).json({message: "Доступ запрещен"});
    }
    res.json(user);
}

const signUpTeacher = async (req, res)=>{
    const {login, password, name, surname, patronymic, phone, email, telegram, idSubject} = req.body;
    const client = new PrismaClient();
    const hashedPass = await argon.hash(password);
    try{
        const user = await client.teacher.create({
            data:{
                login_teacher: login,
                password_teacher: hashedPass,
                name_teacher: name,
                surname_teacher: surname,
                patronymic_teacher: patronymic,
                phone_teacher: phone,
                telegram_teacher: telegram,
                email_teacher: email,
                id_subject: idSubject
            },
            select:{
                name_teacher: true,
                surname_teacher: true,
                patronymic_teacher: true,
                phone_teacher: true,
                id_subject: true,
                telegram_teacher: true,
                email_teacher: true,
                subject: {
                    select: {
                        title_subject: true
                    }
                    
                }
            },
        });
        res.json(user);
    }
    catch(ex){
        res.status(500).json({message: "Что-то пошло не так. Скорее всего такой логин уже существует."});
    }
    
}

const signUpStudent = async (req, res)=>{
    const {login, password, name, surname, patronymic, classId} = req.body;
    const client = new PrismaClient();
    const hashedPass = await argon.hash(password);
    try{
        const user = await client.student.create({
            data:{
                login_student: login,
                password_student: hashedPass,
                name_student: name,
                surname_student: surname,
                patronymic_student: patronymic,
                id_class: classId
            },
            select:{
                name_student: true,
                surname_student: true,
                patronymic_student: true,
                id_class: true,
                group:{
                    select:{
                        title_class: true
                    }
                }
            }
        });
        res.json(user);
    }
    catch(ex){
        res.status(500).json({message: "Что-то пошло не так. Скорее всего такой логин уже существует.", error: ex});
    }
    

}

const getTeachers = async (req, res) =>{
    const client = new PrismaClient();
    const result = await client.teacher.findMany({
        select:{
            id_teacher: true,
            id_subject: true,
            name_teacher: true,
            surname_teacher: true,
            patronymic_teacher: true,
            telegram_teacher: true,
            email_teacher: true,
            phone_teacher: true,
            subject: {
                select:{
                    title_subject: true
                }
            }
        }
    });

    res.json(result);
}
module.exports = {
    signInStudent,
    signInTeacher,
    signUpTeacher,
    signUpStudent, 
    getTeachers
}