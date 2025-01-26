import { makeAutoObservable } from 'mobx';

class UserStore {
    currentUser = null;
    role = null;
    teachers = null;

    constructor() {
        makeAutoObservable(this);
    }

    setRole(title) {
        this.role = title;
    }

    async loginAsStudent(login, password) {
        const response = await fetch('http://localhost:3500/users/auth-student', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login, password }),
        });

        if (response.ok) {
            this.currentUser = await response.json();
        } else {
            alert('Неверный логин или пароль');
        }
    }

    async loginAsTeacher(login, password) {
        const response = await fetch('http://localhost:3500/users/auth-teacher', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login, password }),
        });

        if (response.ok) {
            this.currentUser = await response.json();
        } else {
            alert('Неверный логин или пароль');
        }
    }

    async loadTeachers() {
        const response = await fetch('http://localhost:3500/users/get-teachers');
        if (response.ok) {
            const data = await response.json();
            this.teachers = this.normalizeData(data);
        } else {
            alert('Ошибка при загрузке данных о преподавателях');
        }
    }

    async signUpTeacher(newTeacher) {
        const response = await fetch('http://localhost:3500/users/reg-teacher', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTeacher),
        });

        if (response.ok) {
            const data = await response.json();
            await this.loadTeachers();
            return data;
        } else {
            alert('Ошибка при добавлении преподавателя');
            return null;
        }
    }

    normalizeData(data) {
        return data.map((teacher) => ({
            id: teacher.id_teacher,
            fullName: `${teacher.surname_teacher} ${teacher.name_teacher} ${teacher.patronymic_teacher}`,
            telegram: teacher.telegram_teacher,
            email: teacher.email_teacher,
            phoneNumber: teacher.phone_teacher,
            subject: teacher.subject.title_subject,
            classGroup: teacher.group && teacher.group.length > 0 ? teacher.group[0].title_class : null,
        }));
    }
}

export default UserStore;