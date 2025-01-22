import React, { useState } from 'react';
import Header from './components/Header';
import MainWindow from './components/MainWindow';
import Contacts from './components/Contacts';
import Teachers from './components/Teachers';
import Lessons from './components/Lessons';
import LoginModal from './components/LoginModal';
import Lecture from "./components/Lecture";
import Seminars from "./components/Seminars";

const App = () => {
    const [activeComponent, setActiveComponent] = useState('mainWindow');
      const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const handleOpenLoginModal = () => {
        setIsLoginModalOpen(true);
    };

    const handleCloseLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case 'mainWindow':
                return <MainWindow />;
            case 'contacts':
                return <Contacts />;
            case 'instructors':
                return <Teachers />;
             case 'schedule':
                return <Lessons />;
             case 'lectures':
                 return <Lecture />;
            case 'seminars':
                return <Seminars />;
            default:
                return <MainWindow />;
        }
    };

    return (
        <div>
            <Header activeComponent={activeComponent} setActiveComponent={setActiveComponent} onOpenLoginModal={handleOpenLoginModal} />
            <main className="main-content">
                {renderComponent()}
            </main>
               <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />
        </div>
    );
};

export default App;