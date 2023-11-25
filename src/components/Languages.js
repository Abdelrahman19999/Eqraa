import suwarEn from "./Suwar"
import recitersEn from "./Reciters"
import suwarAr from "./SuwarAr"
import recitersAr from "./RecitersAr"


const GetLanguages = () => {

   return {

      ar : {
         "lang" : "ar",
         "suwar" : suwarAr,
         "reciters": recitersAr,
         "surahPlaceHolder" : "اختر السورة",
         "reciterPlaceHolder" : "اختر القارئ",
         "listen" : "استمع الأن",
         "download" : "تحميل الأن",
         "home" : "الرئيسية",
         "about" : "تعريف",
         "translated" : "قرآن  مترجم",
         "headerStyle": { direction:"rtl", right: "2%", gap: "4%",  },
         "switchLanguageStyle":{ marginLeft:"auto !important" ,paddingRight:"5%"},
         "linkStyle": { fontSize:"1.3rem"},
         "selectStyles" : {
             control: (base) => ({
               ...base,
               direction: "rtl",
               textAlign: "right",
               paddingRight : "4.8%",
               paddingLeft : "0.5% !important",
               backgroundPosition: "98% !important",
               backgroundAttachment: "fixed"
       
             }),
             input:(base) => ({
               ...base,
               paddingLeft : "99%",
               direction : "rtl"
             }),
             menu: (base) => ({
               ...base,
               textAlign: "right"
             }),
             container: (base) => ({
               ...base,
             })
           }
 
     },
 
      en : {
        
         "headerStyle": {},
         "switchLanguageStyle":{ marginLeft:"auto !important" ,paddingRight:"5%"},
         "suwar" : suwarEn,
         "reciters": recitersEn,
         "lang" : "en",
         "surahPlaceHolder" : "Choose a Surah",
         "reciterPlaceHolder" : "Choose a Reciter",
         "listen" : "Listen now",
         "download" : "Donwload",
         "home" : "Home",
         "about" : "About",
         "translated" : "Translated Quran",
         "selectStyles" : {}
 
     }
 
 };

}



export default GetLanguages;