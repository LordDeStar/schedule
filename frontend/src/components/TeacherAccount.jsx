import React, { useState } from 'react';
import '../styles/teacherAccount.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TeacherAccount = ({ onClose }) => {
    const teacherData = {
        fullName: 'Сидорова Анна Васильевна',
        group: 'ИВТ-21',
        subject: 'Программирование',
    };

    const [students, setStudents] = useState([]);
    const [newStudent, setNewStudent] = useState({
        fullName: '',
        login: '',
        password: '',
    });
    const [editingStudentId, setEditingStudentId] = useState(null);
    const [studentGrades, setStudentGrades] = useState({});


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStudent({ ...newStudent, [name]: value });
    };

    const handleAddStudent = () => {
        if (newStudent.fullName.trim() !== '' &&
            newStudent.login.trim() !== '' &&
            newStudent.password.trim() !== '') {
            const newStudentWithId = { ...newStudent, id: Date.now() };
            setStudents([...students, newStudentWithId]);
            setNewStudent({
                fullName: '',
                login: '',
                password: '',
            });
        } else {
            alert('Заполните все поля!');
        }
    };


     const handleEditGrade = (studentId) => {
         setEditingStudentId(studentId);
        if(!studentGrades[studentId]){
           setStudentGrades({
                ...studentGrades,
                [studentId]:{
                   grade: '',
                   date: new Date(),
                   comment: '',
               }
            })
       }
    };

    const handleCancelEdit = () => {
        setEditingStudentId(null);
    };

   const handleSaveGrade = (studentId) => {
         setStudentGrades({
            ...studentGrades,
         });
        setEditingStudentId(null);
   };

   const handleDateChange = (studentId, date) => {
       setStudentGrades({
          ...studentGrades,
           [studentId]: {
              ...studentGrades[studentId],
              date: date,
            }
        });
    };
    const handleGradeChange = (studentId, value) => {
       setStudentGrades({
           ...studentGrades,
           [studentId]: {
              ...studentGrades[studentId],
                grade: value,
            }
        });
    };
   const handleCommentChange = (studentId, value) => {
      setStudentGrades({
         ...studentGrades,
          [studentId]: {
             ...studentGrades[studentId],
               comment: value,
           }
        });
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
                <h3 className="form-title">Добавить студента</h3>
                <table>
                  <tbody>
                    <tr>
                        <td>ФИО студента:</td>
                        <td>
                            <input
                                type="text"
                                name="fullName"
                                value={newStudent.fullName}
                                onChange={handleInputChange}
                                className="teacher-input"
                           />
                         </td>
                    </tr>
                      <tr>
                           <td>Логин студента:</td>
                            <td>
                                 <input
                                    type="text"
                                   name="login"
                                   value={newStudent.login}
                                    onChange={handleInputChange}
                                     className="teacher-input"
                                  />
                            </td>
                     </tr>
                     <tr>
                        <td>Пароль студента:</td>
                        <td>
                             <input
                                 type="password"
                                   name="password"
                                  value={newStudent.password}
                                    onChange={handleInputChange}
                                   className="teacher-input"
                                />
                           </td>
                     </tr>
                       <tr>
                           <td colSpan="2">
                                <button className="add-button" onClick={handleAddStudent}>
                                   Добавить студента
                                </button>
                            </td>
                        </tr>
                    </tbody>
                 </table>
            </div>
           {students.length > 0 && (
               <div className="students-list">
                    <h3 className="list-title">Студенты группы {teacherData.group}</h3>
                     <div className="students-cards">
                        {students.map((student) => (
                            <div key={student.id} className="student-card">
                                 <h4 className="student-name">{student.fullName}</h4>
                                   {editingStudentId === student.id ? (
                                    <div className="student-edit-form">
                                        <div className="input-group">
                                             <label className="input-label">Оценка:</label>
                                                <input
                                                   type="number"
                                                     value={studentGrades[student.id]?.grade || ''}
                                                   onChange={(e) => handleGradeChange(student.id, e.target.value)}
                                                   className="teacher-input"
                                                     min="1"
                                                    max="5"
                                                  />
                                       </div>
                                       <div className="input-group">
                                            <label className="input-label">Дата:</label>
                                               <DatePicker
                                                    selected={studentGrades[student.id]?.date || new Date()}
                                                   onChange={(date) => handleDateChange(student.id, date)}
                                                   dateFormat="yyyy-MM-dd"
                                                    className="teacher-datepicker"
                                                 />
                                           </div>
                                           <div className="input-group">
                                                <label className="input-label">Комментарий:</label>
                                                    <textarea
                                                       value={studentGrades[student.id]?.comment || ''}
                                                        onChange={(e)=>handleCommentChange(student.id, e.target.value)}
                                                        className="teacher-textarea"
                                                    />
                                           </div>
                                       <div className="edit-buttons">
                                         <button
                                            className="save-button"
                                            onClick={() => handleSaveGrade(student.id)}
                                          >Сохранить</button>
                                          <button className="cancel-button" onClick={handleCancelEdit}>Отмена</button>
                                       </div>
                                  </div>
                                  ) : (
                                   <div className="student-info">
                                      <div className="info-group">
                                        <span className="info-label">Оценка:</span>
                                         <span className="info-value">{studentGrades[student.id]?.grade || ''}</span>
                                    </div>
                                      <div className="info-group">
                                          <span className="info-label">Дата:</span>
                                           <span className="info-value">{studentGrades[student.id]?.date?.toLocaleDateString() || ''}</span>
                                      </div>
                                      <div className="info-group">
                                           <span className="info-label">Комментарий:</span>
                                           <span className="info-value">{studentGrades[student.id]?.comment || ''}</span>
                                      </div>
                                      <button className="edit-button" onClick={() => handleEditGrade(student.id)}>
                                           Редактировать
                                      </button>
                                    </div>
                                  )}
                            </div>
                        ))}
                    </div>
              </div>
            )}
            <div className="button-group">
                <button className="exit-button" onClick={onClose}>Выйти из личного кабинета</button>
           </div>
        </div>
    );
};
export default TeacherAccount;