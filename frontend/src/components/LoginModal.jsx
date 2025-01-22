import React, { useState } from 'react';
import '../styles/loginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Здесь можно добавить логику аутентификации
        console.log("Login:", login);
        console.log("Password:", password);
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
                    <button className="modal-button login-button" onClick={handleLogin}>
                        Войти
                    </button>
                    <button className="modal-button cancel-button" onClick={onClose}>
                        Отмена
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;