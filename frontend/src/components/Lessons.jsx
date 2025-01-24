import React, { useState, useContext, useEffect } from 'react';
import '../styles/lessons.css';
import { ScheduleContext } from '../stores';
import { observer } from 'mobx-react-lite';

const Lessons = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const [searchType, setSearchType] = useState('group');

    // Используем контекст для доступа к стору
    const scheduleStore = useContext(ScheduleContext);

    // Эффект для выполнения поиска при изменении searchQuery
    useEffect(() => {
        if (searchQuery.trim() !== '') {
            scheduleStore.getSchedule(searchQuery);
        }
    }, [searchQuery]);

    // Обработчик изменения поискового запроса
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.trim() !== "") {
            const isTeacherSearch = scheduleStore.schedule?.some(lesson => {
                const teacherName = `${lesson.teacher.surname_teacher} ${lesson.teacher.name_teacher} ${lesson.teacher.patronymic_teacher}`;
                return teacherName.toLowerCase().includes(query.toLowerCase());
            });
            setSearchType(isTeacherSearch ? 'teacher' : 'group');
        } else {
            setSearchType('group');
        }
    };
    const formatTime = (date) => {
        const hours = String(date.getHours()).padStart(2, '0'); // Добавляем ведущий ноль, если нужно
        const minutes = String(date.getMinutes()).padStart(2, '0'); // Добавляем ведущий ноль, если нужно
        return `${hours}:${minutes}`;
    };
    // Рендеринг расписания
    const renderSchedule = () => {
        if (!scheduleStore.schedule || scheduleStore.schedule.length === 0) {
            return <div className="no-schedule">Расписание не найдено.</div>;
        }

        const filteredSchedule = scheduleStore.schedule.reduce((acc, lesson) => {
            const teacherName = `${lesson.teacher.surname_teacher} ${lesson.teacher.name_teacher} ${lesson.teacher.patronymic_teacher}`;
            const groupName = lesson.group.title_class;
            const day = daysOfWeek[lesson.id_day - 1]; // Преобразуем id_day в день недели

            const query = searchQuery.trim().toLowerCase();
            const isGroupMatch = groupName.toLowerCase().includes(query);
            const isTeacherMatch = teacherName.toLowerCase().includes(query);

            if (isGroupMatch || isTeacherMatch) {
                if (!acc[groupName]) {
                    acc[groupName] = {};
                }
                if (!acc[groupName][day]) {
                    acc[groupName][day] = [];
                }
                let timeStart = new Date(lesson.time_lesson_start);
                let timeEnd = new Date(lesson.time_lesson_end);
                acc[groupName][day].push({
                    lesson: lesson.subject.title_subject,
                    teacher: teacherName,
                    startTime: formatTime(timeStart),
                    endTime: formatTime(timeEnd),
                    classroom: lesson.classroom_title,
                });
            }
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

                                if (searchType === 'group') {
                                    return lessonsForDay.map((lesson, index) => (
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
                                            <span className="lesson-classroom">
                                                {lesson.classroom}
                                            </span>
                                        </div>
                                    ));
                                } else if (searchType === 'teacher') {
                                    const uniqueGroups = new Set();
                                    Object.values(schedule).forEach(daySchedule => {
                                        daySchedule.forEach(lesson => {
                                            if (lesson.teacher.toLowerCase().includes(searchQuery.trim().toLowerCase())) {
                                                uniqueGroups.add(group);
                                            }
                                        });
                                    });

                                    return Array.from(uniqueGroups).map((groupName, index) =>
                                        lessonsForDay.map((lesson, indexLesson) =>
                                            lesson.teacher.toLowerCase().includes(searchQuery.trim().toLowerCase()) ? (
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
                                                    <span className="lesson-classroom">
                                                        {lesson.classroom}
                                                    </span>
                                                </div>
                                            ) : null
                                        )
                                    );
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
            {scheduleStore.isLoading ? (
                <div>Загрузка...</div>
            ) : scheduleStore.error ? (
                <div>Ошибка: {scheduleStore.error}</div>
            ) : (
                renderSchedule()
            )}
        </div>
    );
};

export default observer(Lessons);