import Header from "../components/Header";
import VideoPlayer from "../components/VideoPlayer";
const Listen = ()=>{

      try {
                fetch('https://user-counter-production.up.railway.app/increment');
              
            } catch (error) {
            }

    return (

    <div>
        <Header/>
        <VideoPlayer/>
        
    </div>)

}


export default Listen;
