var x = 5;
//console.log(x);

function popcat(x) {
$(".PopHwidget  .HjCarouselLite").jCarouselLite({
    btnNext: ".PopHwidget .down",
    btnPrev: ".PopHwidget .up",
    visible: x,
    auto: 0,
    speed: 500,
});
//console.log(x);
};

/*function doSomethingUseful() {
        //$('body').append('<div>Handler for .resize() called. ' + document.body.clientWidth + '</div>');
	console.log(document.body.clientWidth);
	if (document.body.clientWidth < 1100) {x = 2;} else {x = 5;};
	console.log(x);
    	}
*/

$(function() {
	popcat(x);
	//doSomethingUseful();
        //$(window).resize(popcat(x));
        //$(window).resize(doSomethingUseful);
});


