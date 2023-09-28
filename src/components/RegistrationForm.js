import React, { useState, useEffect } from 'react';
import intlTelInput from 'intl-tel-input';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'intl-tel-input/build/css/intlTelInput.min.css';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [phone, setPhone] = useState('');
    const [edrpou, setEdrpou] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Собираем данные из формы
        const formData = {
            username,
            company_name: companyName,
            phone,
            edrpou,
            email,
            password,
        };

        // Отправляем данные на сервер WordPress
        const response = await fetch('http://localhost/urochishe-zhuravske/wp-json/custom/v1/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });


        if (response.ok) {
            // Успешно зарегистрировано, выполните действия по вашему выбору (например, перенаправление на другую страницу).
            window.location.href = 'http://localhost/urochishe-zhuravske/user/'; 
        } else {
            // Обработка ошибок
            setErrorMessage('Пользователь с таким Email адресом уже существует.');
        }
    };

    // Инициализируем intl-tel-input
    useEffect(() => {
        const phoneInput = document.querySelector('#phone');
        intlTelInput(phoneInput, {
            initialCountry: 'ua', // Начальная страна (Украина)
        });
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2>Форма регистрации</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Имя пользователя:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="companyName" className="form-label">Название компании:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="companyName"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Номер телефона:</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                value={phone}
                                onChange={handlePhoneChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="edrpou" className="form-label">Код ЕДРПОУ:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="edrpou"
                                value={edrpou}
                                onChange={(e) => setEdrpou(e.target.value)}
                                minLength="8"
                                maxLength="10"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Почта:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Пароль:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="text-danger">{errorMessage}</div>
                        <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
