import React, { useState } from 'react';
import '../styles/journal.css';

const Journal = ({onClose}) => {
    const [selectedGroup, setSelectedGroup] = useState('');
    const [studentGrades, setStudentGrades] = useState({});
    const [studentComments, setStudentComments] = useState({});


     const groups = ["ИВТ-21", "СЭЗ-22", "ИВТ-23"];
   const studentsData = {
        "ИВТ-21": [
            { id: 1, fullName: 'Иванов Иван Иванович' },
             { id: 2, fullName: 'Петров Петр Петрович' },
             { id: 3, fullName: 'Сидоров Александр Сергеевич' },
          ],
         "СЭЗ-22": [
               {id: 4, fullName: 'Смирнов Дмитрий Андреевич'},
               {id: 5, fullName: 'Козлова Анна Ивановна'},
                {id: 6, fullName: 'Соколова Мария Петровна'},
           ],
        "ИВТ-23": [
           { id: 7, fullName: 'Михайлов Иван Сергеевич'},
          {id: 8, fullName: 'Морозова Елена Дмитриевна'},
          {id: 9, fullName: 'Васильев Андрей Петрович'},
       ],
    };
      const handleGroupChange = (e) => {
         setSelectedGroup(e.target.value);
          setStudentGrades({});
        setStudentComments({});
      };

      const handleGradeChange = (studentId, e, index) => {
        const value = e.target.value;
      if (value === '' || (value >= 1 && value <= 5)) {
            setStudentGrades(prevState => ({
             ...prevState,
             [studentId]: (prevState[studentId] || []).map((grade, i) => (i === index ? value : grade)),
          }));
        }

    };

    const handleCommentChange = (studentId, e) => {
       setStudentComments({
            ...studentComments,
           [studentId]: e.target.value,
        });
    };

    const handleAddGrade = (studentId) => {
         setStudentGrades(prevState => ({
              ...prevState,
                [studentId]: [...(prevState[studentId] || []), ''],
          }));
    };

    const handleSaveJournal = () => {
           const journalData = {
            group: selectedGroup,
               grades: studentGrades,
              comments: studentComments,
           };

           console.log('Сохраненные данные журнала:', journalData);
         alert("Данные сохранены!");
        // Тут нужно будет добавить логику отправки данных на сервер
    };


     const renderStudents = () => {
         if (!selectedGroup) return null;

         return studentsData[selectedGroup].map(student => (
           <tr key={student.id}>
             <td>{student.fullName}</td>
             <td>
                  {(studentGrades[student.id] || []).map((grade, index) => (
                     <div key={index} className="grade-input-container">
                        <input
                             type="number"
                             min="1"
                             max="5"
                             value={grade}
                              onChange={(e) => handleGradeChange(student.id, e, index)}
                            className="grade-input"
                        />
                     </div>
                    ))}
                <button className="add-grade-button" onClick={() => handleAddGrade(student.id)}>+</button>
             </td>
                  <td>
                       <textarea
                          value={studentComments[student.id] || ''}
                           onChange={(e) => handleCommentChange(student.id, e)}
                           className="comment-input"
                           placeholder="Добавить комментарий"
                        />
                 </td>
          </tr>
       ));
    };

    return (
        <div className="journal-container">
            <h2 className="main-title">Журнал успеваемости</h2>
            <div className="group-select">
                 <label className="select-label">Выберите группу:</label>
               <select value={selectedGroup} onChange={handleGroupChange} className="group-select-input">
                    <option value="">Выберите группу</option>
                    {groups.map(group => (
                         <option key={group} value={group}>{group}</option>
                     ))}
               </select>
              </div>
                <div className="journal-table">
                 <table>
                    <thead>
                         <tr>
                            <th>Студент</th>
                            <th>Оценки</th>
                                <th>Комментарий</th>
                       </tr>
                 </thead>
                <tbody>
                     {renderStudents()}
                 </tbody>
                </table>
             </div>
             <div className="journal-button-section">
                <button className="save-button" onClick={handleSaveJournal}>Сохранить</button>
               <button className="exit-button" onClick={onClose}>Назад</button>
            </div>
       </div>
    );
};

export default Journal;