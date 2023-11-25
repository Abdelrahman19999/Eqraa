import {useParams} from 'react-router-dom';
import getLanguages from "./Languages"

const Languages = getLanguages();

var HandleLanguageObj = () =>{

var langObj;

const params = useParams();

if(useParams()==null)langObj=Languages.en;
else {

const langParam = params.language;

switch (langParam) {
 case "ar": langObj=Languages.ar;
    break; 

  default: langObj=Languages.en;
    break;
  }
 }

 return langObj;


}

export default HandleLanguageObj;