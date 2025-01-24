import React from 'react';
import '../styles/teachers.css';

const Teachers = () => {
    const teachersData = [
        {
            id: 1,
            fullName: 'Иванов Иван Иванович',
            telegram: '@ivanov_ivan',
            email: 'ivanov@example.com',
            phoneNumber: '+79001234567',
            subject: 'Математика',
            classGroup: 'ИВТ-21',
            leadership: "куратор"
        },
        {
            id: 2,
            fullName: 'Петрова Анна Сергеевна',
            telegram: null,
            email: 'petrova@example.com',
            phoneNumber: '+79112345678',
            subject: 'Физика',
            classGroup: 'ПИ-21',
             leadership: "зам. куратора"
        },
        {
            id: 3,
            fullName: 'Смирнов Дмитрий Александрович',
            telegram: '@smirnov_dmitry',
            email: null,
            phoneNumber: '+79223456789',
            subject: 'Информатика',
            classGroup: 'М-21',
             leadership: "не куратор"
        },
         {
            id: 4,
            fullName: 'Кузнецова Елена Викторовна',
            telegram: null,
            email: null,
            phoneNumber: '+79334567890',
             subject: 'Химия',
            classGroup: 'ИВТ-22',
              leadership: "куратор"
        },
        {
            id: 5,
            fullName: 'Александрова Ольга Михайловна',
            telegram: '@aleksandrova_olga',
            email: 'aleksandrova@example.com',
            phoneNumber: '+79445678901',
            subject: 'Английский',
            classGroup: 'ПИ-22',
              leadership: "не куратор"
        },
         {
            id: 6,
            fullName: 'Соколов Максим Игоревич',
            telegram: '@sokolov_maxim',
            email: null,
            phoneNumber: '+79556789012',
            subject: 'История',
            classGroup: 'М-22',
            leadership: "зам. куратора"
        },
    ];

    return (
        <div className="teachers-container">
            <div className="text-container">
                <h2 className="main-title">Преподавательский состав</h2>
                <div className="teachers-list">
                    {teachersData.map((teacher) => (
                        <div key={teacher.id} className="teacher-card">
                        <h3 className="teacher-name">{teacher.fullName}</h3>
                         <div className="teacher-info">
                                {teacher.classGroup && (
                                    <div className="teacher-item">
                                        <strong className="teacher-label">Классная группа:</strong>
                                        <span className="teacher-value">{teacher.classGroup}</span>
                                    </div>
                                )}
                                <div className="teacher-item">
                                  <strong className="teacher-label">Руководство:</strong>
                                  <span className="teacher-value">{teacher.leadership || 'не указано'}</span>
                              </div>
                                <div className="teacher-item">
                                    <strong className="teacher-label">Предмет:</strong>
                                    <span className="teacher-value">{teacher.subject}</span>
                                </div>
                                <div className="teacher-item">
                                   <strong className="teacher-label">Telegram:</strong>
                                   <span className="teacher-value">{teacher.telegram || 'не указан'}</span>
                                </div>
                                <div className="teacher-item">
                                   <strong className="teacher-label">Email:</strong>
                                   <span className="teacher-value">{teacher.email || 'не указан'}</span>
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