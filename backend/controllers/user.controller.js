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
            id_student: true,
            name_student: true,
            surname_student: true,
            password_student: true,
            patronymic_student: true,
            id_class: true,
            group:{
                select:{
                    title_class: true,
                    teacher:{
                        select:{
                            name_teacher: true,
                            surname_teacher: true,
                            patronymic_teacher: true
                        }
                    }
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
    if (!user){
        res.json({message: "Такого логина не существует"});
    }
    try{
        const isPassValid = await argon.verify(user.password_teacher, password);
        if (!isPassValid) {
            res.status(401).json({message: "Доступ запрещен"});
        }
    }catch{
        if (user.subject.title_subject == 'admin' && user.password_teacher == password){
            res.json(user);
        }
        else{
            res.status(401).json({message: "Доступ запрещен"});
        }
    }
}

const signUpTeacher = async (req, res)=>{
    const {login, password, name, surname, patronymic, phone, email, telegram, subject, group} = req.body;
    const client = new PrismaClient();

    const idSubjects = await client.subject.findFirst({
        where:{
            title_subject: subject
        },
        select:{
            id_subject: true
        }
    });
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
                id_subject: idSubjects
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
        if (group && group != ""){
            await client.group.update({
                where:{
                    title_class: group
                },
                data:{
                    id_teacher: user.id_teacher
                }
            });
        }
        
        
        
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
            },
            group:{
                select: {
                    title_class: true
                }
            }
        }
    });

    res.json(result);
}

const getGroups = async (req, res) =>{
    const client = new PrismaClient();

    const groups = await client.group.findMany({
        select:{
            id_class: true,
            title_class: true
        }
    });

    res.json(groups);
}
const createGroup = async (req, res)=>{
    const client = new PrismaClient();
    const {title} = req.body;
    const group = await client.group.create({
        data:{
            title_class: title
        },
        select:{
            id_class: true,
            title_class: true
        }
    });

    res.json(group);

}
module.exports = {
    signInStudent,
    signInTeacher,
    signUpTeacher,
    signUpStudent, 
    getTeachers,
    getGroups,
    createGroup
}