import React, { useContext, useEffect } from 'react';
import '../styles/teachers.css';
import { UserContext } from '../stores';
import { observer } from 'mobx-react-lite';

const Teachers = () => {
    const userStore = useContext(UserContext);

    useEffect(() => {
        userStore.loadTeachers();
    }, []);

    if (!userStore.teachers) {
        return <div className="loading">Загрузка...</div>;
    }

    if (userStore.teachers.length === 0) {
        return <div className="no-data">Нет данных о преподавателях.</div>;
    }

    return (
        <div className="teachers-container">
            <div className="text-container">
                <h2 className="main-title">Преподавательский состав</h2>
                <div className="teachers-list">
                    {userStore.teachers.map((teacher) => (
                        <div key={teacher.id} className="teacher-card">
                            <h3 className="teacher-name">{teacher.fullName}</h3>
                            <div className="teacher-info">
                                {/* Отображаем классную группу, только если она есть */}
                                {teacher.classGroup && (
                                    <div className="teacher-item">
                                        <strong className="teacher-label">Классная группа:</strong>
                                        <span className="teacher-value">{teacher.classGroup}</span>
                                    </div>
                                )}

                                {/* Предмет */}
                                <div className="teacher-item">
                                    <strong className="teacher-label">Предмет:</strong>
                                    <span className="teacher-value">{teacher.subject}</span>
                                </div>

                                {/* Telegram */}
                                <div className="teacher-item">
                                    <strong className="teacher-label">Telegram:</strong>
                                    <span className="teacher-value">{teacher.telegram || 'не указан'}</span>
                                </div>

                                {/* Email */}
                                <div className="teacher-item">
                                    <strong className="teacher-label">Email:</strong>
                                    <span className="teacher-value">{teacher.email || 'не указан'}</span>
                                </div>

                                {/* Номер телефона */}
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

export default observer(Teachers);