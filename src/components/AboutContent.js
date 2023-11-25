import getObj from "./LangObj"
import "./css/AboutContent.css";


const AboutContent=()=>{

    var LangObj = getObj();

    if(LangObj.lang==="en")return(<div className="AboutEN">

        <h1 className="question">What is Eqraa ? </h1>
        <h2 className="answer">Eqraa is a free online platform for listening to quran.</h2>
        <br/>
        <h1 className="question">How to use it ? </h1>
        <h2 className="answer">Just navigate to home and choose the surah and reciter you want and hit the button listen now.</h2>
        <br/>
        <h1 className="question">Can I download the audio files ?</h1>
        <h2 className="answer">Yes, Just hit the donwload button below the surah and reciter names.</h2>
        <br/>
        <h1 className="question">What languages does Eqraa support ?</h1>
        <h2 className="answer">Arabic and English. </h2>
        <br/>
        <h1 className="question">How to change the language ?</h1>
        <h2 className="answer">Just hit the language button in the header and choose the language you want. </h2>
        <br/>
        <h1 className="question">What is the Translated quran feature ?</h1>
        <h2 className="answer">It is a visual quran recite with english translation for people that cannot speak arabic well or cannot understand the arabic language. </h2>
        <br/>
        <h1 className="question">Can I download the video files ?</h1>
        <h2 className="answer">Yes, Just hit the download button below the video player. </h2>
    </div>);
    else return (<div className="AboutAR">

    <h1 className="question">ما هو Eqraa ؟ </h1>
    <h2 className="answer">Eqraa هو منصة رقمية للإستماع للقرآن.</h2>
    <br/>
    <h1 className="question">كيفية الإستخدام ؟ </h1>
    <h2 className="answer">فقط اذهب للقائمة الرئيسية و أدخل إسم السورة والقارئ الذي تريد و اضغط  على استمع الأن.</h2>
    <br/>
    <h1 className="question">هل من الممكن تحميل الملفات الصوتية ؟</h1>
    <h2 className="answer">نعم , فقط اضغط على زر التحميل أسفل إسم السورة و القارئ.</h2>
    <br/>
    <h1 className="question">ما هي اللغات المتاحة ؟</h1>
    <h2 className="answer">العربية و الإنجليزية. </h2>
    <br/>
    <h1 className="question">كيفية تغيير اللغة ؟ </h1>
    <h2 className="answer">فقط اضغط على زر اللغات و اختر اللغة التي تريدها.</h2>
    <br/>
    <h1 className="question">ما هي خاصية القرآن المترجم ؟</h1>
    <h2 className="answer">  تلاوة مرئية مع ترجمة بالإنجليزية لتساعد الأشخاص الذين لا يتقنون اللغة العربية او لا يفهمونها على فهم القرآن.</h2>
    <br/>
    <h1 className="question">هل أستطيع تحميل الفيديو ؟</h1>
    <h2 className="answer">نعم, فقط اضغط على زر التحميل أسفل الفيديو.</h2>
</div>)
}


export default AboutContent;