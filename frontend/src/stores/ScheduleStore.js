import { makeAutoObservable } from 'mobx';

class ScheduleStore {
    schedule = null; // Исправлено название свойства
    isLoading = false; // Состояние загрузки
    error = null; // Состояние ошибки

    constructor() {
        makeAutoObservable(this);
    }

    async getSchedule(search_text) {
        this.isLoading = true; // Начало загрузки
        this.error = null; // Сброс ошибки перед новым запросом

        try {
            const response = await fetch(`http://localhost:3500/schedule/get?search_text=${search_text}`);

            if (response.ok) {
                const data = await response.json();
                this.schedule = this.normalizeSchedule(data); // Нормализация данных
            } else {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
        } catch (error) {
            this.error = error.message; // Сохранение ошибки
            alert(`Ошибка при попытке запросить расписание: ${error.message}`);
        } finally {
            this.isLoading = false; // Завершение загрузки
        }
    }

    // Нормализация данных (пример)
    normalizeSchedule(data) {
        return data.map(item => ({
            id_schedule: item.id_schedule,
            id_class: item.id_class,
            id_teacher: item.id_teacher,
            id_subject: item.id_subject,
            classroom_title: item.classroom_title,
            number_call: item.number_call,
            id_day: item.id_day,
            time_lesson_start: item.calls.time_lesson_start,
            time_lesson_end: item.calls.time_lesson_end,
            teacher: {
                surname_teacher: item.teacher.surname_teacher,
                name_teacher: item.teacher.name_teacher,
                patronymic_teacher: item.teacher.patronymic_teacher,
                telegram_teacher: item.teacher.telegram_teacher,
                email_teacher: item.teacher.email_teacher,
                phone_teacher: item.teacher.phone_teacher,
            },
            subject: {
                title_subject: item.subject.title_subject,
            },
            group: {
                title_class: item.group.title_class,
            },
        }));
    }
}

export default ScheduleStore;