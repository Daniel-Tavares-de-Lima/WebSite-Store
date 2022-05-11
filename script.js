let count = 1
document.getElementById("radio1").checked = true;

setInterval(function(){
    neximage();
}, 4000)

function neximage(){
    ++count;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}


