/*
   _ ____  _           ____            _       _   
  (_)  _ \| |_   _ ___/ ___|  ___ _ __(_)_ __ | |_ 
  | | |_) | | | | / __\___ \ / __| '__| | '_ \| __|
  | |  __/| | |_| \__ \___) | (__| |  | | |_) | |_ 
 _/ |_|   |_|\__,_|___/____/ \___|_|  |_| .__/ \__|
|__/                                    |_|        
jPlusScript v1.0.0
*/
function setCookie($cookieName, $cookieValue, $expiresDay) {
	var $date = new Date();
	$date.setTime($date.getTime() + ($expiresDay * 86400000));
	var $expires = 'expires' + $date.toUTCString();
	document.cookie = $cookieName + '=' + $cookieValue + '; ' + $expires;
}

function getCookie($cookieName) {
	var $cookieName = $cookieName + '=';
	var $cookieArray = document.cookie.split(';');
	for (var i = 0; i < $cookieArray.length; i++) {
		var $cookie = $cookieArray[i];
		while ($cookie.charAt(0) == ' ') {
			$cookie = $cookie.substring(1);
		}
		if ($cookie.indexOf($cookieName) == 0) {
			return $cookie.substring($cookieName.length, $cookie.length);
		}
	}
	return '';
}

function deleteCookie($cookieName) {
	document.cookie = $cookieName + '=;expires=Wed; 01 Jan 1970'
}

String.prototype.replaceAll = function($search, $replacement) {
	return this.replace(new RegExp($search, 'g'), $replacement);
};

String.prototype.toBoolean = function() {
	switch (this.toLowerCase()) {
		case 'true':
		case 'on':
		case 'yes':
		case 1:
		case '1':
			return true;
			break;
		case 'false':
		case 'off':
		case 'no':
		case 0:
		case '0':
			return false;
			break;
		default:
			return this;
			break;
	}
};

Array.prototype.randomItem = function() {
	return this[Math.floor(Math.random() * this.length)];
};
String.prototype.hashCode = function() {
	var $hash = 0,
		$i, $chr, $len;
	if (this.length === 0) return $hash;
	for ($i = 0, $len = this.length; $i < $len; $i++) {
		$chr = this.charCodeAt($i);
		$hash = (($hash << 5) - $hash) + $chr;
		$hash |= 0;
	}
	return $hash;
};

function isMobile() {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		return true;
	} else {
		return false;
	}
}

function randomColor() {
	var $color = '#';
	for (var $i = 0; $i < 6; $i++) {
		$color += '0123456789ABCDEF'.split('')[Math.floor(Math.random() * 16)];
	}
	return $color;
}

(function() {
	var $consoleLog = console.log;
	var $consoleError = console.error;
	console.logs = [];
	console.errors = [];
	console.log = function($message) {
		console.logs.push($message)
		$consoleLog.apply(console, arguments);
	};
	console.error = function($message) {
		console.errors.push($message)
		$consoleError.apply(console, arguments);
	};
})();
