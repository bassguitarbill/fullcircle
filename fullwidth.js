var state = "fw";

function bubble(charValue){
	if ((charValue > 40) && (charValue < 127)){
			fwchars = fwchars + String.fromCharCode(charValue + 0x2430);
		} 
	return character;
}

function split(string){
	var chars = string.split("");
	var fwchars = "";
	var charValue;
	for(var i=0; i<chars.length; i++){
		charValue = chars[i].charCodeAt();
		if (state === ("fw")){
			if ((charValue > 32) && (charValue < 127)){
				fwchars = fwchars + String.fromCharCode(charValue + 0xFEE0);
			} else {
				fwchars = fwchars + chars[i];
			}
		} else if (state === "bubble"){
			if (charValue < 48){
				fwchars = fwchars + chars[i];
			}else if (charValue == 48){
				fwchars = fwchars + String.fromCharCode(0x24EA)
			} else if (charValue < 58){
				fwchars = fwchars + String.fromCharCode(charValue + 0x242F);
			} else if (charValue < 65){
				fwchars = fwchars + chars[i];
			} else if (charValue < 91){
				fwchars = fwchars + String.fromCharCode(charValue + 0x2475);
			} else if (charValue < 97){
				fwchars = fwchars + chars[i];
			} else if (charValue < 123){
				fwchars = fwchars + String.fromCharCode(charValue + 0x246F);
			} else {
				fwchars = fwchars + chars[i];
			}
		} else if (state === "deutsche"){
			if (charValue < 65){
				fwchars = fwchars + chars[i];
			} else if(charValue < 91){
				fwchars = fwchars + String.fromCharCode(charValue + 55284);
			} else if (charValue < 97){
				fwchars = fwchars + chars[i];
			} else if (charValue < 123){
				fwchars = fwchars + String.fromCharCode(charValue + 55310);
			} else {
				fwchars = fwchars + chars[i];
			}
		}
	}
	document.getElementById("demo").innerHTML=fwchars;
	return fwchars;
}

document.getElementById("input").onkeyup=function(){
  split(document.getElementById("input").value)
};
document.getElementById("fw").onclick=function(){
	state = "fw";
  split(document.getElementById("input").value)
};
document.getElementById("bubble").onclick=function(){
	state = "bubble";
  split(document.getElementById("input").value)
};
document.getElementById("deutsche").onclick=function(){
	state = "deutsche";
	split(document.getElementById("input").value);
};
document.getElementById("input").focus();
