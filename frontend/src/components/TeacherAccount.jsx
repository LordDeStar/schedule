import React, { useState } from 'react';
import '../styles/teacherAccount.css';

const TeacherAccount = ({ onClose }) => {
    const teacherData = {
        fullName: 'Сидорова Анна Васильевна',
        group: 'ИВТ-21',
         subject: 'Программирование',
    };

    const [newStudent, setNewStudent] = useState({
        fullName: '',
        login: '',
        password: '',
    });
     const [students, setStudents] = useState([]);
     const handleAddStudent = () => {
         if (newStudent.fullName.trim() !== '' && newStudent.login.trim() !== '' && newStudent.password.trim() !== '') {
             setStudents([...students, { ...newStudent }]);
            setNewStudent({
                fullName: '',
                login: '',
                password: '',
            });
         }
     };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
         setNewStudent({ ...newStudent, [name]: value });
    };



    return (
        <div className="teacher-account-container">
            <div className="teacher-info">
                <h2 className="main-title">Личный кабинет преподавателя</h2>
                <div className="info-item">
                    <span className="info-label">ФИО:</span>
                    <span className="info-value">{teacherData.fullName}</span>
                </div>
                <div className="info-item">
                    <span className="info-label">Кураторская группа:</span>
                    <span className="info-value">{teacherData.group}</span>
                </div>
                <div className="info-item">
                    <span className="info-label">Предмет:</span>
                    <span className="info-value">{teacherData.subject}</span>
                </div>
            </div>

             <div className="add-student-form">
                    <h3 className="form-title">Добавить студента в группу</h3>
                     <div className="input-group">
                        <label className="input-label">ФИО студента:</label>
                        <input
                            type="text"
                            name="fullName"
                            value={newStudent.fullName}
                            onChange={handleInputChange}
                            className="teacher-input"
                        />
                     </div>
                   <div className="input-group">
                        <label className="input-label">Логин студента:</label>
                        <input
                            type="text"
                           name="login"
                            value={newStudent.login}
                            onChange={handleInputChange}
                            className="teacher-input"
                        />
                    </div>
                    <div className="input-group">
                        <label className="input-label">Пароль студента:</label>
                        <input
                            type="password"
                            name="password"
                            value={newStudent.password}
                            onChange={handleInputChange}
                           className="teacher-input"
                        />
                    </div>
                    <button className="add-button" onClick={handleAddStudent}>Добавить студента</button>
                </div>

             {students.length > 0 && (
                   <div className="students-list">
                       <h3 className="list-title">Студенты группы {teacherData.group}</h3>
                       <ul>
                           {students.map((student, index) => (
                              <li key={index} className="student-item">
                                 <span className="student-name">{student.fullName}</span>
                              </li>
                           ))}
                       </ul>
                  </div>
               )}

                <div className="button-group">
                       <button className="exit-button" onClick={onClose}>Выйти из личного кабинета</button>
                </div>
        </div>
    );
};

export default TeacherAccount;