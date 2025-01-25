// import React, { useState, useContext } from 'react';
// import Header from './components/Header';
// import MainWindow from './components/MainWindow';
// import Contacts from './components/Contacts';
// import Teachers from './components/Teachers';
// import Lessons from './components/Lessons';
// import LoginModal from './components/LoginModal';
// import Lecture from "./components/Lecture";
// import Seminars from "./components/Seminars";
// import PersonalAccount from './components/PersonalAccount';
// import TeacherAccount from "./components/TeacherAccount";
// import AdminAccount from "./components/AdminAccount";
// import { UserContext } from './stores';
// const App = () => {
//     const userStore = useContext(UserContext);
//     const [activeComponent, setActiveComponent] = useState('mainWindow');
//     const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
//      const [isPersonalAccountOpen, setIsPersonalAccountOpen] = useState(false);
//      const [isTeacherAccountOpen, setIsTeacherAccountOpen] = useState(false);
//      const [isAdminAccountOpen, setIsAdminAccountOpen] = useState(false);
//      const [showAverageGrade, setShowAverageGrade] = useState(false);

//     const handleOpenLoginModal = () => {
//         setIsLoginModalOpen(true);
//     };

//     const handleCloseLoginModal = () => {
//         setIsLoginModalOpen(false);
//     };

//    const handleLoginSuccess = () => {
//       if (userStore.role === 'student') {
//             setIsPersonalAccountOpen(true);
//             setIsTeacherAccountOpen(false);
//             setIsAdminAccountOpen(false);
//          } else if (userStore.role === 'teacher') {
//              setIsTeacherAccountOpen(true);
//             setIsPersonalAccountOpen(false);
//            setIsAdminAccountOpen(false);
//         } else if(userStore.role === 'admin'){
//             setIsAdminAccountOpen(true);
//            setIsPersonalAccountOpen(false);
//             setIsTeacherAccountOpen(false);
//         }
//     };

//     const handleClosePersonalAccount = () => {
//         setIsPersonalAccountOpen(false);
//     };
//      const handleCloseTeacherAccount = () => {
//          setIsTeacherAccountOpen(false);
//     };
//      const handleCloseAdminAccount = () => {
//         setIsAdminAccountOpen(false);
//     };

//    const handleToggleAverageGrade = () => {
//         setShowAverageGrade(!showAverageGrade);
//     };


//     const renderComponent = () => {
//          if(isPersonalAccountOpen){
//             return (
//                 <PersonalAccount onClose={handleClosePersonalAccount}
//                                  showAverageGrade={showAverageGrade}
//                                  handleToggleAverageGrade={handleToggleAverageGrade}
//                 />
//             );
//          } else if (isTeacherAccountOpen) {
//              return (
//                 <TeacherAccount onClose={handleCloseTeacherAccount} />
//             );
//         }else if(isAdminAccountOpen){
//             return (
//                 <AdminAccount onClose={handleCloseAdminAccount} />
//            );
//         }
//          switch (activeComponent) {
//              case 'mainWindow':
//                 return <MainWindow />;
//              case 'contacts':
//                 return <Contacts />;
//              case 'instructors':
//                 return <Teachers />;
//             case 'schedule':
//                  return <Lessons />;
//              case 'lectures':
//                 return <Lecture />;
//              case 'seminars':
//                 return <Seminars />;
//              default:
//                 return <MainWindow />;
//          }
//     };

//     return (
//         <div>
//             <Header activeComponent={activeComponent} setActiveComponent={setActiveComponent} onOpenLoginModal={handleOpenLoginModal} />
//              <main className="main-content">
//                 {renderComponent()}
//              </main>
//               <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} onLoginSuccess={handleLoginSuccess} />
//         </div>
//     );
// };

// export default App;










import React, { useContext, useState } from 'react';
import Header from './components/Header';
import MainWindow from './components/MainWindow';
import Contacts from './components/Contacts';
import Teachers from './components/Teachers';
import Lessons from './components/Lessons';
import LoginModal from './components/LoginModal';
import Lecture from "./components/Lecture";
import Seminars from "./components/Seminars";
import PersonalAccount from './components/PersonalAccount';
import TeacherAccount from "./components/TeacherAccount";
import AdminAccount from "./components/AdminAccount";
import { UserContext } from './stores';
const App = () => {

    const userStore = useContext(UserContext)

    const [activeComponent, setActiveComponent] = useState('mainWindow');
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isPersonalAccountOpen, setIsPersonalAccountOpen] = useState(false);
    const [isTeacherAccountOpen, setIsTeacherAccountOpen] = useState(false);
    const [isAdminAccountOpen, setIsAdminAccountOpen] = useState(false);
    const [showAverageGrade, setShowAverageGrade] = useState(false);

    const handleOpenLoginModal = () => {
        setIsLoginModalOpen(true);
    };

    const handleCloseLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    const handleLoginSuccess = () => {
        if (userStore.role === 'student') {
            setIsPersonalAccountOpen(true);
            setIsTeacherAccountOpen(false);
            setIsAdminAccountOpen(false);
        } else if (userStore.role === 'teacher') {
            setIsTeacherAccountOpen(true);
            setIsPersonalAccountOpen(false);
            setIsAdminAccountOpen(false);
        } else if (userStore.role === 'admin') {
            setIsAdminAccountOpen(true);
            setIsPersonalAccountOpen(false);
            setIsTeacherAccountOpen(false);
        }
    };

    const handleClosePersonalAccount = () => {
        setIsPersonalAccountOpen(false);
    };
    const handleCloseTeacherAccount = () => {
        setIsTeacherAccountOpen(false);
    };
    const handleCloseAdminAccount = () => {
        setIsAdminAccountOpen(false);
    };

    const handleToggleAverageGrade = () => {
        setShowAverageGrade(!showAverageGrade);
    };


    const renderComponent = () => {
        if (isPersonalAccountOpen) {
            return (
                <PersonalAccount onClose={handleClosePersonalAccount}
                    showAverageGrade={showAverageGrade}
                    handleToggleAverageGrade={handleToggleAverageGrade}
                />
            );
        } else if (isTeacherAccountOpen) {
            return (
                <TeacherAccount onClose={handleCloseTeacherAccount} />
            );
        } else if (isAdminAccountOpen) {
            return (
                <AdminAccount onClose={handleCloseAdminAccount} />
            );
        }
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
            <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} onLoginSuccess={handleLoginSuccess} />
        </div>
    );
};

export default App;