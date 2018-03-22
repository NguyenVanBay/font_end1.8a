$(function() {

	$.fn.inner_float = function(options){

		var setting = $.extend({
			top: 50
		}, options);

		var thisCallfn = $(this);

		console.log(thisCallfn);

		return this.each(function() {
			
			var heightTop = 0;
			thisCallfn.parent().prevAll().each(function(){
				heightTop += parseInt(this.offsetHeight);
			});

			thisCallfn.addClass("th1");

			// sự kiện khi scroll màn hình.
			$( window ).scroll (function() {

				// lấy giá trị chuột cuộn.
				var heightWindow = parseInt($(this).scrollTop());

				if((parseInt(heightTop) - parseInt(heightWindow) + 20) > parseInt(setting.top)) {

					// th1.
					thisCallfn.removeClass();
					thisCallfn.addClass("th1");
					thisCallfn.addClass("bg-red");

				} else {

					var h1 = parseInt(heightWindow);
					var h2 = parseInt(thisCallfn.parent().height()) + parseInt(heightTop)  - parseInt(setting.top) - parseInt(thisCallfn.height()) - 20;
					// console.log(h1);
					// console.log(h2);

					if(h1 < h2) {

						thisCallfn.removeClass();
						thisCallfn.addClass("th2");
						thisCallfn.addClass("bg-red");


						// // console.log("Chưa tới");
						// thisCallfn.removeClass("absolute");
						// thisCallfn.removeAttr('style');
						// thisCallfn.addClass("fixed");
						// thisCallfn.css("top", setting.top + "px");

					} else {

						thisCallfn.removeClass();
						thisCallfn.addClass("th3");
						thisCallfn.addClass("bg-red");
						// thisCallfn.removeClass("th2");
						// thisCallfn.removeClass("th1");
						// console.log("qua");
						// thisCallfn.removeClass("fixed");
						// thisCallfn.removeAttr('style');
						// thisCallfn.addClass("absolute");
						// thisCallfn.css("bottom", "0px");

					}
				}
			});

		});
	}
});