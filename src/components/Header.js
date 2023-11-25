import "./css/Header.css"
import getObj from "./LangObj"
import { useNavigate } from "react-router-dom";


const Header = ()=>{

    var langObj = getObj();
    var currentLang ;
    var desiredLang ;

    if(langObj.lang==="en"){

        currentLang = {name:"English",value:"en"};
        desiredLang = {name:"العربية",value:"ar"};

    }else{

        currentLang = {name:"العربية",value:"ar"};
        desiredLang = {name:"English",value:"en"};

    }

    const navigate = useNavigate();

    const handleLanguageSwitch = (lang) => {

        var currentPath = window.location.pathname;
        var languageParam = currentPath.slice(currentPath.length-3,currentPath.length);
        
        if(languageParam==="/ar" || languageParam==="/en")
          currentPath=currentPath.slice(0,currentPath.length-3);
        
        if(currentPath==="/")currentPath="";  

          const value = lang.target.value;        
          navigate(`${currentPath}/${value}`);
          
  
      };

      var customStyle;
      if(langObj.lang==="en")customStyle={ marginLeft:"auto" ,paddingRight:"5%", paddingLeft:"3ch", backgroundPosition: "left"};
      else customStyle={ marginRight:"auto", paddingLeft:"5%", backgroundPosition: "right" , paddingRight: "1.4ch" , fontWeight:"600"};

    return (<div style={langObj.headerStyle} class="header">
   
    <a style={langObj.linkStyle} href={"/home/" + langObj.lang}><p>{langObj.home}</p></a>
    <a style={langObj.linkStyle} href={"/about/" + langObj.lang}><p>{langObj.about}</p></a>
    <a style={langObj.linkStyle} href={"/translate/" + langObj.lang}><p>{langObj.translated}</p></a>
    <select style={customStyle} id="language" onChange={handleLanguageSwitch} value={currentLang.name}>
      <option value={currentLang.value}>{currentLang.name}</option>
      <option value={desiredLang.value}>{desiredLang.name}</option>
   </select>
    </div>);

}



export default Header;