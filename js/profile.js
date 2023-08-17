axios.get("../data/data.json")
.then(function(res){
    // console.log(res)
    res.data.Profile.map((e,i)=>{
        console.log(e);

        let div = document.createElement("div");
        div.className = "bg-white border rounded-md dark:bg-[#272929] dark:text-[#ebf4f1] p-5 mb-8 last:mb-0";

        let h3 = document.createElement("h3")
        h3.className = "mb-4 text-base md:text-xl"
        h3.textContent = e.title
        div.appendChild(h3)

        let profile
        if(e.desc){
            p = document.createElement("p")
            p.innerHTML = `<span class = "font-bold">'${e.desc}'</span> ${e.desc2}`
            p.className= "mb-2 text-sm last:mb-0 md:text-base"
            div.appendChild(p)
        }else{
            e.date.map((el, index)=>{
                console.log(el);
                p = document.createElement("p")
                p.className= "mb-2 text-sm last:mb-0 md:text-base"
                p.textContent = `${el} : ${e.dateDesc[index]}`;
                div.appendChild(p)
            })
        }

        document.querySelector(".profile-content").appendChild(div)

    
 })
})

.catch(function(error){
    // console.log(error);
})