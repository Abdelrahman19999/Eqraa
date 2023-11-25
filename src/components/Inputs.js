import Select from 'react-select'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import getObj from "./LangObj"
import { Player, ControlBar  } from 'video-react';
import "./css/Inputs.css"




var langObj;


const Inputs = ()=>{

    langObj = getObj();    

    const [state, setState] = useState({surah:{id:null,name:""}, reciter:{id:null,name:""}});

    var handleChange = (event) => {
  
    const name=event.target.name;
    const label=event.label;
    const value= event.value;

    setState({

    ...state,
    [name]:{id:value, name:label}
    
    });
    };

    let props = state;
    let navigate = useNavigate(); 
    var handleClick = (state) => {
      let path = `/Listen/${props.reciter.name}/${props.surah.name}/${langObj.lang}`; 
      if(props.surah.name.length!=0 && props.reciter.name.length!=0)navigate(path,{

        state:{

          surahName:props.surah.name,
          surahID:props.surah.id,
          reciterName:props.reciter.name,
          reciterID:props.reciter.id,


        }
      });

    }

    return (<div id="home">
    
    <h1 id="name">Eqraa</h1>

    <form action="/listen" method="post">

      <Select styles={langObj.selectStyles} onChange={handleChange} name="surah" className="react-select" classNamePrefix="react-select" options={langObj.suwar.map((element, index) => (  
          {target:{name:"surah"}, value: index , label: element.name}
        ))  }  placeholder={<div id='placeHolder'>{langObj.surahPlaceHolder}</div>}  required/>

      <Select styles={langObj.selectStyles} onChange={handleChange} name="reciter" className="react-select" classNamePrefix="react-select" options={langObj.reciters.map((element, index) => (  
          {target:{name:"reciter"}, value: index , label: element.name}
        ))  }  placeholder={<div id='placeHolder'>{langObj.reciterPlaceHolder}</div>} required/>  

      <button onClick={handleClick} type="submit" class="button-18">{langObj.listen}</button>
             
    </form>          

    

    </div>);
}

export default Inputs;