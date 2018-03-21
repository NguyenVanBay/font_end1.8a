/* Your plugin javascript here */
$.fn.inner_float = function(options){
	//Value of Top
	// var top='0px';
	//Value of Bottom
	// var bottom='0px';
    var defaults = {

        top : '10px'

    } 

    //Ghi đè lên options default của plugin

    //Nếu không truyền vào options thì mặc định lấy options defaults

    var options = $.extend( defaults, options); 
    //Lặp qua các selector dùng plugin
    var boxH100 = $('.h100');
    var boxH500 = $('.h500');
    var almostShow = $('#almost-show');

    $('body').css('margin',0);
    return this.each(function(){



        var that = $(this);
        $(window).scroll(function() {
            console.log("size : " + $(window).scrollTop());
        	if ($(this).scrollTop()<parseInt(boxH100.height())-parseInt(options.top)) {
        		console.log($(this).scrollTop());
        		that.addClass('GD1');
        		that.removeClass('GD2');
        		that.removeClass('GD3');
        		// that.css('top', options.top);
        		that.css('top', 0);
        		that.css('width', '100%');
        	}
        	else
        	{
        		if ($(this).scrollTop()<parseInt(boxH100.height()) + parseInt(boxH500.height())- parseInt(almostShow.height()) - parseInt(options.top)) {

        			that.removeClass('GD1');
        			that.removeClass('GD3');
        			that.addClass('GD2');
        			that.css('top', options.top);
        			that.css('width', boxH100.innerWidth());
        		}
        		else
        		{
        			that.removeClass('GD1');
        			that.removeClass('GD2');
        			that.addClass('GD3');
        			that.css('bottom', 0);
                    $('.h500').css('position','relative');
                    that.css('top', '');
                    that.css('width', '100%');

                }

            }

        });


    });

};

/* Call your plugin */
$('#almost-show').inner_float({
  top: "50px"
});
