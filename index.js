var n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var k = this.innerText;
        ring(k);
        animateClass(k);
    });
}

document.addEventListener("keydown", function (event) {
    animateClass(event.key)
    ring(event.key);
});


function ring(k) {
    if (k == 'w') {
        gana = new Audio('./crash.mp3');
    }
    else {
        if (k == 'a') {
            gana = new Audio('./kick-bass.mp3');
        }
        else {
            if (k == 's') {
                gana = new Audio('./snare.mp3');
            }
            else {
                if (k == 'd') {
                    gana = new Audio('./tom-1.mp3');
                }
                else {
                    if (k == 'j') {
                        gana = new Audio('./tom-2.mp3');
                    }
                    else {
                        if (k == 'k') {
                            gana = new Audio('./tom-3.mp3');
                        }
                        else {
                            if (k == 'l') {
                                gana = new Audio('./tom-4.mp3');
                            }
                        }
                    }
                }
            }
        }
    }
    gana.play();
}


function animateClass(letter) {
    var button_used = document.querySelector("." + letter);
    button_used.classList.add("pressed");
    setTimeout(function () {
        button_used.classList.remove("pressed");
    }, 200);
}
