// import React, { useState, useContext } from 'react';
// import '../styles/teacherAccount.css';
// import { UserContext } from '../stores';

// const TeacherAccount = ({ onClose }) => {
//     const userStore = useContext(UserContext);
//     let hasGroup = false; 
//     const teacherData = {
//         fullName: `${userStore.currentUser.surname_teacher} ${userStore.currentUser.name_teacher} ${userStore.currentUser.patronymic_teacher}`,
        
//          subject: userStore.currentUser.subject.title_subject,
//     };
//     if (userStore.currentUser.group.length > 0){
//         teacherData.group = userStore.currentUser.group[0].title_class;
//         hasGroup = true;
//     }

//     const [students, setStudents] = useState([]);
//     const [newStudent, setNewStudent] = useState({
//         fullName: '',
//         login: '',
//         password: '',
//     });
//     const [editingStudentId, setEditingStudentId] = useState(null);
//     const [studentGrades, setStudentGrades] = useState({});


//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewStudent({ ...newStudent, [name]: value });
//     };

//     const handleAddStudent = () => {
//         if (newStudent.fullName.trim() !== '' &&
//             newStudent.login.trim() !== '' &&
//             newStudent.password.trim() !== '') {
//             const newStudentWithId = { ...newStudent, id: Date.now() };
//             setStudents([...students, newStudentWithId]);
//             setNewStudent({
//                 fullName: '',
//                 login: '',
//                 password: '',
//             });
//         } else {
//             alert('Заполните все поля!');
//         }
//     };


//      const handleEditGrade = (studentId) => {
//          setEditingStudentId(studentId);
//         if(!studentGrades[studentId]){
//            setStudentGrades({
//                 ...studentGrades,
//                 [studentId]:{
//                    grade: '',
//                    date: new Date(),
//                    comment: '',
//                }
//             })
//        }
//     };

//     const handleCancelEdit = () => {
//         setEditingStudentId(null);
//     };

//    const handleSaveGrade = (studentId) => {
//          setStudentGrades({
//             ...studentGrades,
//          });
//         setEditingStudentId(null);
//    };

//    const handleDateChange = (studentId, date) => {
//        setStudentGrades({
//           ...studentGrades,
//            [studentId]: {
//               ...studentGrades[studentId],
//               date: date,
//             }
//         });
//     };
//     const handleGradeChange = (studentId, value) => {
//        setStudentGrades({
//            ...studentGrades,
//            [studentId]: {
//               ...studentGrades[studentId],
//                 grade: value,
//             }
//         });
//     };
//    const handleCommentChange = (studentId, value) => {
//       setStudentGrades({
//          ...studentGrades,
//           [studentId]: {
//              ...studentGrades[studentId],
//                comment: value,
//            }
//         });
//     };

//     return (
//         <div className="teacher-account-container">
//             <div className="teacher-info">
//                <h2 className="main-title">Личный кабинет преподавателя</h2>
//                  <div className="info-item">
//                     <span className="info-label">ФИО:</span>
//                     <span className="info-value">{teacherData.fullName}</span>
//                 </div>
//                 { hasGroup &&
//                 <div className="info-item">
//                     <span className="info-label">Кураторская группа:</span>
//                     <span className="info-value">{teacherData.group}</span>
//                 </div>
//                 }
//                 <div className="info-item">
//                     <span className="info-label">Предмет:</span>
//                     <span className="info-value">{teacherData.subject}</span>
//                  </div>
//             </div>
            
//              <div className="add-student-form">
//                     <h3 className="form-title">Добавить студента в группу</h3>
//                      <div className="input-group">
//                         <label className="input-label">ФИО студента:</label>
//                         <input
//                             type="text"
//                             name="fullName"
//                             value={newStudent.fullName}
//                             onChange={handleInputChange}
//                             className="teacher-input"
//                         />
//                      </div>
//                    <div className="input-group">
//                         <label className="input-label">Логин студента:</label>
//                         <input
//                             type="text"
//                            name="login"
//                             value={newStudent.login}
//                             onChange={handleInputChange}
//                             className="teacher-input"
//                         />
//                     </div>
//                     <div className="input-group">
//                         <label className="input-label">Пароль студента:</label>
//                         <input
//                             type="password"
//                             name="password"
//                             value={newStudent.password}
//                             onChange={handleInputChange}
//                            className="teacher-input"
//                         />
//                     </div>
//                     <button className="add-button" onClick={handleAddStudent}>Добавить студента</button>
//                 </div>

