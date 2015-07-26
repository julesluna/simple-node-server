function content1(){
	alert("Press ok to proceed to Index");
}

function content2(){
	alert("Press ok to proceed to Network Protocols");
}

function content3(){
	alert("Press ok to proceed to E-mail");
}

function content4(){
	alert("Press ok to proceed to Search Engines");
}

function content5(){
	alert("Press ok to proceed to Blogging");
}

function content6(){
	alert("Press ok to proceed to Video Streaming");
}

function content7(){
	alert("Press ok to proceed to Microblog Social Networking");
}



function validateForm()
{
	
	var message = document.regForm.message;
	
	//all parameters of if() are function calls (e.g check_userid(uid,5,15) will call the function check_userid(uid, mx,my) below.
	if(check_message(message,10,15)){
		alert('Form Succesfully Submitted');
								window.location.reload();	
	}
	
		return false;
} 
/*Values inside the () are parameters being passed to the function. e.g) function check_userid has PARAMETERS (uid, mx, my) which are the values uid=(value entered by user), mx=5 , my=15 from the function call
check_userid(uid,5,12) above, ^.
*/
function check_userid(uid,mx,my){
	var uid_len = uid.value.length;													//get length (number of words) of users userid input and save to uid_len variable
	
	if(uid_len == 0 || uid_len > my || uid_len < mx){								// if user's input has less than 10 words or more than 100 words or has no input, alert. else, return TRUE, and check next element, password
		alert("User Id should not be empty / length be between "+mx+" to "+my);
		uid.focus();
		return false;
	}
	return true;
}
	