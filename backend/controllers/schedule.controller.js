const xlsx = require('xlsx');
const {PrismaClient} = require('@prisma/client');

const setScheduleFromFile = async (req, res)=>{
    if (!req.body || req.body.length === 0) {
    return res.status(400).send('Файл не был загружен.');
  }

  try {
    const fileBuffer = req.body;
    const workbook = xlsx.read(fileBuffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);
    const result = await parseScheduleFromJson(data);
    res.json(result);
  } catch (error) {
    console.error('Ошибка при обработке файла:', error);
    res.status(500).send('Ошибка при обработке файла.');
  }
}

const parseScheduleFromJson = async (data)=>{
    const client = new PrismaClient();
    await client.schedule_table.deleteMany();
    const teachers = await client.teacher.findMany();
    const subjects = await client.subject.findMany();
    const groups = await client.group.findMany();
    const days = await client.days_of_week.findMany();
    let result = data.map(record =>{
        const fio = record["преподаватель"].split(' ');
        const id_day = days.find(day=>day.title_day == record["день недели"]).id_day;
        const id_class = groups.find(group=>group.title_class==record["группа"]).id_class;
        const id_teacher = teachers.find(teacher => teacher.name_teacher == fio[1] && teacher.surname_teacher == fio[0] && teacher.patronymic_teacher == fio[2]).id_teacher;
        const id_subject = subjects.find(subject => subject.title_subject == record["дисциплина"]).id_subject;
        const classroom_title = record["аудитория"].toString();
        const number_call = record["пара"];

        return {
            id_day,
            id_class,
            id_teacher,
            id_subject,
            classroom_title,
            number_call
        }

    });

    const schedule = await client.schedule_table.createMany({
        data: result,
        skipDuplicates: true
    });
    return schedule;
}

const getSchedule = async (req, res) => {
    const client = new PrismaClient();

    try {
        const { search_text } = req.query;

        const schedule = await client.schedule_table.findMany({
            select: {
                id_schedule: true,
                id_class: true,
                id_teacher: true,
                id_subject: true,
                classroom_title: true,
                number_call: true,
                id_day: true,
                calls: {
                    select: {
                        time_lesson_start: true,
                        time_lesson_end: true
                    }
                },
                teacher: {
                    select: {
                        surname_teacher: true,
                        name_teacher: true,
                        patronymic_teacher: true,
                        telegram_teacher: true,
                        email_teacher: true,
                        phone_teacher: true
                    }
                },
                subject: {
                    select: {
                        title_subject: true
                    }
                },
                group: {
                    select: {
                        title_class: true
                    }
                }
            },
            where: {
                OR: [
                    {
                        teacher: {
                            OR: [
                                { surname_teacher: { contains: search_text, mode: 'insensitive' } },
                                { name_teacher: { contains: search_text, mode: 'insensitive' } },
                                { patronymic_teacher: { contains: search_text, mode: 'insensitive' } }
                            ]
                        }
                    },
                    {
                        group: {
                            title_class: { contains: search_text, mode: 'insensitive' }
                        }
                    }
                ]
            }
        });
        res.json(schedule);
    } catch (error) {
        console.error('Ошибка при получении расписания:', error);
        res.status(500).json({ error: 'Произошла ошибка при получении расписания' });
    }
};


module.exports = {
    setScheduleFromFile,
    getSchedule
}