//              {students.length > 0 && (
//                    <div className="students-list">
//                        <h3 className="list-title">Студенты группы {teacherData.group}</h3>
//                        <ul>
//                            {students.map((student, index) => (
//                               <li key={index} className="student-item">
//                                  <span className="student-name">{student.fullName}</span>
//                               </li>
//                            ))}
//                        </ul>
//                   </div>
//                )}

//                 <div className="button-group">
//                        <button className="exit-button" onClick={onClose}>Выйти из личного кабинета</button>
//                 </div>
//         </div>
//     );
// };
// export default TeacherAccount;











import React, { useState } from 'react';
import '../styles/teacherAccount.css';
import Journal from './Journal';

const TeacherAccount = ({ onClose }) => {
    const teacherData = {
        fullName: 'Сидорова Анна Владимировна',
        curatorGroup: 'ИВТ-21',
        subject: 'Программирование',
    };

    const [newStudent, setNewStudent] = useState({
        lastName: '',
        firstName: '',
        middleName: '',
        login: '',
        password: '',
    });
      const [students, setStudents] = useState([]);
      const [isJournalOpen, setIsJournalOpen] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStudent({ ...newStudent, [name]: value });
    };

    const handleAddStudent = () => {
        if (
            newStudent.lastName.trim() === '' ||
            newStudent.firstName.trim() === '' ||
            newStudent.middleName.trim() === '' ||
            newStudent.login.trim() === '' ||
            newStudent.password.trim() === ''
        ) {
            alert('Пожалуйста, заполните все поля.');
            return;
        }

        setStudents([...students,
            {
                ...newStudent,
                group: teacherData.curatorGroup
            }]);
        setNewStudent({ lastName: '', firstName: '', middleName: '', login: '', password: '' });
    };

    const handleOpenJournal = () => {
        setIsJournalOpen(true);
    };
     const handleCloseJournal = () => {
         setIsJournalOpen(false);
     };
     if (isJournalOpen){
         return  <Journal onClose={handleCloseJournal}/>
     }

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
                    <span className="info-value">{teacherData.curatorGroup}</span>
                </div>
                <div className="info-item">
                    <span className="info-label">Предмет:</span>
                    <span className="info-value">{teacherData.subject}</span>
                </div>
            </div>

            <div className="add-student-section">
                 <h3 className="section-title">Добавление студента</h3>
                 <input
                   type="text"
                   name="lastName"
                    placeholder="Фамилия"
                   className="add-student-input"
                    value={newStudent.lastName}
                    onChange={handleInputChange}
                 />
                 <input
                  type="text"
                   name="firstName"
                    placeholder="Имя"
                    className="add-student-input"
                    value={newStudent.firstName}
                     onChange={handleInputChange}
                 />
               <input
                 type="text"
                 name="middleName"
                placeholder="Отчество"
                className="add-student-input"
                 value={newStudent.middleName}
                  onChange={handleInputChange}
                />
                 <input
                 type="text"
                 name="login"
                 placeholder="Логин"
                 className="add-student-input"
                 value={newStudent.login}
                 onChange={handleInputChange}
                />
               <input
                  type="password"
                   name="password"
                  placeholder="Пароль"
                  className="add-student-input"
                  value={newStudent.password}
                  onChange={handleInputChange}
                />
                 <button className="add-student-button" onClick={handleAddStudent}>
                   Добавить студента
              </button>
              <ul className="student-list">
                    {students.map((student, index) => (
                      <li key={index} className="student-item">
                        {student.lastName} {student.firstName} {student.middleName} ({student.group})
                     </li>
                   ))}
             </ul>
            </div>
             <div className="journal-button-section">
             <button className="open-journal-button" onClick={handleOpenJournal}>
                 Журнал
             </button>
                 <button className="exit-button" onClick={onClose}>
                    Выйти из личного кабинета
                 </button>
           </div>
         </div>
    );
};

export default TeacherAccount;