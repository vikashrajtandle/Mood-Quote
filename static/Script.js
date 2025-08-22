async function fetchHelloWorld() {
    const response =await fetch('/get-text');
    const data =await response.text();
    document.getElementById('message').innerHTML=data;
    const start = document.getElementsByClassName('btn')[0];
    start.innerHTML="STOP";
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const hamburger = document.getElementById("hamburger");
    if (sidebar){
        sidebar.classList.toggle('open');
        if(sidebar.classList.contains('open')){
            hamburger.style.color="yellow";
            document.getElementsByClassName('main')[0].style.filter="blur(25px)";
        }
        else{
            hamburger.style.color="";
            document.getElementsByClassName('main')[0].style.filter="";
        }
    }
    else{
        console.error('sidebar element NOTT FOUND');
    }
}