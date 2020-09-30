/* Author: 

*/

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



















