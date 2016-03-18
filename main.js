//$("body").append($().attr(""));

var rows = 4;

var columns = 5;

var win = 1;

function myStart() {
    for (j = 1; j <= rows; j++) {
        $("table").append("<tr id='r" + j + "'></tr>");
        for (i = 1; i <= columns; i++) {
            $("#r" + j).append("<td><div id='" + j + "' class='"+ i +"' kkk='1'></div></td>");
        }
    }
    //$("div").attr("kkk", rows.toString());
    //$("body").append($("#1.1").attr("kkk"));
}

function myReset() {
    /*var user_row = prompt;
    var user_columns = 3;
    $("table").empty();
    myStart()*/
}

function myCheck(light) {
    if ($(light).attr("kkk")==0) {
        win = 0;
    }
}

function myRandomize(){
    var a = Math.floor((Math.random() * 10) + 2 * rows * columns); 
    for (i = 0; i < a; i++) {   
        r = Math.floor((Math.random() * rows) + 1);
        c = Math.floor((Math.random() * columns) + 1);
        myMove("#" + r + "."+ c);
    }  
    win = 0;
}

function myWin() {
        win = 1;
        for (r = 1; r <= rows; r++) {
            for (c = 1; c <= columns; c++) {
                myCheck("#" + r + "." + c);
            }
        }
        if (win == 1) {
	            alert("DAMN DANIEL!!! PLAY AGAIN?");
        } else {
                alert("NOT THERE YET!!!");
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
    myStart();
	$("div").click(function() {
	    if (win == 0) {
	        myMove(this);
	    }
    });
    
    $(".randomize").click(function() {
        myRandomize();
    });
  
    $(".win").click(function() {
        myWin();
    });
    $(".change").click(function() {
        myReset();
    });
});


