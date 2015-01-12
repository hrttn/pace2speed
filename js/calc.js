function parse_time(pace) {
	var time = pace.split(':');
	return Number(time[0]*60) + Number(time[1]);
}

function parse_time_long(pace) {
	var time = pace.split(':');
	return Number(time[0]*3600) + Number(time[1]*60) + Number(time[2]);
}

function display_pace(time_in_seconds) {
	
	if(time_in_seconds >= 3600) {
	
		var hours = Math.floor(time_in_seconds/3600);
		var minutes = Math.floor((time_in_seconds - (hours * 3600))/60);
		var seconds = Math.round(time_in_seconds - (hours * 3600) - (minutes * 60));
		
		if (minutes < 10){
			minutes = '0' + minutes;
		}
		
		if (seconds < 10){
			seconds = '0' + seconds;
		}
		var time_as_pace = hours + ':' + minutes + ':' + seconds;
		
		return time_as_pace;
		
	} else if (time_in_seconds < 60) {
		
		return time_in_seconds;
		
	} else {
		var minutes = Math.floor(time_in_seconds/60);
		var seconds = time_in_seconds - (minutes * 60);
		
		if (minutes < 10){
			minutes = '0' + minutes;
		}
		
		if (seconds < 10){
			seconds = '0' + seconds;
		}
		var time_as_pace = minutes + ':' + seconds;
		
		return time_as_pace;
	}
}


var pace_mile = document.getElementById("pace_mile");
var pace_km = document.getElementById("pace_km");
var speed_mph = document.getElementById("speed_mph");
var speed_kph = document.getElementById("speed_kph");

function pace_k_calc(pace_k, sender){
	
	if(sender != 'km'){
		pace_km.value = display_pace(pace_k);
	}
	
	if (pace_k > 0) {
		
		if(sender != 'mile'){
		  var pace_m = Math.round(pace_k * 1.609);
		  pace_mile.value = display_pace(pace_m);
		}
		
		if(sender != 'mph') {
		  speed_mph.value = ((3600 / pace_k) / 1.609).toFixed(2);
		}
		
		if(sender != 'kph') {
		  speed_kph.value = (3600 / pace_k).toFixed(2);
		}
		
		if(sender != '1500') {
			var time_15 = pace_k * 1.5;
			time_1500.value = display_pace(time_15);
		}
		
		if(sender != '3000') {
		  var time_3 = pace_k * 3;
		  time_3000.value = display_pace(time_3);
		 }
		
		if(sender != '5000') {
		  var time_5 = pace_k * 5;
		  time_5000.value = display_pace(time_5);
		}
		
		if(sender != '10000') {
		  var time_10 = pace_k * 10;
	  	time_10000.value = display_pace(time_10);
		}
		
		if(sender != 'half') {
		  var time_hm = pace_k * 21.1;
		  time_half.value = display_pace(time_hm);
		}
		
		if(sender != 'marathon') {
		var time_full = pace_k * 42.195;
		time_marathon.value = display_pace(time_full);
		}
	}
}


pace_mile.onkeyup = function(){
	var pace_m = +Number(parse_time(pace_mile.value)) || 0;
	var pace_k = Math.round(pace_m / 1.609);
	sender = 'mile';
	pace_k_calc(pace_k, sender);
	
	/*if (pace_m > 0) {
		pace_k = Math.round(pace_m / 1.609);
		pace_km.value = display_pace(pace_k);
		
		speed_mph.value = (3600 / pace_m).toFixed(2);
		speed_kph.value = (3600 / pace_k).toFixed(2);
	}*/
};

pace_km.onkeyup = function(){
	var pace_k = +Number(parse_time(pace_km.value)) || 0;
	var sender = 'km'
	pace_k_calc(pace_k, sender);

};

speed_mph.onkeyup = function(){
	var speed_m = +Number(speed_mph.value) || 0;
	var pace_k = Math.round((3600 / speed_m) / 1.609);
	var sender = 'mph';
	pace_k_calc(pace_k, sender);
	
	/*if (speed_m > 0) {
		pace_m = Math.round(3600 / speed_m);
		pace_mile.value = display_pace(pace_m);
		
		pace_k = Math.round(pace_m / 1.609);
		pace_km.value = display_pace(pace_k);
		
		speed_kph.value = (speed_m * 1.609).toFixed(2);
	}*/
};

speed_kph.onkeyup = function(){
	var speed_k = +Number(speed_kph.value) || 0;
	var pace_k = Math.round(3600 / speed_k);
	var sender = 'kph';
	pace_k_calc(pace_k, sender);
	
	/*if (speed_k > 0) {
		pace_k = Math.round(3600 / speed_k);
		pace_km.value = display_pace(pace_k);
		
		pace_m = Math.round(pace_k * 1.609);
		pace_mile.value = display_pace(pace_m);
		
		speed_mph.value = (speed_k / 1.609).toFixed(2);
	}*/
};


time_1500.onkeyup = function(){
	var time_15 = +Number(parse_time(time_1500.value)) || 0;
	var pace_k = Math.round(time_15 / 1.5);
	sender = '1500';
	pace_k_calc(pace_k, sender);
};

time_3000.onkeyup = function(){
	var time_3 = +Number(parse_time(time_3000.value)) || 0;
	var pace_k = Math.round(time_3 / 3);
	sender = '3000';
	pace_k_calc(pace_k, sender);
};

time_5000.onkeyup = function(){
	var time_5 = +Number(parse_time(time_5000.value)) || 0;
	var pace_k = Math.round(time_5 / 5);
	sender = '5000';
	pace_k_calc(pace_k, sender);
};

time_10000.onkeyup = function(){
	var time_10 = +Number(parse_time(time_10000.value)) || 0;
	var pace_k = Math.round(time_10 / 10);
	sender = '10000';
	pace_k_calc(pace_k, sender);
};


time_half.onkeyup = function(){
	var time_hm = +Number(parse_time_long(time_half.value)) || 0;
	var pace_k = Math.round(time_hm / 21.1);
	sender = 'half';
	pace_k_calc(pace_k, sender);
};

time_marathon.onkeyup = function(){
	var time_full = +Number(parse_time_long(time_marathon.value)) || 0;
	var pace_k = Math.round(time_full / 42.195);
	sender = 'marathon';
	pace_k_calc(pace_k, sender);
};
