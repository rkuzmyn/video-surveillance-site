$(function(){
    $('.script_help').click(function(){
        if ( $(this).attr('href') == '#top_call' )
            {   $('#script_help').text('1');    }
        else if ( $(this).attr('href') == '#bonus_h' )
            {   $('#script_help').text('2');    }
            
        else if ( $(this).attr('href') == '#ptc_106' )
            {   $('#script_help').text('3_1');    }
        else if ( $(this).attr('href') == '#pt_828' )
            {   $('#script_help').text('3_2');    }
        else if ( $(this).attr('href') == '#pt_122' )
            {   $('#script_help').text('3_3');    }
            
        else if ( $(this).attr('href') == '#fcm_159' )
            {   $('#script_help').text('4_1');    }
        else if ( $(this).attr('href') == '#bcm_747' )
            {   $('#script_help').text('4_2');    }
        else if ( $(this).attr('href') == '#bcm_189' )
            {   $('#script_help').text('4_3');    }
            
        else if ( $(this).attr('href') == '#a_122' )
            {   $('#script_help').text('6_1');    }
        else if ( $(this).attr('href') == '#st_111' )
            {   $('#script_help').text('6_2');    }
        else if ( $(this).attr('href') == '#a_620' )
            {   $('#script_help').text('6_3');    }
            
        else if ( $(this).attr('href') == '#bsn_740' )
            {   $('#script_help').text('7_1');    }
        else if ( $(this).attr('href') == '#bsn_818' )
            {   $('#script_help').text('7_2');    }
        else if ( $(this).attr('href') == '#bsn_818_k' )
            {   $('#script_help').text('7_3');    }
            
        else if ( $(this).attr('href') == '#see_more' )
            {   $('#script_help').text('8');    } 
        else if ( $(this).attr('href') == '#bottom_call' )
            {   $('#script_help').text('9');    }        
    });
});

$(function(){
	
	var note = $('#note'),
		
		newYear = true;
	
	// if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
	// 	ts = (new Date()).getTime() + 10*24*60*60*1000;
	// 	newYear = false;
	// }
	ts = new Date(2020, 12, 03, 24, 00, 00);
	//ts = (new Date()).getTime() + 5*24*60*60*1000;
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			var message = "";
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			if(newYear){
				message += "left until the new year!";
			}
			else {
				message += "left to 10 days from now!";
			}
			
			note.html(message);
		}
	});
});
$(function(){
	
	var note = $('#note'),
		
		newYear = true;
	
	// if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
	// 	ts = (new Date()).getTime() + 10*24*60*60*1000;
	// 	newYear = false;
	// }
	ts = new Date(2020, 12, 03, 21, 15, 23);
	//ts = (new Date()).getTime() + 5*24*60*60*1000;
	$('#countdown_2').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			var message = "";
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			if(newYear){
				message += "left until the new year!";
			}
			else {
				message += "left to 10 days from now!";
			}
			
			note.html(message);
		}
	});
});


// При hover'е кнопок
$(function(){
    $('.ex_hover').hover(function(){
        $(this).stop().animate({'bottom' : '-3px'}, 200);
    },function(){
        $(this).stop().animate({'bottom' : '0px'}, 200);
    });
});
$(function(){
    $('#bo_call').hover(function(){
        $(this).stop().animate({'left' : '51%'}, 200);
    },function(){
        $(this).stop().animate({'left' : '50%'}, 200);
    });
});
$(function(){
    $('.modal_ex').hover(function(){
        $(this).stop().animate({'bottom' : '7px'}, 200);
    },function(){
        $(this).stop().animate({'bottom' : '10px'}, 200);
    });
});