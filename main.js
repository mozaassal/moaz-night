var stars = document.getElementById("stars1");
var moon = document.getElementById("moon2");
var mountains3 = document.getElementById("mountains3");
var mountains4 = document.getElementById("mountains4");
var river= document.getElementById("river5");
var boat = document.getElementById("boat6");
var assal= document.querySelector(".assal");
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 3 + 'px'
    assal.style.fontSize = value + 'px';
    if(scrollY >= 67){
        assal.style.fontSize = 67 + 'px';
        assal.style.position = 'fixed';
        if(scrollY >= 446){
            assal.style.display = 'none';
        }else{
            assal.style.display = 'block';
        }
        if(scrollY >= 122){
            document.querySelector('.main').style.background = 'linear-gradient(#2b699f,#10001f)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'
        }
    }   
}    
 








