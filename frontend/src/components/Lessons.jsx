import React, { useState } from 'react';
import '../styles/lessons.css';

const Lessons = () => {
    const [searchQuery, setSearchQuery] = useState('');
       const scheduleData = {
            "ИВТ-21": {
                "Понедельник": [
                    { lesson: "Информатика", startTime: "08:30", endTime: "10:00", teacher: "Иванов И.И."},
                    { lesson: "Математика", startTime: "10:10", endTime: "11:40", teacher: "Сидоров А.В."},
                    { lesson: "Физкультура", startTime: "12:00", endTime: "13:30", teacher: "Петров П.П."},
                     { lesson: "", startTime: "13:40", endTime: "15:10", teacher: ""},
                     { lesson: "", startTime: "15:20", endTime: "16:50", teacher: ""},
                     { lesson: "", startTime: "17:00", endTime: "18:30", teacher: ""},
                     { lesson: "", startTime: "18:40", endTime: "20:10", teacher: ""},
                ],
                 "Вторник": [
                    { lesson: "Программирование", startTime: "08:30", endTime: "10:00", teacher: "Сидорова А.В."},
                    { lesson: "Английский", startTime: "10:10", endTime: "11:40", teacher: "Ермолаева А.Н."},
                     { lesson: "История", startTime: "12:00", endTime: "13:30", teacher: "Иванов И.И."},
                    { lesson: "", startTime: "13:40", endTime: "15:10", teacher: ""},
                    { lesson: "", startTime: "15:20", endTime: "16:50", teacher: ""},
                    { lesson: "", startTime: "17:00", endTime: "18:30", teacher: ""},
                    { lesson: "", startTime: "18:40", endTime: "20:10", teacher: ""},

                ],
                 "Среда": [
                   { lesson: "Физика", startTime: "08:30", endTime: "10:00", teacher: "Петров П.П."},
                     { lesson: "Правоведение", startTime: "10:10", endTime: "11:40", teacher: "Ермолаева А.Н."},
                    { lesson: "Базы данных", startTime: "12:00", endTime: "13:30", teacher: "Сидорова А.В."},
                      { lesson: "", startTime: "13:40", endTime: "15:10", teacher: ""},
                     { lesson: "", startTime: "15:20", endTime: "16:50", teacher: ""},
                     { lesson: "", startTime: "17:00", endTime: "18:30", teacher: ""},
                    { lesson: "", startTime: "18:40", endTime: "20:10", teacher: ""},
                ],
                 "Четверг": [
                     { lesson: "Программирование", startTime: "08:30", endTime: "10:00", teacher: "Сидорова А.В."},
                      { lesson: "Информатика", startTime: "10:10", endTime: "11:40", teacher: "Иванов И.И."},
                      { lesson: "Физика", startTime: "12:00", endTime: "13:30", teacher: "Петров П.П."},
                       { lesson: "", startTime: "13:40", endTime: "15:10", teacher: ""},
                     { lesson: "", startTime: "15:20", endTime: "16:50", teacher: ""},
                      { lesson: "", startTime: "17:00", endTime: "18:30", teacher: ""},
                     { lesson: "", startTime: "18:40", endTime: "20:10", teacher: ""},
                 ],
                "Пятница": [
                    { lesson: "Экономика", startTime: "08:30", endTime: "10:00", teacher: "Петров П.П."},
                     { lesson: "Математика", startTime: "10:10", endTime: "11:40", teacher: "Сидоров А.В."},
                     { lesson: "Физкультура", startTime: "12:00", endTime: "13:30", teacher: "Петров П.П."},
                    { lesson: "", startTime: "13:40", endTime: "15:10", teacher: ""},
                     { lesson: "", startTime: "15:20", endTime: "16:50", teacher: ""},
                     { lesson: "", startTime: "17:00", endTime: "18:30", teacher: ""},
                     { lesson: "", startTime: "18:40", endTime: "20:10", teacher: ""},
                  ],
                 "Суббота": [
                     { lesson: "", startTime: "08:30", endTime: "10:00", teacher: ""},
                    { lesson: "", startTime: "10:10", endTime: "11:40", teacher: ""},
                     { lesson: "", startTime: "12:00", endTime: "13:30", teacher: ""},
                    { lesson: "", startTime: "13:40", endTime: "15:10", teacher: ""},
                    { lesson: "", startTime: "15:20", endTime: "16:50", teacher: ""},
                     { lesson: "", startTime: "17:00", endTime: "18:30", teacher: ""},
                    { lesson: "", startTime: "18:40", endTime: "20:10", teacher: ""},
                 ],
              },
             "СЭЗ-22": {
                "Понедельник": [
                    { lesson: "Экономика", startTime: "08:30", endTime: "10:00", teacher: "Петров П.П."},
                    { lesson: "Математика", startTime: "10:10", endTime: "11:40", teacher: "Сидоров А.В."},
                     { lesson: "Физкультура", startTime: "12:00", endTime: "13:30", teacher: "Петров П.П."},
                    { lesson: "", startTime: "13:40", endTime: "15:10", teacher: ""},
                    { lesson: "", startTime: "15:20", endTime: "16:50", teacher: ""},
                    { lesson: "", startTime: "17:00", endTime: "18:30", teacher: ""},
                    { lesson: "", startTime: "18:40", endTime: "20:10", teacher: ""},
                ],
                 "Вторник": [
                    { lesson: "Английский", startTime: "08:30", endTime: "10:00", teacher: "Ермолаева А.Н."},
                      { lesson: "Правоведение", startTime: "10:10", endTime: "11:40", teacher: "Ермолаева А.Н."},
                     { lesson: "Базы данных", startTime: "12:00", endTime: "13:30", teacher: "Сидорова А.В."},
                     { lesson: "", startTime: "13:40", endTime: "15:10", teacher: ""},
                    { lesson: "", startTime: "15:20", endTime: "16:50", teacher: ""},
                    { lesson: "", startTime: "17:00", endTime: "18:30", teacher: ""},
                    { lesson: "", startTime: "18:40", endTime: "20:10", teacher: ""},
                ],
                 "Среда": [
                    { lesson: "Информатика", startTime: "08:30", endTime: "10:00", teacher: "Иванов И.И."},
                     { lesson: "Программирование", startTime: "10:10", endTime: "11:40", teacher: "Сидорова А.В."},
                    { lesson: "Физика", startTime: "12:00", endTime: "13:30", teacher: "Петров П.П."},
                     { lesson: "", startTime: "13:40", endTime: "15:10", teacher: ""},
                    { lesson: "", startTime: "15:20", endTime: "16:50", teacher: ""},
                    { lesson: "", startTime: "17:00", endTime: "18:30", teacher: ""},
                     { lesson: "", startTime: "18:40", endTime: "20:10", teacher: ""},
                 ],
                 "Четверг": [
                   { lesson: "Математика", startTime: "08:30", endTime: "10:00", teacher: "Сидоров А.В."},
                    { lesson: "Экономика", startTime: "10:10", endTime: "11:40", teacher: "Петров П.П."},
                      { lesson: "Физкультура", startTime: "12:00", endTime: "13:30", teacher: "Петров П.П."},
                       { lesson: "", startTime: "13:40", endTime: "15:10", teacher: ""},
                    { lesson: "", startTime: "15:20", endTime: "16:50", teacher: ""},
                      { lesson: "", startTime: "17:00", endTime: "18:30", teacher: ""},
                     { lesson: "", startTime: "18:40", endTime: "20:10", teacher: ""},
                 ],
                 "Пятница": [
                     { lesson: "Правоведение", startTime: "08:30", endTime: "10:00", teacher: "Ермолаева А.Н."},
                     { lesson: "Английский", startTime: "10:10", endTime: "11:40", teacher: "Ермолаева А.Н."},
                     { lesson: "Информатика", startTime: "12:00", endTime: "13:30", teacher: "Иванов И.И."},
                      { lesson: "", startTime: "13:40", endTime: "15:10", teacher: ""},
                    { lesson: "", startTime: "15:20", endTime: "16:50", teacher: ""},
                    { lesson: "", startTime: "17:00", endTime: "18:30", teacher: ""},
                     { lesson: "", startTime: "18:40", endTime: "20:10", teacher: ""},
                 ],
                 "Суббота": [
                      { lesson: "", startTime: "08:30", endTime: "10:00", teacher: ""},
                    { lesson: "", startTime: "10:10", endTime: "11:40", teacher: ""},
                     { lesson: "", startTime: "12:00", endTime: "13:30", teacher: ""},
                    { lesson: "", startTime: "13:40", endTime: "15:10", teacher: ""},
                    { lesson: "", startTime: "15:20", endTime: "16:50", teacher: ""},
                     { lesson: "", startTime: "17:00", endTime: "18:30", teacher: ""},
                     { lesson: "", startTime: "18:40", endTime: "20:10", teacher: ""},
                 ],
            },
              "ИВТ-23": {
                "Понедельник": [
                     { lesson: "Базы данных", startTime: "08:30", endTime: "10:00", teacher: "Сидорова А.В."},
                    { lesson: "Программирование", startTime: "10:10", endTime: "11:40", teacher: "Сидорова А.В."},
                    { lesson: "Физкультура", startTime: "12:00", endTime: "13:30", teacher: "Петров П.П."},
                       { lesson: "", startTime: "13:40", endTime: "15:10", teacher: ""},
                    { lesson: "", startTime: "15:20", endTime: "16:50", teacher: ""},
                    { lesson: "", startTime: "17:00", endTime: "18:30", teacher: ""},
                    { lesson: "", startTime: "18:40", endTime: "20:10", teacher: ""},
                ],
                 "Вторник": [
                   { lesson: "Информатика", startTime: "08:30", endTime: "10:00", teacher: "Иванов И.И."},
                     { lesson: "Математика", startTime: "10:10", endTime: "11:40", teacher: "Сидоров А.В."},
                     { lesson: "Физика", startTime: "12:00", endTime: "13:30", teacher: "Петров П.П."},
                     { lesson: "", startTime: "13:40", endTime: "15:10", teacher: ""},
                    { lesson: "", startTime: "15:20", endTime: "16:50", teacher: ""},
                    { lesson: "", startTime: "17:00", endTime: "18:30", teacher: ""},
                     { lesson: "", startTime: "18:40", endTime: "20:10", teacher: ""},

                ],
                "Среда": [
                     { lesson: "Экономика", startTime: "08:30", endTime: "10:00", teacher: "Петров П.П."},
                      { lesson: "Английский", startTime: "10:10", endTime: "11:40", teacher: "Ермолаева А.Н."},
                     { lesson: "Физкультура", startTime: "12:00", endTime: "13:30", teacher: "Петров П.П."},
                    { lesson: "", startTime: "13:40", endTime: "15:10", teacher: ""},
                    { lesson: "", startTime: "15:20", endTime: "16:50", teacher: ""},
                    { lesson: "", startTime: "17:00", endTime: "18:30", teacher: ""},
                    { lesson: "", startTime: "18:40", endTime: "20:10", teacher: ""},
                ],
                 "Четверг": [
                     { lesson: "Правоведение", startTime: "08:30", endTime: "10:00", teacher: "Ермолаева А.Н."},
                     { lesson: "Базы данных", startTime: "10:10", endTime: "11:40", teacher: "Сидорова А.В."},
                     { lesson: "Программирование", startTime: "12:00", endTime: "13:30", teacher: "Сидорова А.В."},
                       { lesson: "", startTime: "13:40", endTime: "15:10", teacher: ""},
                     { lesson: "", startTime: "15:20", endTime: "16:50", teacher: ""},
                    { lesson: "", startTime: "17:00", endTime: "18:30", teacher: ""},
                    { lesson: "", startTime: "18:40", endTime: "20:10", teacher: ""},
                 ],
                "Пятница": [
                     { lesson: "Математика", startTime: "08:30", endTime: "10:00", teacher: "Сидоров А.В."},
                    { lesson: "Информатика", startTime: "10:10", endTime: "11:40", teacher: "Иванов И.И."},
                     { lesson: "Физика", startTime: "12:00", endTime: "13:30", teacher: "Петров П.П."},
                    { lesson: "", startTime: "13:40", endTime: "15:10", teacher: ""},
                    { lesson: "", startTime: "15:20", endTime: "16:50", teacher: ""},
                     { lesson: "", startTime: "17:00", endTime: "18:30", teacher: ""},
                    { lesson: "", startTime: "18:40", endTime: "20:10", teacher: ""},
                 ],
                 "Суббота": [
                      { lesson: "", startTime: "08:30", endTime: "10:00", teacher: ""},
                    { lesson: "", startTime: "10:10", endTime: "11:40", teacher: ""},
                    { lesson: "", startTime: "12:00", endTime: "13:30", teacher: ""},
                      { lesson: "", startTime: "13:40", endTime: "15:10", teacher: ""},
                     { lesson: "", startTime: "15:20", endTime: "16:50", teacher: ""},
                    { lesson: "", startTime: "17:00", endTime: "18:30", teacher: ""},
                    { lesson: "", startTime: "18:40", endTime: "20:10", teacher: ""},
                 ],
            }
        };

    const daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
     const [searchType, setSearchType] = useState('group');


    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
          if (e.target.value.trim() !== "") {
              const isTeacherSearch = Object.values(scheduleData).some(schedule => {
                  return Object.values(schedule).some(daySchedule => {
                      return daySchedule.some(lesson =>
                          lesson.teacher?.toLowerCase().includes(e.target.value.toLowerCase()))
                  })
              });
              setSearchType(isTeacherSearch ? 'teacher' : 'group');
          } else {
              setSearchType('group');
          }
    };

      const renderSchedule = () => {
          if (!searchQuery || searchQuery.trim() === '')
           return <div className="no-schedule">Введите группу или преподавателя для поиска.</div>;


            const filteredSchedule = Object.entries(scheduleData).reduce((acc, [group, schedule]) => {
                daysOfWeek.forEach(day => {
                    schedule[day].forEach(lesson => {
                        const query = searchQuery.trim().toLowerCase();
                            const isGroupMatch = group.toLowerCase().includes(query);
                            const isTeacherMatch = lesson.teacher?.toLowerCase().includes(query);
                             if(isGroupMatch || isTeacherMatch){
                                    if (!acc[group]) {
                                        acc[group] = {};
                                    }
                                     if (!acc[group][day]) {
                                       acc[group][day] = [];
                                     }
                                  acc[group][day].push({
                                    ...lesson
                                    });
                              }
                        });
                   });
                return acc;
            }, {});

        return (
            <div className="days-grid">
                {daysOfWeek.map(day => (
                    <div key={day} className="day-schedule">
                        <h3 className="day-title">{day}</h3>
                         <div className="lessons-list">
                         {Object.entries(filteredSchedule).map(([group, schedule]) => {
                              const lessonsForDay = schedule[day] || [];

                              if (searchType === 'group'){
                                     return  lessonsForDay.map((lesson, index) => (
                                       <div key={`${group}-${day}-${index}`} className="lesson-card">
                                              <span className="lesson-number">{index + 1}. </span>
                                                  <span className="lesson-name">
                                                      {lesson.lesson}
                                                         {lesson.teacher &&
                                                             <span className="lesson-teacher">
                                                                ({lesson.teacher})
                                                            </span>
                                                       }
                                                  </span>
                                                  <span className="lesson-time">
                                                        {lesson.startTime} - {lesson.endTime}
                                                  </span>
                                          </div>
                                       ))
                              } else if (searchType === 'teacher') {
                               const uniqueGroups = new Set();
                                    Object.values(schedule).forEach(daySchedule => {
                                        daySchedule.forEach(lesson => {
                                            if (lesson.teacher?.toLowerCase().includes(searchQuery.trim().toLowerCase())){
                                                  uniqueGroups.add(group)
                                             }
                                      });
                                  })

                                   return  Array.from(uniqueGroups).map((groupName, index) =>
                                            lessonsForDay.map((lesson, indexLesson) =>
                                            lesson.teacher?.toLowerCase().includes(searchQuery.trim().toLowerCase()) ? (
                                                 <div key={`${group}-${day}-${indexLesson}`} className="lesson-card">
                                                     <span className="lesson-number">{indexLesson + 1}. </span>
                                                          <span className="lesson-name">
                                                               {lesson.lesson}
                                                                <span className="lesson-group">({groupName})</span>
                                                                {lesson.teacher &&
                                                                    <span className="lesson-teacher">
                                                                        ({lesson.teacher})
                                                                    </span>
                                                                }
                                                           </span>
                                                          <span className="lesson-time">
                                                                {lesson.startTime} - {lesson.endTime}
                                                            </span>
                                                 </div>
                                          ) : null
                                          )
                                       )
                                }

                            })}
                        </div>
                   </div>
                ))}
            </div>
        );
    };

    return (
        <div className="lessons-container">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Поиск по группе или преподавателю"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-input"
                />
            </div>
             {renderSchedule()}
        </div>
    );
};

export default Lessons;