function submitMood(mood){
    document.getElementById('moodinput').value =mood;
    document.getElementById('moodform').submit();
}

function submitLevel(level){
    document.getElementById('levelinput').value = level;
    document.getElementById('levelform').submit();
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