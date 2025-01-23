import React from 'react';
import '../styles/personalAccount.css';

const Personal_Account = ({ onClose, showAverageGrade, handleToggleAverageGrade }) => {
    const studentData = {
        fullName: 'Иванов Иван Иванович',
        group: 'ИВТ-21',
        curator: 'Петров Петр Петрович',
        grades: [
             { subject: 'Математика', grade: '5', date: '2023-10-26' },
            { subject: 'Физика', grade: '4', date: '2023-10-27' },
            { subject: 'Информатика', grade: '5', date: '2023-10-28' },
            { subject: 'Химия', grade: '3', date: '2023-10-29' },
            { subject: 'Английский', grade: '4', date: '2023-10-30' },
             { subject: 'История', grade: '5', date: '2023-11-01' },
             { subject: 'Математика', grade: '4', date: '2023-11-02' },
             { subject: 'Физика', grade: '3', date: '2023-11-03' },
             { subject: 'Информатика', grade: '4', date: '2023-11-04' },
              { subject: 'Химия', grade: '5', date: '2023-11-05' },
               { subject: 'Английский', grade: '5', date: '2023-11-06' },
               { subject: 'История', grade: '4', date: '2023-11-07' },
        ],
    };

    const calculateAverageGrades = () => {
         const subjectGrades = {};
         studentData.grades.forEach(grade => {
             if (!subjectGrades[grade.subject]) {
                   subjectGrades[grade.subject] = [];
              }
            subjectGrades[grade.subject].push(parseInt(grade.grade));
         });

         const subjectAverages = {};
        for (const subject in subjectGrades) {
             const sum = subjectGrades[subject].reduce((acc, grade) => acc + grade, 0);
              const average = sum / subjectGrades[subject].length;
              subjectAverages[subject] = average.toFixed(2);
          }

        return subjectAverages;
    };


     const averageGrades = calculateAverageGrades();

    return (
        <div className="personal-account-container">
             <div className="student-info">
                <h2 className="main-title">Личный кабинет</h2>
                <div className="info-item">
                    <span className="info-label">ФИО:</span>
                    <span className="info-value">{studentData.fullName}</span>
                </div>
                <div className="info-item">
                    <span className="info-label">Группа:</span>
                    <span className="info-value">{studentData.group}</span>
                </div>
                 <div className="info-item">
                    <span className="info-label">Куратор:</span>
                    <span className="info-value">{studentData.curator}</span>
                </div>
            </div>

             <div className="grades-table">
                  <table>
                      <thead>
                            <tr>
                                <th>Предмет</th>
                                 <th>Оценка</th>
                                <th>Дата</th>
                            </tr>
                       </thead>
                      <tbody>
                           {studentData.grades.map((grade, index) => (
                                 <tr key={index}>
                                   <td>{grade.subject}</td>
                                  <td>{grade.grade}</td>
                                  <td>{grade.date}</td>
                              </tr>
                           ))}
                      </tbody>
                  </table>
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

export default Personal_Account;