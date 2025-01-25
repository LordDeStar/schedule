import { makeAutoObservable } from 'mobx';

class GradesStore {
    grades = null;

    constructor() {
        makeAutoObservable(this);
    }

    async loadGrades(user) {
        let id = user.id_student;
        const response = await fetch(`http://localhost:3500/cabinet/get-grades?user=${id}`);
        if (response.ok) {
            let result = await response.json();
            this.grades = this.normalizeData(result, user);
        } else {
            alert("Ошибка при попытке получить оценки");
        }
    }

    normalizeData(data, user) {
        const groupedBySubject = data.reduce((acc, grade) => {
            const subject = grade.subject.title_subject;
            if (!acc[subject]) {
                acc[subject] = {
                    grades: [], 
                    teacher: grade.teacher, 
                };
            }

            acc[subject].grades.push({
                grade: grade.grade_number,
                comment: grade.comment_sheet,
            });
            return acc;
        }, {});

        // Формируем ФИО куратора
        let fio = `${user.group.teacher.surname_teacher} ${user.group.teacher.name_teacher} ${user.group.teacher.patronymic_teacher}`;

        // Создаем нормализованные данные
        const normalizedData = {
            group: user.group.title_class, // Название группы
            curator: fio, // ФИО куратора
            grades: Object.keys(groupedBySubject).map((subject) => ({
                subject,
                grades: groupedBySubject[subject].grades, // Оценки по предмету
                teacher: groupedBySubject[subject].teacher, // Преподаватель
            })),
        };

        return normalizedData;
    }
}

export default GradesStore;