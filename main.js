function myFade(divs) {
    $(divs).fadeTo("fast", 0.2);
    /*$("body").append($(divs).attr("id"));
	$("body").append($(divs).attr("class"));
	$("body").append($(divs).attr("kkk"));*/
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
    //$("body").append(b);
}

$(document).ready(function() {
	$("div").click(function() {
	    myMove(this);
    });    
});
