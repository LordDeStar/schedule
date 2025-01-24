import React, { useState } from 'react';
import '../styles/lessons.css';

const Lessons = () => {
  const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const initialSchedule = {
    'ИВТ-21': {
      Понедельник: [
        { lesson: 'Математика', teacher: 'Иванов И.И.', startTime: '9:00', endTime: '10:30', cabinet: '201' },
        { lesson: 'Физика', teacher: 'Петрова А.С.', startTime: '10:40', endTime: '12:10', cabinet: '202' },
      ],
      Вторник: [
        { lesson: 'Информатика', teacher: 'Смирнов Д.А.', startTime: '9:00', endTime: '10:30', cabinet: '301' },
        { lesson: 'Химия', teacher: 'Кузнецова Е.В.', startTime: '10:40', endTime: '12:10', cabinet: '302' },
      ],
        Среда: [
            { lesson: 'Английский', teacher: 'Александрова О.М.', startTime: '9:00', endTime: '10:30', cabinet: '401' },
          { lesson: 'История', teacher: 'Соколов М.И.', startTime: '10:40', endTime: '12:10', cabinet: '402' },
          ],
          Четверг: [
            { lesson: 'Английский', teacher: 'Александрова О.М.', startTime: '9:00', endTime: '10:30', cabinet: '401' },
          { lesson: 'История', teacher: 'Соколов М.И.', startTime: '10:40', endTime: '12:10', cabinet: '402' },
          ],
          Пятница: [
            { lesson: 'Английский', teacher: 'Александрова О.М.', startTime: '9:00', endTime: '10:30', cabinet: '401' },
          { lesson: 'История', teacher: 'Соколов М.И.', startTime: '10:40', endTime: '12:10', cabinet: '402' },
          ],
          Суббота: [
            { lesson: 'Английский', teacher: 'Александрова О.М.', startTime: '9:00', endTime: '10:30', cabinet: '401' },
          { lesson: 'История', teacher: 'Соколов М.И.', startTime: '10:40', endTime: '12:10', cabinet: '402' },
          ],
    },
    'ПИ-21': {
      Понедельник: [
        { lesson: 'Основы программирования', teacher: 'Сидоров А.В.', startTime: '9:00', endTime: '10:30', cabinet: '203' },
        { lesson: 'Дискретная математика', teacher: 'Козлов П.И.', startTime: '10:40', endTime: '12:10', cabinet: '204' },
      ],
      Вторник: [
          { lesson: 'Базы данных', teacher: 'Попова И.С.', startTime: '9:00', endTime: '10:30', cabinet: '303' },
        { lesson: 'Архитектура компьютеров', teacher: 'Николаев М.С.', startTime: '10:40', endTime: '12:10', cabinet: '304' },
      ],
        Среда: [
          { lesson: 'Веб-технологии', teacher: 'Морозов С.А.', startTime: '9:00', endTime: '10:30', cabinet: '403' },
          { lesson: 'Программирование на Python', teacher: 'Белов А.П.', startTime: '10:40', endTime: '12:10', cabinet: '404' },
      ]
    },
    'М-21': {
        Понедельник: [
          { lesson: 'Математический анализ', teacher: 'Егоров В.М.', startTime: '9:00', endTime: '10:30', cabinet: '205' },
           { lesson: 'Линейная алгебра', teacher: 'Зайцев С.Н.', startTime: '10:40', endTime: '12:10', cabinet: '206' },
        ],
        Вторник: [
           { lesson: 'Теория вероятностей', teacher: 'Иванова Е.С.', startTime: '9:00', endTime: '10:30', cabinet: '305' },
           { lesson: 'Дифференциальные уравнения', teacher: 'Петров А.А.', startTime: '10:40', endTime: '12:10', cabinet: '306' },
        ],
        Среда: [
           { lesson: 'Физика', teacher: 'Королева О.В.', startTime: '9:00', endTime: '10:30', cabinet: '405' },
           { lesson: 'Механика', teacher: 'Сидоров В.Н.', startTime: '10:40', endTime: '12:10', cabinet: '406' },
        ]
    },
    'ИВТ-22': {
         Понедельник: [
          { lesson: 'Алгоритмы и структуры данных', teacher: 'Ковальчук О.В.', startTime: '9:00', endTime: '10:30', cabinet: '207' },
          { lesson: 'Программирование на C++', teacher: 'Лебедев И.М.', startTime: '10:40', endTime: '12:10', cabinet: '208' },
        ],
         Вторник: [
           { lesson: 'Операционные системы', teacher: 'Павлов Д.А.', startTime: '9:00', endTime: '10:30', cabinet: '307' },
           { lesson: 'Компьютерные сети', teacher: 'Федоров А.С.', startTime: '10:40', endTime: '12:10', cabinet: '308' },
        ],
        Среда: [
           { lesson: 'Основы веб-разработки', teacher: 'Соловьева Е.М.', startTime: '9:00', endTime: '10:30', cabinet: '407' },
           { lesson: 'Тестирование программного обеспечения', teacher: 'Григорьев С.В.', startTime: '10:40', endTime: '12:10', cabinet: '408' },
        ]
    },
      'ПИ-22': {
           Понедельник: [
               { lesson: 'Основы искусственного интеллекта', teacher: 'Семенова Т.П.', startTime: '9:00', endTime: '10:30', cabinet: '209' },
               { lesson: 'Машинное обучение', teacher: 'Беляева А.И.', startTime: '10:40', endTime: '12:10', cabinet: '210' },
           ],
          Вторник: [
              { lesson: 'Разработка мобильных приложений', teacher: 'Андреев И.А.', startTime: '9:00', endTime: '10:30', cabinet: '309' },
              { lesson: 'Облачные вычисления', teacher: 'Кудрявцев М.В.', startTime: '10:40', endTime: '12:10', cabinet: '310' },
           ],
           Среда: [
               { lesson: 'Системы управления контентом', teacher: 'Никитина С.С.', startTime: '9:00', endTime: '10:30', cabinet: '409' },
                { lesson: 'Дизайн интерфейсов', teacher: 'Васильева Е.П.', startTime: '10:40', endTime: '12:10', cabinet: '410' },
            ]
      },
    'М-22': {
        Понедельник: [
           { lesson: 'Функциональный анализ', teacher: 'Морозова Л.П.', startTime: '9:00', endTime: '10:30', cabinet: '211' },
           { lesson: 'Уравнения с частными производными', teacher: 'Романов А.М.', startTime: '10:40', endTime: '12:10', cabinet: '212' },
        ],
       Вторник: [
           { lesson: 'Методы оптимизации', teacher: 'Панов С.В.', startTime: '9:00', endTime: '10:30', cabinet: '311' },
           { lesson: 'Теория графов', teacher: 'Степанова Е.Н.', startTime: '10:40', endTime: '12:10', cabinet: '312' },
        ],
        Среда: [
           { lesson: 'Математическая статистика', teacher: 'Лебедева О.И.', startTime: '9:00', endTime: '10:30', cabinet: '411' },
          { lesson: 'Численные методы', teacher: 'Поляков А.В.', startTime: '10:40', endTime: '12:10', cabinet: '412' },
        ]
    }
  };
  const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('group');
    const filteredSchedule = Object.fromEntries(
            Object.entries(initialSchedule).filter(([group, schedule]) => {
              if (searchQuery.trim() === "") return true;
                if (searchType === 'group')
                     return group.toLowerCase().includes(searchQuery.trim().toLowerCase());
               return  Object.values(schedule).some(daySchedule =>
                    daySchedule.some(lesson =>
                        lesson.teacher?.toLowerCase().includes(searchQuery.trim().toLowerCase())
                    )
                )
            })
        );
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
  };
   const handleTypeChange = (e) => {
     setSearchType(e.target.value);
  };

  return (
    <div className="schedule-container">
      <div className="schedule-header">
        <h2 className="main-title">Расписание занятий</h2>
          <div className="search-container">
            <label className="search-label">Поиск:</label>
             <select
                    className="search-select"
                    value={searchType}
                   onChange={handleTypeChange}
                  >
                      <option value="group">По группе</option>
                     <option value="teacher">По преподавателю</option>
            </select>
           <input
               type="text"
                className="search-input"
               placeholder={`Введите ${searchType === 'group' ? 'группу' : 'преподавателя'}`}
                 value={searchQuery}
               onChange={handleSearchChange}
             />
        </div>
       </div>
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
                                   <span className="lesson-cabinet">
                                      {lesson.cabinet}
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
                       return Array.from(uniqueGroups).map((groupName, index) =>
                                    lessonsForDay.map((lesson, indexLesson) =>
                                            {
                                                if (lesson.teacher?.toLowerCase().includes(searchQuery.trim().toLowerCase())){
                                                     return   (
                                                            <div key={`${groupName}-${day}-${indexLesson}`} className="lesson-card">
                                                                 <span className="lesson-number">{indexLesson + 1}. </span>
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
                                                                 <span className="lesson-cabinet">
                                                                    {lesson.cabinet}
                                                                  </span>
                                                            </div>
                                                        )
                                                }
                                            }
                                    )
                         )
                      }
                  return null;
                 })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Lessons;