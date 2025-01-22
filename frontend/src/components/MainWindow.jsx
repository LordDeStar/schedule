import React, { useState, useRef, useEffect } from 'react';
import "../styles/mainWindow.css";
import uksivt from '../images/uksivt.jpg';
import uksivt3 from '../images/uksivt3.jpg';

const MainWindow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const carouselRef = useRef(null);
  const carouselInnerRef = useRef(null);
  const images = [
    uksivt,
    uksivt3,
  ];

  useEffect(() => {
    if (carouselRef.current && carouselInnerRef.current) {
      const carouselWidth = carouselRef.current.offsetWidth;
      setTranslate(-currentIndex * carouselWidth);
    }
  }, [currentIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleResize = () => {
    if (carouselInnerRef.current && carouselRef.current) {
      const carouselWidth = carouselRef.current.offsetWidth;
      setTranslate(-currentIndex * carouselWidth);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // initial recalculation 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="main-window">
      <div className="text-container">
        <h1 className="main-title">Откройте мир знаний</h1>
        <p className="main-text">
          Добро пожаловать на сайт Уфимского колледжа статистики, информатики и вычислительной техники!
          Здесь вы найдете всю необходимую информацию для успешного обучения и взаимодействия с нашим колледжем.
          <br /><br />
          Мы рады предложить вам:
          <br />
          — Подробные сведения о квалифицированных преподавателях, готовых поделиться своими знаниями и опытом.
          <br />
          — Актуальное расписание занятий, позволяющее эффективно планировать учебное время.
          <br />
          — Контактную информацию для оперативной связи с администрацией и преподавательским составом.
          <br />
          — Удобный доступ к учебным материалам, включая лекции и семинары, для эффективного освоения программы.
          <br />
          — Возможность перейти в личный кабинет, где вы сможете отслеживать свою успеваемость, оценки и посещаемость, а также получать важные объявления и уведомления.
          <br /><br />
          Мы стремимся обеспечить качественное образование и создать комфортную среду для вашего развития.
          Начните свой путь к знаниям вместе с УКСИВТ!
        </p>
        {/* <button className="main-button">Присоединиться</button> */}
      </div>
      <div className="carousel-container">
        <div className="carousel" ref={carouselRef}>
          <div
            className="carousel-inner"
            ref={carouselInnerRef}
            style={{ transform: `translateX(${translate}px)` }}
          >
            {images.map((image, index) => (
              <div className="carousel-item" key={index}>
                <img src={image} alt={`Image ${index + 1}`} className="carousel-image" />
              </div>
            ))}
          </div>
          <div className="pagination">
            {images.map((_, index) => (
              <button
                key={index}
                className={index === currentIndex ? 'active' : ''}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWindow;