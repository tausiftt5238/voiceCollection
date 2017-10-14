/**
 * Created by tausiftt5238 on 8/4/17.
 */
var sentences = [];
function LoadFile(start_index) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        //console.log(xhr.responseText);
        if (this.readyState == 4 && this.status == 200) {
            sentences = xhr.responseText.split("\n");
            //index = (parseInt(Math.random()*174)) % 174;
            index = start_index;
            document.getElementById("showText").innerHTML =
                sentences[index];
        }
    }
    xhr.open("GET","bangla.txt");
    xhr.send();
}

function loadText(element, index){
    document.getElementById(element).innerHTML =
        sentences[index];
}