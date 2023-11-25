import Header from "./Header";
import AudioPlayer from "react-h5-audio-player";
import { useLocation } from "react-router-dom";
import {Link, useParams} from 'react-router-dom';
import 'react-h5-audio-player/lib/styles.css';
import getObj from "./LangObj"
import GetLanguages from "./Languages";
import "./css/Player.css"


function threeDigits(number){

    if(number<10)return ("00"+number);
    else if(number<100)return ("0"+number);
    else return number;

} 

function getServer(reciterID, surahID,Reciters){

   let server = Reciters[reciterID].moshaf[0].server + threeDigits((surahID+1))+".mp3";

   return server;

}


const Player = ()=>{


    var langObj = getObj();

    var Languages = GetLanguages();
    var newObj;

    if(langObj.lang==="ar")newObj=Languages.en;
    else newObj=Languages.ar;

    const params = useParams();

    let surahName = params.surah;
    let reciterName = params.reciter;

    let surahID = langObj.suwar.findIndex(x => x.name===surahName);
    let reciterID =langObj.reciters.findIndex(x => x.name===reciterName); 

    var server ;
    if(surahID!=-1&&reciterID!=-1)server = getServer(reciterID,surahID,langObj.reciters);

    if(surahID===-1){
        surahID = newObj.suwar.findIndex(x => x.name===surahName)
        surahName = langObj.suwar[surahID].name;
    };
    if(reciterID===-1){
        reciterID = newObj.reciters.findIndex(x => x.name===reciterName);
        langObj.reciters.forEach(e=>{

            if(e.id===newObj.reciters[reciterID].id){reciterName=e.name;}

        })

        server = getServer(reciterID,surahID,newObj.reciters);
    }


    return (

    <div className="container">

        <main>
        <div className="names">
           <h1>{surahName}</h1>
           <h3>{reciterName}</h3>
        </div>
        <a id="download" href={server} download={reciterName + "_" + surahName} target="_blank" rel="noreferrer">
        {langObj.download}
        </a>
        <AudioPlayer className="audioContainer" autoPlay src={server}/>
        </main>
       
        
    </div>)

}


export default Player;