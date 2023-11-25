import React, { useEffect, useState } from 'react';
import { searchFileByName } from './api';
import { Player, BigPlayButton } from 'video-react';
import "./css/video.css"

const DriveFolder = ({ apiKey, folderId, videoName }) => {
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


  return (
    <div>
      {videoFile && (

        <div className='video'>
        <Player autoPlay>
          <source src={`https://www.googleapis.com/drive/v3/files/${videoFile.id}?alt=media&key=${apiKey}`} />
          <BigPlayButton position="center" />
        </Player>
        </div>
      )}


    </div>
  );
};

export default DriveFolder;
