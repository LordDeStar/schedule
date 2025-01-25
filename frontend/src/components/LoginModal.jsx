import React, { useState, useContext } from 'react';
import '../styles/loginModal.css';
import { observer } from 'mobx-react-lite';
import { UserContext } from '../stores';

const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const userStore = useContext(UserContext);

    const handleStudentLogin = async () => {
        await userStore.loginAsStudent(login, password);
        userStore.setRole("student");
        onLoginSuccess();
        onClose();
    };

    const handleTeacherLogin = async () => {
        await userStore.loginAsTeacher(login, password);
        if (userStore.currentUser.subject.title_subject === "admin") {
            userStore.setRole("admin");
        }
        else {
            userStore.setRole("teacher");
        }
        onLoginSuccess();
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <h2 className="modal-title">Вход в личный кабинет</h2>
                <div className="input-group">
                    <label className="input-label">Логин:</label>
                    <input
                        type="text"
                        className="modal-input"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label className="input-label">Пароль:</label>
                    <input
                        type="password"
                        className="modal-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="button-group">
                    <button className="modal-button student-button" onClick={handleStudentLogin}>
                        Войти как студент
                    </button>
                    <button className="modal-button teacher-button" onClick={handleTeacherLogin}>
                        Войти как преподаватель
                    </button>
                    <button className="modal-button cancel-button" onClick={onClose}>
                        Отмена
                    </button>
                </div>
            </div>
        </div>
    );
};

export default observer(LoginModal);