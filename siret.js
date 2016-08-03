(function(w){
	w.checkLuhn = function(val){
		var len = val.length;
		var total = 0;
		for(var i = 1; i <= len; i++){
			chiffre = val.substr(-i,1);
			if(i % 2 == 0) {
				total += 2 * chiffre;
				if((2 * chiffre) >= 10) total -= 9;
			}
			else{
				total += chiffre;
			}
		}
		return !!(total % 10 == 0);
	};
	w.checkSiret = function(siret) {
		return w.checkLuhn(siret);
	};
	w.checkSiren = function(siren) {
		return w.checkLuhn(siren);
	};
	w.siret2siren = function(siret) {
		return siret.substr(0,9);
	};
	w.siren2tvaFR = function(siren) {
		return "FR" + (( 12 + 3 * ( siren % 97 ) ) % 97 ) + siren;
	};
})(window);