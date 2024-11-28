function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    var PcText = document.getElementById("Pc");
    var hargaPCText = document.getElementById("hargaPc");
    var txtrakitan, txthargaPc;

    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";

    if(imgText.innerHTML == "") {
        txtrakitan = ""; 

        txtrakitan = "";
    } else if(imgText.innerHTML == "") {
        txtrakitan = " ."

        txtrakitan = ""
    } else if (imgText.innerHTML == "") {

       txtrakitan = "";

       txtrakitan = "";
    } else {
        txtrakitan = "";

        txtrakitan = "";
    }

    PcText.innerHTML = txtrakitan;
    hargaPCText.innerHTML = txthargaPc;



}