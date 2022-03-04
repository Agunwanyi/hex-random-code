function changecolor(){
    var hexNumber = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    var hexcode = "";
    for (let  i= 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random()*hexNumber.length)
        // console.log(Math.round(Math.random()*hexNumber.length));
        hexcode += hexNumber[randomIndex];
        // console.log(hexcode)
        
    }
    document.getElementById("hexCode").innerHTML= hexcode;
    document.getElementsByTagName("body")[0].style.backgroundColor = "#" + hexcode;
}