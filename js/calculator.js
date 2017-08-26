'use strict';
function(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek)
{
 if(podatek == true) {
     var oprocentowanieOpodatkowane = oprocentowanie
 }   else {
      var oprocentowanieOpodatkowane = oprocentowanie;   
 }
    var kapital = wplata * Math.pow(1 + (oprocentowanieOpodatkowane / okresKapitalizacji), iloscLat * okresKapitalizacji);
    
    return parseFloat(kapital).toFixed(2);
    
}

function oblicz() {
    var wplata = perseInt(document.getElementById('wplata').value);
    
    var iloscLat = parseInt(document.getElementById('ilosc-lat').value);
    
    var okresKapitalizacji = parseInt(document.getElementById('okres-kapitalizacja').value);
    
    var oprocentowanie = parseInt(document.getElementById('oprocentowanie').value)/100;
    
    var podatek = document.getElementById('podatek').checked;
    
    var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
    document.getElementById('wynik').innerHTML = wynik;
}



