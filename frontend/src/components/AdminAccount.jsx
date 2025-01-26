import React, { useState, useContext, useEffect } from 'react';
import '../styles/adminAccount.css';
import pdfIcon from '../images/pdf.png';
import wordIcon from '../images/word.png';
import { SubjectsContext, GroupContext } from '../stores'; // Импортируем стор для предметов и групп
import { observer } from 'mobx-react-lite';

const AdminAccount = ({ onClose }) => {
    const adminData = {
        fullName: 'Александров Александр Александрович',
    };

    const [newTeacher, setNewTeacher] = useState({
        login: '',
        password: '',
        name: '',
        surname: '',
        patronymic: '',
        phone: '',
        email: '',
        telegram: '',
        subject: '', // Предмет вводится текстом
        group: '', // Новое поле для группы
    });
    const [teachers, setTeachers] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const subjectsStore = useContext(SubjectsContext); // Используем стор для предметов
    const groupsStore = useContext(GroupContext); // Используем стор для групп

    // Загружаем предметы и группы при монтировании компонента
    useEffect(() => {
        subjectsStore.loadSubjects();
        groupsStore.loadGroups();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const cleanedValue = value.replace(/['"]+/g, '');
        setNewTeacher({ ...newTeacher, [name]: cleanedValue });
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && (file.type === 'application/pdf' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.type === 'application/msword')) {
            setSelectedFile(file);
        } else {
            setSelectedFile(null);
            alert('Неверный формат файла. Пожалуйста, выберите PDF или Word документ.');
        }
    };

    const handleUpload = () => {
        if (selectedFile) {
            setUploadedFiles([...uploadedFiles, selectedFile]);
            setSelectedFile(null);
            document.getElementById('fileInput').value = '';
        }
    };

    const handleOpenFile = (file) => {
        const url = URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = url;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const renderFileIcon = (fileType) => {
        if (fileType === 'application/pdf') {
            return <img src={pdfIcon} alt="PDF Icon" className="file-icon" />;
        } else if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || fileType === 'application/msword') {
            return <img src={wordIcon} alt="Word Icon" className="file-icon" />;
        }
        return null;
    };

    const handleAddTeacher = async () => {
        const { login, password, name, surname, patronymic, phone, email, telegram, subject, group } = newTeacher;

        if (!login || !password || !name || !surname || !patronymic || !phone || !subject) {
            alert('Пожалуйста, заполните все поля. Пустыми могут быть только почта, телеграм и группа.');
            return;
        }
        const cleanedSubject = subject.replace(/['"]+/g, '');

        const subjectExists = subjectsStore.subjects.some(
            (subj) => subj.title_subject.toLowerCase() === cleanedSubject.toLowerCase()
        );
        if (!subjectExists) {
            await subjectsStore.addNewSubject(cleanedSubject);
        }
        const groupExists = groupsStore.groups.some(
            (gr) => gr.title_class.toLowerCase() === group.toLocaleLowerCase()
        );
        if (!groupExists) {
            await groupsStore.addNewGroup(group);
        }
        setTeachers([...teachers, { ...newTeacher }]);
        setNewTeacher({
            login: '',
            password: '',
            name: '',
            surname: '',
            patronymic: '',
            phone: '',
            email: '',
            telegram: '',
            subject: '',
            group: '',
        });
    };

    return (
        <div className="admin-account-container">
            <div className="admin-info">
                <h2 className="main-title">Личный кабинет администратора</h2>
                <div className="info-item">
                    <span className="info-label">ФИО:</span>
                    <span className="info-value">{adminData.fullName}</span>
                </div>
            </div>
            <div className="add-teacher-form">
                <h3 className="form-title">Добавить преподавателя в систему</h3>
                <div className="input-group">
                    <label className="input-label">Логин:</label>
                    <input
                        type="text"
                        name="login"
                        value={newTeacher.login}
                        onChange={handleInputChange}
                        className="admin-input"
                    />
                </div>
                <div className="input-group">
                    <label className="input-label">Пароль:</label>
                    <input
                        type="password"
                        name="password"
                        value={newTeacher.password}
                        onChange={handleInputChange}
                        className="admin-input"
                    />
                </div>
                <div className="input-group">
                    <label className="input-label">Имя:</label>
                    <input
                        type="text"
                        name="name"
                        value={newTeacher.name}
                        onChange={handleInputChange}
                        className="admin-input"
                    />
                </div>
                <div className="input-group">
                    <label className="input-label">Фамилия:</label>
                    <input
                        type="text"
                        name="surname"
                        value={newTeacher.surname}
                        onChange={handleInputChange}
                        className="admin-input"
                    />
                </div>
                <div className="input-group">
                    <label className="input-label">Отчество:</label>
                    <input
                        type="text"
                        name="patronymic"
                        value={newTeacher.patronymic}
                        onChange={handleInputChange}
                        className="admin-input"
                    />
                </div>
                <div className="input-group">
                    <label className="input-label">Телефон:</label>
                    <input
                        type="text"
                        name="phone"
                        value={newTeacher.phone}
                        onChange={handleInputChange}
                        className="admin-input"
                    />
                </div>
                <div className="input-group">
                    <label className="input-label">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={newTeacher.email}
                        onChange={handleInputChange}
                        className="admin-input"
                    />
                </div>
                <div className="input-group">
                    <label className="input-label">Telegram:</label>
                    <input
                        type="text"
                        name="telegram"
                        value={newTeacher.telegram}
                        onChange={handleInputChange}
                        className="admin-input"
                    />
                </div>
                <div className="input-group">
                    <label className="input-label">Предмет:</label>
                    <input
                        type="text"
                        name="subject"
                        value={newTeacher.subject}
                        onChange={handleInputChange}
                        className="admin-input"
                    />
                </div>
                <div className="input-group">
                    <label className="input-label">Группа:</label>
                    <input
                        type="text"
                        name="group"
                        value={newTeacher.group}
                        onChange={handleInputChange}
                        className="admin-input"
                    />
                </div>
                <button className="add-button" onClick={handleAddTeacher}>
                    Добавить преподавателя
                </button>
            </div>
            {teachers.length > 0 && (
                <div className="teachers-list">
                    <h3 className="list-title">Зарегистрированные преподаватели</h3>
                    <div className="teachers-cards">
                        {teachers.map((teacher, index) => (
                            <div key={index} className="teacher-card">
                                <span className="teacher-name">{`${teacher.surname} ${teacher.name} ${teacher.patronymic}`}</span>
                                <div className="teacher-info-card">
                                    <span className="teacher-item-label">Телефон:</span>
                                    <span className="teacher-item-value">{teacher.phone}</span>
                                </div>
                                <div className="teacher-info-card">
                                    <span className="teacher-item-label">Email:</span>
                                    <span className="teacher-item-value">{teacher.email}</span>
                                </div>
                                <div className="teacher-info-card">
                                    <span className="teacher-item-label">Telegram:</span>
                                    <span className="teacher-item-value">{teacher.telegram}</span>
                                </div>
                                <div className="teacher-info-card">
                                    <span className="teacher-item-label">Предмет:</span>
                                    <span className="teacher-item-value">{teacher.subject}</span>
                                </div>
                                <div className="teacher-info-card">
                                    <span className="teacher-item-label">Группа:</span>
                                    <span className="teacher-item-value">{teacher.group}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className="upload-schedule-section">
                <h3 className="upload-schedule-title">Загрузить расписание</h3>
                <div className="upload-section">
                    <label htmlFor="fileInput" className="upload-label">
                        {selectedFile ? selectedFile.name : 'Выберите файл расписания'}
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        onChange={handleFileChange}
                        className="file-input"
                    />
                    <button
                        onClick={handleUpload}
                        className="upload-button"
                        disabled={!selectedFile}
                    >
                        Загрузить
                    </button>
                </div>
                <div className="file-list">
                    {uploadedFiles.map((file, index) => (
                        <div key={index} className="file-item" onClick={() => handleOpenFile(file)}>
                            {renderFileIcon(file.type)}
                            <span className="file-name">{file.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="button-group">
                <button className="exit-button" onClick={onClose}>
                    Выйти из личного кабинета
                </button>
            </div>
        </div>
    );
};

export default observer(AdminAccount);