/* Author: 

*/

// LOGIN Start

// Static User Credentials
var userData = [
	{'username': 'test',
	 'password': 'test123'
	}
]

// add event listerner on form and pass login()
var form = document.querySelector('form');
form.addEventListener('submit', function(e){
	e.preventDefault();
	login();
});

var user = document.getElementById('username');
var pass = document.getElementById('password');
var error = document.getElementById('errormsg');

// user login function
function login(){
	for (var i=0; i<userData.length; i++) {
		if ((user.value == userData[i].username) && (pass.value == userData[i].password)) {
			// set username and password into local Storage
			localStorage.setItem(user.value, pass.value) 
			// redirect to index.html
			window.location.href = 'index.html';
			return true;
		} else {
			error.style.display = 'block';
			return false;
		};
	};
};

// Login End

















