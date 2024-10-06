import Header from "../components/Header";
import Player from "../components/Player";

const Listen = ()=>{

    try {
                fetch('https://user-counter-production.up.railway.app/increment');
              
            } catch (error) {
            }

    return (

    <div>
        <Header/>
        <Player/>
        
    </div>)

}


export default Listen;
