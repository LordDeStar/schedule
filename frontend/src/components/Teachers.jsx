import React from 'react';
import '../styles/teachers.css';

const Teachers = () => {
    // Список преподавателей (можете заменить на ваши реальные данные)
    const teachersData = [
        {
            id: 1,
            lastName: "Иванов",
            firstName: "Иван",
            middleName: "Иванович",
            classGroup: "ИВТ-21",
            leadership: "Куратор",
            phoneNumber: "+7 (999) 123-4567",
            subject: "Информатика",
        },
        {
            id: 2,
            lastName: "Петрова",
            firstName: "Елена",
            middleName: "Сергеевна",
            classGroup: "СЭЗ-22",
            leadership: "Куратор",
            phoneNumber: "+7 (987) 654-3210",
            subject: "Экономика",
        },
        {
            id: 3,
            lastName: "Сидорова",
            firstName: "Анна",
            middleName: "Викторовна",
            classGroup: "ИВТ-23",
            leadership: "Куратор",
            phoneNumber: "+7 (987) 523-5210",
            subject: "Программирование",
        },
        {
            id: 4,
            lastName: "Смирнов",
            firstName: "Алексей",
            middleName: "Олегович",
            classGroup: null,
            leadership: "Заведующий отделением",
            phoneNumber: "+7 (952) 523-3210",
            subject: "Управление проектами",
        },
        {
            id: 5,
            lastName: "Козлова",
            firstName: "Мария",
            middleName: "Петровна",
            classGroup: null,
            leadership: "Методист",
            phoneNumber: "+7 (956) 789-3210",
            subject: "Методика обучения",
        }
        // Добавьте других преподавателей
    ];

    return (
        <div className="teachers-container">
            <div className="text-container">
                <h2 className="main-title">Преподавательский состав</h2>
                <div className="teachers-list">
                    {teachersData.map((teacher) => (
                        <div key={teacher.id} className="teacher-card">
                            <h3 className="teacher-name">
                                {teacher.lastName} {teacher.firstName} {teacher.middleName}
                            </h3>
                            <div className="teacher-info">
                                {teacher.classGroup && (
                                    <div className="teacher-item">
                                        <strong className="teacher-label">Классная группа:</strong>
                                        <span className="teacher-value">{teacher.classGroup}</span>
                                    </div>
                                )}
                                <div className="teacher-item">
                                    <strong className="teacher-label">Руководство:</strong>
                                    <span className="teacher-value">{teacher.leadership}</span>
                                </div>
                                 <div className="teacher-item">
                                    <strong className="teacher-label">Предмет:</strong>
                                    <span className="teacher-value">{teacher.subject}</span>
                                </div>
                                <div className="teacher-item">
                                    <strong className="teacher-label">Номер телефона:</strong>
                                    <span className="teacher-value">{teacher.phoneNumber}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Teachers;