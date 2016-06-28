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
			return true;
			break;
		case 'false':
		case 'off':
		case 'no':
			return false;
			break;
		default:
			return this;
			break;
	}
};

function isMobile() {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		return true;
	} else {
		return false;
	}
}
