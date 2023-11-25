import React, { useEffect, useState } from 'react';
import { searchFileByName } from './api';
import { Player, BigPlayButton } from 'video-react';
import "./css/video.css"




function DownloadLink( apiKey, folderId, videoName ){
  const [videoFile, setVideoFile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const file = await searchFileByName(apiKey, folderId, videoName);
        setVideoFile(file);
      } catch (error) {
        // Handle error (e.g., display an error message)
        console.error(error.message);
      }
    };

    fetchData();
  }, [apiKey, folderId, videoName]);

    if(videoFile!==null){

        return `https://drive.google.com/uc?id=${videoFile.id}`;

    }
   
  
};

export default DownloadLink;
