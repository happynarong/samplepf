
let dark =false;
function darkMode(){
    
    if(dark ==  false){
        dark = true;
        document.querySelector(".fa-moon").classList.add("fa-sun")
        document.querySelector(".fa-moon").classList.remove("fa-moon")
        document.querySelector("html").classList.add("dark")
        localStorage.setItem("dark",true);

    }else{
        dark = false;
        document.querySelector(".fa-sun").classList.add("fa-moon")
        document.querySelector(".fa-sun").classList.remove("fa-sun")
        document.querySelector("html").classList.remove("dark")
        localStorage.removeItem("dark");
        // localStorage.setItem("dark",false);
    }
}


const dark_mode = localStorage.getItem("dark");
// console.log(dark_mode);

if(dark_mode == "true"){
    darkMode()

}
// 문자열이라 큰 따옴표 씀


function languange(lang){
    if(lang == "en"){
        localStorage.setItem("lang", "en");
    }else{
        localStorage.removeItem("lang", "en")
    }
}

const $lang = localStorage.getItem("lang")

// 다국어
const url = new URL(location.href).searchParams;
const lang = url.get("Lang")

localStorage.setItem("lang", lang);


axios.get("data/data.json")
.then(function(res){

    if($lang == "en"){
        res.data.EnNav.map((e,i)=>{
            // console.log(e);
            document.querySelectorAll(".list li a")[i].textContent = e.title
        })
    }
    if(lang == "en"){
        res.data.EnNav.map((e,i)=>{
            // console.log(e);
            document.querySelectorAll(".list li a")[i].textContent = e.title
        })
    }

})






    // 모바일 네비
    function mNav(){
        document.querySelector(".m-btn").classList.toggle("on")
        
    }



   
