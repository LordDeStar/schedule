import React, { useState } from 'react';
import '../styles/adminAccount.css';
import pdfIcon from '../images/pdf.png';
import wordIcon from '../images/word.png';

const AdminAccount = ({ onClose }) => {
    const adminData = {
        fullName: 'Александров Александр Александрович',
    };

     const [newTeacher, setNewTeacher] = useState({
        fullName: '',
        phoneNumber: '',
         subject: '',
        group: '',
        login: '',
        password: '',
    });
     const [teachers, setTeachers] = useState([]);
      const [selectedFile, setSelectedFile] = useState(null);
      const [uploadedFiles, setUploadedFiles] = useState([]);
    const groups = ['ИВТ-21', 'ИВТ-22', 'ПИ-21', 'ПИ-22', 'М-21', 'М-22'];
    const subjects = ['Математика', 'Физика', 'Информатика', 'Химия', 'Английский', 'История'];

    const handleInputChange = (e) => {
          const { name, value } = e.target;
        setNewTeacher({ ...newTeacher, [name]: value });
    };
   const handleFileChange = (event) => {
        const file = event.target.files[0];
      if (file && (file.type === 'application/pdf' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.type === 'application/msword')) {
            setSelectedFile(file);
        } else {
             setSelectedFile(null);
            alert("Неверный формат файла. Пожалуйста, выберите PDF или Word документ.");
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
    const handleAddTeacher = () => {
       if (newTeacher.fullName.trim() !== '' && newTeacher.phoneNumber.trim() !== '' &&
            newTeacher.subject.trim() !== '' && newTeacher.group.trim() !== '' &&
            newTeacher.login.trim() !== '' && newTeacher.password.trim() !== '') {
            setTeachers([...teachers, { ...newTeacher }]);
             setNewTeacher({
                 fullName: '',
                 phoneNumber: '',
                 subject: '',
                 group: '',
                 login: '',
                 password: '',
             });
        }
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
                    <label className="input-label">ФИО преподавателя:</label>
                    <input
                        type="text"
                        name="fullName"
                        value={newTeacher.fullName}
                        onChange={handleInputChange}
                       className="admin-input"
                    />
                 </div>
                 <div className="input-group">
                    <label className="input-label">Номер телефона:</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={newTeacher.phoneNumber}
                         onChange={handleInputChange}
                       className="admin-input"
                    />
                </div>
                <div className="input-group">
                    <label className="input-label">Предмет:</label>
                     <select
                         name="subject"
                         value={newTeacher.subject}
                         onChange={handleInputChange}
                         className="admin-select"
                    >
                         <option value="" disabled>Выберите предмет</option>
                          {subjects.map((subject) => (
                                <option key={subject} value={subject}>
                                   {subject}
                               </option>
                           ))}
                   </select>
                </div>
                <div className="input-group">
                    <label className="input-label">Кураторская группа:</label>
                     <select
                         name="group"
                        value={newTeacher.group}
                        onChange={handleInputChange}
                         className="admin-select"
                    >
                        <option value="" disabled>Выберите группу</option>
                          {groups.map((group) => (
                                <option key={group} value={group}>
                                   {group}
                                </option>
                           ))}
                    </select>
               </div>
                 <div className="input-group">
                    <label className="input-label">Логин преподавателя:</label>
                    <input
                        type="text"
                        name="login"
                        value={newTeacher.login}
                         onChange={handleInputChange}
                        className="admin-input"
                   />
                </div>
                <div className="input-group">
                   <label className="input-label">Пароль преподавателя:</label>
                    <input
                        type="password"
                        name="password"
                         value={newTeacher.password}
                         onChange={handleInputChange}
                       className="admin-input"
                    />
                 </div>
                 <button className="add-button" onClick={handleAddTeacher}>Добавить преподавателя</button>
           </div>
               {teachers.length > 0 && (
                   <div className="teachers-list">
                        <h3 className="list-title">Зарегистрированные преподаватели</h3>
                      <div className="teachers-cards">
                           {teachers.map((teacher, index) => (
                               <div key={index} className="teacher-card">
                                  <span className="teacher-name">{teacher.fullName}</span>
                                    <div className="teacher-info-card">
                                         <span className="teacher-item-label">Группа:</span>
                                         <span className="teacher-item-value">{teacher.group}</span>
                                     </div>
                                   <div className="teacher-info-card">
                                       <span className="teacher-item-label">Предмет:</span>
                                        <span className="teacher-item-value">{teacher.subject}</span>
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
                        {selectedFile ? selectedFile.name : "Выберите файл расписания"}
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
                <button className="exit-button" onClick={onClose}>Выйти из личного кабинета</button>
           </div>
        </div>
    );
};

export default AdminAccount;