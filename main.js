//$("body").append($().attr(""));

var win = 0

function myCheck(light) {
    if ($(light).attr("kkk")==0) {
        win = 0;
    }
}

function myRandomize(){
    var a = Math.floor((Math.random() * 10) + 40); 
    for (i = 0; i < a; i++) {   
        r = Math.floor((Math.random() * 4) + 1);
        c = Math.floor((Math.random() * 5) + 1);
        myMove("#" + r + "."+ c);
    }  
    win = 0;
}

function myWin(a) {
        win = 1;
        for (r = 0; r < 4; r++) {
            for (c = 0; c < 5; c++) {
                myCheck("#" + r + "." + c);
            }
        }
        if (win == 1) {
            if (a==0) {
	            alert("DAMN DANIEL!!! GG!!!");
            }
	        return 1;
        } else {
            if (a==0) {
                alert("NOT THERE YET!!!");
            }
            return 0;
        }
}

function myFade(divs) {
    if ($(divs).attr("kkk")==1) {
        $(divs).fadeTo("fast", 0.2);
        $(divs).attr("kkk", "0");
    } else {
        $(divs).fadeTo("fast", 1);
        $(divs).attr("kkk", "1");
    }
}

function myMove(a) {
    var aid = Number($(a).attr("id"));
    var aclass = Number($(a).attr("class"));
    var b = aid + 1;
    var c = aid - 1;
    var d = aclass + 1;
    var e = aclass - 1;
    myFade(a);
    myFade("#" + b + "." + aclass);
    myFade("#" + c + "." + aclass);
    myFade("#" + aid + "." + d);
    myFade("#" + aid + "." + e);
}

$(document).ready(function() {
	$("div").click(function() {
	    if (win == 0) {
	        myMove(this);
	    }
    });
    
    $(".randomize").click(function() {
        if (win == 1) {
            myRandomize();
        } else {
            if (myWin(1) == 1){
                myRandomize();
            } else
                alert("You must win first!")
        }
    });
  
    $(".win").click(function() {
        myWin(0);
    });
});
