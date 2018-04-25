var myImage = document.getElementById('myImage');
var btSwitch = document.getElementById('btSwitch');

function switchLight() {
    //bascule d'allumé à eteint
    if(btSwitch.innerHTML == 'Allumer') {
        myImage.src = 'images/stitch.jpg';
        btSwitch.innerHTML = 'Eteindre';
    }else{
        myImage.src = 'images/stitch2.jpg';
        btSwitch.innerHTML = 'Allumer';
    }
}
//attacher l'evenement
btSwitch.addEventListener('click', switchLight);