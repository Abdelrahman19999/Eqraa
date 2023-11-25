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
    </Routes>
</Router>);
  
  
}  
export default App;
