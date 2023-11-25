import React from 'react';
import DriveFolder from './DriveFolder';
import { useLocation } from "react-router-dom";
import {Link, useParams} from 'react-router-dom';
import 'react-h5-audio-player/lib/styles.css';
import getObj from "./LangObj"
import GetLanguages from "./Languages";
import DownloadLink from './DownloadLink';
import "./css/video.css"



function threeDigits(number){

    if(number<10)return ("00"+number);
    else if(number<100)return ("0"+number);
    else return number;

}


const VideoPlayer = () => {
 
  var langObj = getObj();

  var Languages = GetLanguages();
  var newObj;

  if(langObj.lang==="ar")newObj=Languages.en;
  else newObj=Languages.ar;

  const params = useParams();

  let surahName = params.surah;

  let surahID = langObj.suwar.findIndex(x => x.name===surahName);

  if(surahID===-1){
      surahID = newObj.suwar.findIndex(x => x.name===surahName)
  };


  const apiKey = 'AIzaSyDN_AK49S3zLujtPzqTF3NellkeliqgFSg';
  const folderId = '1VrcJuQpXBkfQMYcLdjJKSixF7U9mpqSf';
  const videoName = threeDigits(++surahID) + '.mp4';  

  const Link = DownloadLink(apiKey, folderId, videoName);

  return (
    <div className='video-container'>
     <link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css"/>
      <DriveFolder apiKey={apiKey} folderId={folderId} videoName={videoName} />
      <a id='videodownload' href={Link} download={surahName} target="_blank" rel="noreferrer">
        {langObj.download}
        </a>
    </div>
  );
};

export default VideoPlayer;
