import React, { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Логика регистрации
        console.log('Регистрация:', { username, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Имя пользователя:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Пароль:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
};

export default Register;
