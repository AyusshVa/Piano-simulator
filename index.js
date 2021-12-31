// array of all 20 .tile tiles of piano;

var arr = document.querySelectorAll(".tile");

// giving the function sound when the event keydown happens.
document.addEventListener("keydown", function(event){
    sound(event.key);
})

// passing the sound func when we clicked on the tile, when the tile is clicked, it will listen the event and pass the inner Html char using this keyword
for(var i=0; i<arr.length; i++)
{
    document.getElementsByClassName("tile")[i].addEventListener("click",function(){
        sound(this.innerHTML);
    })
}



// sound function which plays the souond depending on what button we typed or what tile we clicked on, this will also add some effects on the tile we are targeting.
function sound(char)
{
    if(char == "a")
    {   
        var key01 = new Audio("PianoSounds/key01.mp3");
        key01.play();
        arr[0].classList.toggle("pressed");
    }
    else if(char == "s")
    {   
        var key02 = new Audio("PianoSounds/key02.mp3");
        key02.play();
        arr[1].classList.toggle("pressed");
    }
    else if(char == "d")
    {   
        var key03 = new Audio("PianoSounds/key03.mp3");
        key03.play();
        arr[2].classList.toggle("pressed");
    }
   else if(char == "f")
    {   
        var key04 = new Audio("PianoSounds/key04.mp3");
        key04.play();
        arr[3].classList.toggle("pressed");
    }
    else if(char == "g")
    {   
        var key05 = new Audio("PianoSounds/key05.mp3");
        key05.play();
        arr[4].classList.toggle("pressed");
    }
    else if(char == "h")
    {   
        var key06 = new Audio("PianoSounds/key06.mp3");
        key06.play();
        arr[5].classList.toggle("pressed");
    }
    else if(char == "j")
    {   
        var key07 = new Audio("PianoSounds/key07.mp3");
        key07.play();
        arr[6].classList.toggle("pressed");
    }
    else if(char == "k")
    {   
        var key08 = new Audio("PianoSounds/key08.mp3");
        key08.play();
        arr[7].classList.toggle("pressed");
    }
    else if(char == ";")
    {   
        var key10 =new Audio("PianoSounds/key10.mp3");
        key10.play();
        arr[9].classList.toggle("pressed");
    }
    else if(char == "l")
    {   
        var key09 = new Audio("PianoSounds/key09.mp3");
        key09.play();
        arr[8].classList.toggle("pressed");
    }
    else if(char == "e")
    {   
        var key11 = new Audio("PianoSounds/key11.mp3");
        key11.play();
        arr[10].classList.toggle("pressed");
    }
    else if(char == "i")
    {   
        var key12 = new Audio("PianoSounds/key12.mp3");
        key12.play();
        arr[11].classList.toggle("pressed");
    }
    else if(char == "r")
    {   
        var key13 = new Audio("PianoSounds/key13.mp3");
        key13.play();
        arr[12].classList.toggle("pressed");
    }
    else if(char == "u")
    {   
        var key14 = new Audio("PianoSounds/key14.mp3");
        key14.play();
        arr[13].classList.toggle("pressed");
    }
    else if(char == "c")
    {   
        var key15 = new Audio("PianoSounds/key15.mp3");
        key15.play();
        arr[14].classList.toggle("pressed");
    }
    else if(char == "m")
    {   
        var key16 = new Audio("PianoSounds/key16.mp3");
        key16.play();
        arr[15].classList.toggle("pressed");
    }
    else if(char == "n")
    {   
        var key17 = new Audio("PianoSounds/key17.mp3");
        key17.play();
        arr[16].classList.toggle("pressed");
    }
    else if(char == "v")
    {   
        var key18 = new Audio("PianoSounds/key18.mp3");
        key18.play();
        arr[17].classList.toggle("pressed");
    }
    else if(char == "o")
    {   
        var key19 = new Audio("PianoSounds/key19.mp3");
        key19.play();
        arr[18].classList.toggle("pressed");
    }
    else if(char == "w")
    {   
        var key20 = new Audio("PianoSounds/key20.mp3");
        key20.play();
        arr[19].classList.toggle("pressed");
    }
}

// on keyup, we will toggle the pressed class to show the effects are over after we stopped pressing the key.
document.addEventListener("keyup", function(event){
    for(var j=0; j<arr.length; j++)
    {
        if(arr[j].innerHTML == event.key )
        {
            arr[j].classList.toggle("pressed");
        }
    }
})