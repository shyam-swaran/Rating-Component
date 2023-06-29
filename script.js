var val=0;
const buttons=document.getElementsByClassName("rating-btn");
function rated(n){
    for(let i of buttons){
        i.classList.remove("selected");
    }
    n.classList.add("selected"); 
    val=n.innerText;
};
function onsub(){
    const rating = document.getElementById("rt");
    if(val==0){
        rating.classList.toggle("noselection");
        setTimeout(() => {
            rating.classList.toggle("noselection");
        }, 200);
        return;
    }
    document.getElementById("value").innerText=val;
    rating.classList.add("isfliped");
};