import React, { Component } from 'react';
// import intlTelInput from 'intl-tel-input';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'intl-tel-input/build/css/intlTelInput.min.css';
import './UserPanel.css';


// компания ТОВ “Урочище Журавське”
const companyOne = [
    { id: 'Dobryva', label: 'Добрива' },
    { id: 'Nasinnya', label: 'Насіння' },
    { id: 'Zasoby-zakhystu-roslyn', label: 'Засоби захисту рослин' },
    { id: 'Elektroenerhiya', label: 'Електроенергія' },
    { id: 'Haz', label: 'Газ' },
    { id: 'PMM', label: 'ПММ' },
    { id: 'Kantselyarski-tovary', label: 'Канцелярські товари' },
    { id: 'Hospodarski-tovary', label: 'Господарські товари' },
    { id: 'Budivelni-materialy', label: 'Будівельні матеріали' },
    { id: 'Inshe', label: 'Інше' },
];

// компания ТОВ “Вел Груп”
const companyTwo = [
    { id: 'Haz', label: 'Газ' },
    { id: 'PMM', label: 'ПММ' },
    { id: 'Kantselyarski-tovary', label: 'Канцелярські товари' },
    { id: 'Hospodarski-tovary', label: 'Господарські товари' },
    { id: 'Budivelni-materialy', label: 'Будівельні матеріали' },
    { id: 'Inshe', label: 'Інше' },
];

// компания ТОВ “Мовер Міл”
const companyThree = [
    { id: 'Nytky', label: 'Нитки' },
    { id: 'Etyketky_birky', label: 'Етикетки, бірки' },
    { id: 'Mishky_Bih-behy_laynerbehy', label: 'Мішки, Біг-беги, лайнербеги' },
    { id: 'Sylikahel', label: 'Силікагель' },
    { id: 'Kantselyarski-tovary', label: 'Канцелярські товари' },
    { id: 'Hospodarski-tovary', label: 'Господарські товари' },
    { id: 'Budivelni-materialy', label: 'Будівельні матеріали' },
    { id: 'Inshe', label: 'Інше' },
];

const cardData = [
    {
        id: 1,
        title: "ТОВ Пепсі",
        description: "Тут знаходиться опис, який я залишив",
        categody: [
            'Добрива',
            'Насіння',
            'Електроенергія',
        ]
    },
    {
        id: 2,
        title: "ТОВ Кокакола",
        description: "",
        categody: [
            'Насіння',
            'Засоби захисту рослин',
        ]
    },
    {
        id: 3,
        title: "ТОВ Спрайт",
        description: "Вище опису немає, але він є тут",
        categody: [
            'Газ',
            'ПММ',
            'Будівельні матеріали',
        ]
    },
];

class UserPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeBlock: 1, // Изначально активным будет первый блок
            activeTab: 0, // Изначально активной будет первая вкладка
            selectedCategories: {},
        };
    }

    toggleBlock = (blockNumber) => {
        this.setState({ activeBlock: blockNumber });
    };

    // Обработчик клика на вкладке
    handleTabClick = (index) => {
        this.setState({ activeTab: index });
    };

    handleCheckboxChange = (categoryId) => {
        const { selectedCategories } = this.state;
        this.setState({
            selectedCategories: {
                ...selectedCategories,
                [categoryId]: !selectedCategories[categoryId]
            }
        });
    };

    render() {
        const { activeBlock, activeTab, selectedCategories } = this.state;

        return (
            <div className='container-xxl d-flex pt-2 pb-2'>
                <div className='user-panel panel-style me-2'>
                    <h2 className='user-company'>Товер Міл</h2>

                    <button onClick={() => this.toggleBlock(1)} type="button" className={`btn my-2 main-btn fs-4 ${activeBlock === 1 ? 'active' : ''}`}>Залишити пропозицію</button>
                    <button onClick={() => this.toggleBlock(2)} type="button" className={`btn my-2 ${activeBlock === 2 ? 'active' : ''}`}>Мої пропозиції</button>
                    <button onClick={() => this.toggleBlock(3)} type="button" className={`btn my-2 ${activeBlock === 3 ? 'active' : ''}`}>Налаштування</button>
                    <button onClick={() => this.toggleBlock(4)} type="button" className={`btn my-2 ${activeBlock === 4 ? 'active' : ''}`}>Зв'язатись з нами</button>
                </div>
                <div className='panel panel-style ms-2'>
                    {activeBlock === 1 && (
                        <div>
                            {/* Ваша пропозиція*/}
                            <h2 className='mb-4'>Ваша пропозиція</h2>

                            <ul className="nav nav-tabs mb-4">
                                {['ТОВ “Урочище Журавське”', 'ТОВ “Вел Груп”', 'ТОВ “Мовер Міл”'].map((label, index) => (
                                    <li className="nav-item" key={index}>
                                        <button
                                            className={`nav-link ${index === activeTab ? 'active' : ''}`}
                                            onClick={() => this.handleTabClick(index)} // Вызываем обработчик клика
                                        >
                                            {label}
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            <div className="tab-content">
                                {[companyOne, companyTwo, companyThree].map((company, companyIndex) => (
                                    <div key={companyIndex} className={`tab-pane ${activeTab === companyIndex ? 'active' : ''}`}>
                                        <form>
                                            <div className='input-check-list'>
                                                {company.map((category) => (
                                                    <div key={category.id} className='input-check-element my-3 d-flex align-items-center'>
                                                        <input
                                                            className="form-check-input me-2"
                                                            type="checkbox"
                                                            value=""
                                                            checked={selectedCategories[category.id]}
                                                            onChange={() => this.handleCheckboxChange(category.id)}
                                                        />
                                                        <label className="form-check-label">{category.label}</label>
                                                        <input
                                                            className="form-control ms-auto"
                                                            type="file"
                                                            value=""
                                                            disabled={!selectedCategories[category.id]}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                            <div className='mb-3'>
                                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Опишіть вашу пропозицію</label>
                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                            <button type="submit" className="btn green-btn">Зберегти</button>
                                        </form>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {activeBlock === 2 && (
                        <div>
                            {/* Список ваших пропозицій*/}
                            <h2 className='mb-4'>Ваші пропозиції</h2>

                            <div className='card-group'>
                                {cardData.map((card) => (
                                    <div key={card.id} className="card-item panel-style my-2">
                                        <div className='card-btn border'>
                                            <dutton className="btn"><i class="bi bi-pencil-square"></i></dutton>
                                            <dutton className="btn bg-danger"><i class="bi bi-trash"></i></dutton>
                                        </div>
                                        <h3>{card.title}</h3>
                                        <div className='category-wrapper mb-4'>
                                            <p className='category-title'>Категорії, які ви обрали:</p>
                                            {card.categody && card.categody.length > 0 ? (
                                                card.categody.map((category, index) => (
                                                    <span key={index} className='badge bg-secondary me-1'>{category}</span>
                                                ))
                                            ) : null}
                                        </div>
                                        <p className="d-inline-flex gap-1">
                                            <button className="btn mb-2" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${card.id}`} aria-expanded="false" aria-controls={`collapseExample${card.id}`}>
                                                Опис
                                            </button>
                                        </p>
                                        {card.description ? (
                                            <div className="collapse" id={`collapseExample${card.id}`}>
                                                <div className="card card-body">
                                                    {card.description}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="collapse" id={`collapseExample${card.id}`}>
                                                <div className="card card-body card-false">
                                                    Схоже, ви не додали опис...
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            {/* Тут блоки з пропозиціями */}
                        </div>
                    )}
                    {activeBlock === 3 && (
                        <div>
                            <h2 className='mb-4'>Ваші данні</h2>
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputName1" class="form-label">Ваше ім'я</label>
                                    <input type="text" class="form-control" id="exampleInputName1" value="Олександр" aria-describedby="nameHelp" disabled readonly />
                                    <div id="nameHelp" class="form-text">Якщо ви хочете змінити своє ім'я, натисніть на кнопку редакту в кінці поля.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputNameCompany1" class="form-label">Назва вашої компанії</label>
                                    <input type="text" class="form-control" id="exampleInputNameCompany1" value="ТОВ Пепсі" aria-describedby="nameCompanyHelp" disabled readonly />
                                    <div id="nameCompanyHelp" class="form-text">Якщо ви хочете змінити назву вашої компанії, натисніть на кнопку редакту в кінці поля.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputTelephone1" class="form-label">Номер телефону</label>
                                    <input type="tel" class="form-control" id="exampleInputTelephone1" value="+380999999999" aria-describedby="telephoneHelp" disabled readonly />
                                    <div id="telephoneHelp" class="form-text">Якщо ви хочете змінити номер телефону, натисніть на кнопку редакту в кінці поля.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEdrpou1" class="form-label">Ваш код ЄДРПОУ</label>
                                    <input type="tel" class="form-control" id="exampleInputEdrpou1" value="1234567890" aria-describedby="edrpouHelp" disabled readonly />
                                    <div id="edrpouHelp" class="form-text">Якщо ви хочете змінити свій код ЄДРПОУ, натисніть на кнопку редакту в кінці поля.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Ваша Email адреса</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" value="test@gmail.com" aria-describedby="emailHelp" disabled readonly />
                                    <div id="emailHelp" class="form-text">Якщо ви хочете змінити свою пошту, натисніть на кнопку редакту в кінці поля.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Ваш пароль</label>
                                    <input type="password" class="form-control" value="1234567890" id="exampleInputPassword1" disabled readonly />
                                    <div id="emailHelp" class="form-text">Якщо ви хочете змінити свою пошту, натисніть на кнопку редакту в кінці поля.</div>
                                </div>
                                <button type="submit" class="btn green-btn">Зберегти</button>
                            </form>
                            <div className='other-buttons d-flex justify-content-end'>
                                <button class="btn border mt-2 me-2">Вийти з акаунту</button>
                                <button class="btn bg-danger mt-2 text-light">Видалити акаунт</button>
                            </div>
                        </div>
                    )}
                    {activeBlock === 4 && (
                        <div>
                            {/* Зв'язатись з нами */}

                            {/* Форма, яку можна написати на пошту (це поки що тестове) */}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default UserPanel;