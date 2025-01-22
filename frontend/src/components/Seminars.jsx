import React, { useState } from 'react';
import '../styles/seminars.css';
import videoIcon from '../images/video.png';

const Seminars = () => {
    const [videoLink, setVideoLink] = useState('');
    const [selectedVideoFile, setSelectedVideoFile] = useState(null);
    const [uploadedVideos, setUploadedVideos] = useState([]);
     const [comments, setComments] = useState({});


    const handleLinkChange = (event) => {
        setVideoLink(event.target.value);
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if(file && file.type.startsWith('video/'))
        {
            setSelectedVideoFile(file);
        } else {
            setSelectedVideoFile(null);
           alert("Неверный формат файла. Пожалуйста, выберите видеофайл.");
        }
    };
   const handleCommentChange = (event, index) => {
       setComments({...comments, [index]: event.target.value});
    };
    const handleUpload = () => {
        if (videoLink.trim() !== '') {
             setUploadedVideos([...uploadedVideos,{type: 'link', value: videoLink}]);
            setVideoLink('');
        } else if(selectedVideoFile){
            setUploadedVideos([...uploadedVideos, {type: 'file', value: selectedVideoFile}]);
            setSelectedVideoFile(null);
            document.getElementById('fileInput').value = '';
        } else {
            alert("Пожалуйста, введите ссылку на видео или выберите видеофайл для загрузки.");
         }
    };

    const handleOpenVideo = (video) => {
        if (video.type === 'link') {
             window.open(video.value, '_blank', 'noopener,noreferrer');
        } else if (video.type === 'file') {
            const url = URL.createObjectURL(video.value);
            const link = document.createElement('a');
            link.href = url;
            link.download = video.value.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
           URL.revokeObjectURL(url);
        }
    };

    return (
        <div className="seminars-container">
            <div className="seminars-form">
                <h2 className="main-title">Семинарские материалы</h2>
                 <div className="upload-section">
                    <label htmlFor="linkInput" className="upload-label text-dark">Введите ссылку на видео</label>
                    <input
                        type="text"
                        id="linkInput"
                        value={videoLink}
                        onChange={handleLinkChange}
                        className="seminars-input"
                    />
                    <label htmlFor="fileInput" className="upload-label text-dark" >
                            {selectedVideoFile ? selectedVideoFile.name : "Выберите видеофайл"}
                       </label>
                      <input
                        type="file"
                         id="fileInput"
                        onChange={handleFileChange}
                         className="file-input"
                    />
                    <button
                        onClick={handleUpload}
                         className="upload-button"
                         disabled={ !videoLink && !selectedVideoFile}
                    >
                        Загрузить
                  </button>
               </div>
           </div>
               <div className="video-list">
                   {uploadedVideos.map((video, index) => (
                      <div key={index} className="video-item" onClick={() => handleOpenVideo(video)}>
                            <img src={videoIcon} alt="Video Icon" className="video-icon" />
                            <span className="video-name">
                             {video.type === 'link'
                                ?  video.value
                                : video.value.name}
                            </span>
                            <div className="comment-container">
                               <textarea
                                   placeholder="Добавить комментарий к видео"
                                  value={comments[index] || ''}
                                  onChange={(e) => handleCommentChange(e, index)}
                                  className="comment-input"
                                />
                             </div>
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default Seminars;