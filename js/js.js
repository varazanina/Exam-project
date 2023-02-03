var text = ["The natural gem of Aarhus!", "The best place in Aarhus!"];
    var counter = 0;
    var elem = document.getElementById("greeting");
    setInterval(change, 3000);
    function change() {
     elem.innerHTML = text[counter];
        counter++;
        if(counter >= text.length) { counter = 0; }
    } 

