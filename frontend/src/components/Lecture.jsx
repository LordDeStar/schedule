import React, { useState, useRef } from 'react';
import '../styles/lecture.css';
import pdfIcon from '../images/pdf.png';
import wordIcon from '../images/word.png';

const Lecture = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const fileInputRef = useRef(null);

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
           if (fileInputRef.current) {
             fileInputRef.current.value = ''; // Clear the input value
           }
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


    return (
        <div className="lecture-container">
           <div className="lecture-form">
             <h2 className="main-title">Лекционный материал</h2>
             <div className="upload-section">
                   <label htmlFor="fileInput" className="upload-label">
                       {selectedFile ? selectedFile.name : "Выберите файл для загрузки"}
                   </label>
                    <input
                        type="file"
                        id="fileInput"
                        onChange={handleFileChange}
                        className="file-input"
                        ref={fileInputRef}
                    />
                    <button
                        onClick={handleUpload}
                        className="upload-button"
                        disabled={!selectedFile}
                    >
                         Загрузить
                   </button>
               </div>
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
    );
};

export default Lecture;