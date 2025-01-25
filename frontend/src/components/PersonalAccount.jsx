import React from 'react';
import '../styles/personalAccount.css';

const Personal_Account = ({ onClose, showAverageGrade, handleToggleAverageGrade }) => {
    const studentData = {
        fullName: 'Иванов Иван Иванович',
        group: 'ИВТ-21',
        curator: 'Петров Петр Петрович',
       grades: [
              { subject: 'Математика', grade: '5', comment: 'Отлично' },
               { subject: 'Физика', grade: '4', comment: 'Хорошо' },
              { subject: 'Информатика', grade: '5', comment: 'Замечательно' },
               { subject: 'Химия', grade: '3', comment: 'Нужно подтянуть' },
              { subject: 'Английский', grade: '4', comment: 'Нормально' },
              { subject: 'История', grade: '5', comment: 'Хороший ответ' },
               { subject: 'Математика', grade: '4', comment: 'Нужно больше стараться' },
              { subject: 'Физика', grade: '3', comment: 'Не очень хорошо' },
             { subject: 'Информатика', grade: '4', comment: 'Хорошо' },
              { subject: 'Химия', grade: '5', comment: 'Отлично' },
             { subject: 'Английский', grade: '5', comment: 'Отличный результат' },
              { subject: 'История', grade: '4', comment: 'Хорошо' },
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


    const groupGradesBySubject = () => {
        const grouped = {};
        studentData.grades.forEach(grade => {
          if(!grouped[grade.subject]) {
               grouped[grade.subject] = [];
            }
             grouped[grade.subject].push(grade);
        });
        return grouped;
    };
    const groupedGrades = groupGradesBySubject();

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

            <div className="grades-container">
                {Object.entries(groupedGrades).map(([subject, grades], index) => (
                    <div key={index} className="subject-grades">
                          <h3 className="subject-title">{subject}</h3>
                             <table className="grade-table">
                                <thead>
                                    <tr>
                                        <th>Оценка</th>
                                        <th>Комментарий</th>
                                    </tr>
                                  </thead>
                                <tbody>
                                    {grades.map((grade, i) => (
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

export default Personal_Account;