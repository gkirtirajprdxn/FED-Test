/* Author: 

*/

// LOGIN Start

// Static User Credentials
var userData = [
	{'username': 'test',
	 'password': 'test123'
	}
]

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

// console.log(window.location.pathname)

// Login End

// Index Start

// check user login for all pages except login page
if (window.location.pathname != '/C:/Users/Kirtiraj/Desktop/PRDXN%20training/Javascript/EPL%20Football/login.html') {

	// check if user logged in
	for (var i=0; i<userData.length; i++){
		if (localStorage.getItem(userData[i].username) != userData[i].password){
	    //redirect to login page
	    window.location.href = 'login.html';
		}
		else{
	    //show validation message
	    console.log('Login Successful!');
		}
	}

	// logout
	var logout = document.getElementById('logout');
	logout.addEventListener('click', function(){
		if (confirm('Are you sure you want to logout?')) {
			localStorage.clear();
			window.location.href = './login.html';
		} else {
			return false;
		}
	});

} else {
	// add event listerner on form and pass login()
	var form = document.querySelector('form');
	form.addEventListener('submit', function(e){
		e.preventDefault();
		login();
	});

}

// Index End

// Club List Start

var clubs;
var matches;

// fetch club data
fetch('https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.clubs.json')
.then((res) => res.json())
.then((data) => {
	// fetched club data into clubs array
	clubs = data.clubs;

	// populate select options
	clubs.forEach(function(club){
    selectClub.innerHTML += '<option value="' + club['code'] + '">' + club['name'] + '</option>';
	});

});

// fetch match data
fetch('https://raw.githubusercontent.com/openfootball/football.json/master/2019-20/en.1.json')
.then((res) => res.json())
.then((data) => {
	// fetched matches data into matches array
	matches = data.matches;
});













