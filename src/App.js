import Home from './pages/Home';
import Listen from './pages/Listen';
import Translate from './pages/Translate';
import ListenTranslated from './pages/ListenTranslated';
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = ()=> {

  return (<Router>
            
    <Routes>
        <Route exact path='/:language?'  exac element={<Home />} />
        <Route exact path='/home/:language?'  exac element={<Home />} />
        <Route exact path='/about/:language?'  exac element={<About />} />
        <Route path='/listen/:reciter/:surah/:language?' element={<Listen />} />
        <Route path='/translate/:language?' element={<Translate />} />
        <Route path='/listenTranslated/:surah/:language?' element={<ListenTranslated />} />
        <Route path="/visitors19997" element={<div style={{position:"relative" , top:"15vh" , left:"50%"}}><a href="https://www.flagcounter.me/details/eqC"><img src="https://www.flagcounter.me/eqC/" alt="Flag Counter" /></a></div>}/>
    </Routes>
</Router>);

}  
export default App;
