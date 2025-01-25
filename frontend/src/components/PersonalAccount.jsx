import React, { useContext, useEffect } from 'react';
import '../styles/personalAccount.css';
import { GradesContext, UserContext } from '../stores';
import { observer } from 'mobx-react-lite';

const Personal_Account = ({ onClose, showAverageGrade, handleToggleAverageGrade }) => {
    const gradesStore = useContext(GradesContext);
    const userStore = useContext(UserContext);

    useEffect(() => {
        const loadData = async () => {
            await gradesStore.loadGrades(userStore.currentUser);
        };
        loadData();
    }, [gradesStore, userStore.currentUser]);

    const calculateAverageGrades = () => {
        const subjectAverages = {};

        if (gradesStore.grades) {
            gradesStore.grades.grades.forEach((subjectData) => {
                const { subject, grades } = subjectData;
                const sum = grades.reduce((acc, grade) => acc + parseInt(grade.grade), 0);
                const average = sum / grades.length;
                subjectAverages[subject] = average.toFixed(2);
            });
        }

        return subjectAverages;
    };

    const averageGrades = calculateAverageGrades();

    if (!gradesStore.grades) {
        return <div>Загрузка...</div>;
    }

    return (
        <div className="personal-account-container">
            <div className="student-info">
                <h2 className="main-title">Личный кабинет</h2>
                <div className="info-item">
                    <span className="info-label">ФИО:</span>
                    <span className="info-value">
                        {`${userStore.currentUser.surname_student} ${userStore.currentUser.name_student} ${userStore.currentUser.patronymic_student}`}
                    </span>
                </div>
                <div className="info-item">
                    <span className="info-label">Группа:</span>
                    <span className="info-value">{gradesStore.grades.group}</span>
                </div>
                <div className="info-item">
                    <span className="info-label">Куратор:</span>
                    <span className="info-value">{gradesStore.grades.curator}</span>
                </div>
            </div>

            <div className="grades-container">
                {gradesStore.grades.grades.map((subjectData, index) => (
                    <div key={index} className="subject-grades">
                        <h3 className="subject-title">{subjectData.subject}</h3>
                        <div className="subject-title">
                            <span className="teacher-label">Преподаватель:</span>
                            <br />
                            <span className="teacher-value">
                                {`${subjectData.teacher.surname_teacher} ${subjectData.teacher.name_teacher} ${subjectData.teacher.patronymic_teacher}`}
                            </span>
                        </div>
                        <table className="grade-table">
                            <thead>
                                <tr>
                                    <th>Оценка</th>
                                    <th>Комментарий</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subjectData.grades.map((grade, i) => (
                                    <tr key={i}>
                                        <td>{grade.grade}</td>
                                        <td>{grade.comment}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>

            <div className="average-grade-section">
                {showAverageGrade && (
                    <div className="average-grades-container">
                        {Object.entries(averageGrades).map(([subject, average], index) => (
                            <div key={index} className="average-grade-table">
                                <h3 className="average-grade-title">{subject}</h3>
                                <table className="average-table">
                                    <thead>
                                        <tr>
                                            <th>Средний балл</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{average}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        ))}
                    </div>
                )}
                <button className="average-grade-button" onClick={handleToggleAverageGrade}>
                    {showAverageGrade ? 'Скрыть средний балл' : 'Просмотр среднего балла оценок'}
                </button>
                <button className="exit-button" onClick={onClose}>Выйти из личного кабинета</button>
            </div>
        </div>
    );
};

export default observer(Personal_Account);