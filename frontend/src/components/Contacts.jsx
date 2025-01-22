import React from 'react';
import '../styles/contacts.css';
import vkIcon from '../images/vk.png';
import telegramIcon from '../images/telegram.png';
import okIcon from '../images/ok.png';


const Contacts = () => {
    return (
        <div className="contacts-container">
            <div className="text-container">
            <h2 className="main-title">Контактная информация</h2>
                  <div className="contact-details">
                      <div className="contact-item">
                          <strong className="contact-label">Адрес:</strong>
                          <span className="contact-value">
                               г. Уфа, ул. Кирова, 65
                          </span>
                      </div>
                       <div className="contact-item">
                          <strong className="contact-label">Телефоны:</strong>
                          <div className="contact-value">
                            <div>Приемная директора: (347) 286-00-06 доб. 102</div>
                            <div>Бухгалтерия: (347) 286-00-06 доб. 103</div>
                            <div>Отдел кадров: (347) 286-00-06 доб. 109</div>
                            <div>Библиотека: (347) 286-00-06 доб. 137</div>
                            <div>Отдел закупок: (347) 286-00-06 доб. 111</div>
                        </div>
                      </div>
                      <div className="contact-item">
                          <strong className="contact-label">Электронная почта:</strong>
                           <span className="contact-value">uksivt@ufanet.ru</span>
                      </div>
                        <div className="contact-item">
                            <strong className="contact-label">Официальный сайт:</strong>
                            <span className="contact-value">
                            <a href="https://uksivt.ru/" target="_blank" rel="noopener noreferrer">
                                 https://uksivt.ru/
                                 </a>
                         </span>
                       </div>
                      <div className="contact-item">
                            <strong className="contact-label">Часы работы:</strong>
                             <span className="contact-value">Пн-Пт: 8:30 - 17:00 <br /> Сб-Вс: Выходной</span>
                        </div>
                  </div>
                     <p className="main-text">
                            Мы всегда рады ответить на ваши вопросы и помочь вам с выбором направления обучения.
                            Вы можете связаться с нами по указанным телефонам и электронной почте или посетить наш колледж лично в рабочее время.
                         </p>
                  <div className="social-container">
                      <h3 className="social-title">Мы в социальных сетях</h3>
                    <div className="social-icons">
                        <a href="https://vk.com/uksivt_gbpou?t2fs=eb517944b9b51528e3_3&t2fs=eb517944b9b51528e3_6&t2fs=eb517944b9b51528e3_9&t2fs=eb517944b9b51528e3_12&t2fs=eb517944b9b51528e3_15&t2fs=eb517944b9b51528e3_18&t2fs=eb517944b9b51528e3_21" target="_blank" rel="noopener noreferrer" title="VK">
                            <img src={vkIcon} alt="VK" className="social-icon"/>
                        </a>
                       <a href="https://t.me/uksivt102" target="_blank" rel="noopener noreferrer" title="Telegram">
                            <img src={telegramIcon} alt="Telegram" className="social-icon"/>
                        </a>
                         <a href="https://ok.ru/group/70000000878415/topics" target="_blank" rel="noopener noreferrer" title="Odnoklassniki">
                             <img src={okIcon} alt="Odnoklassniki" className="social-icon"/>
                        </a>
                     </div>
                </div>
                <p className="main-text">
                     Для получения оперативной информации и новостей, подписывайтесь на наши страницы в социальных сетях.
                     © 2025 УКСиВТ. Все права защищены.
               </p>
            </div>
        </div>
    );
};

export default Contacts;