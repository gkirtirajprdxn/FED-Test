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
var result = [];
var selectClub = document.getElementById('select-club');
var index = 0;
var len = 5;
var output = document.getElementById('output');
var display = document.getElementById('display');
var load = document.getElementById('load');
var eventFire = false;

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

// change event on select element
selectClub.addEventListener('change', show);

// show function to display 5 results of match
function show() {

	// clear the array before pushing object into it
	result = [];

	matches.forEach(function (match) {

		// loop through the matches array and push the matched object(match) into result array
		if (selectClub.value == "AVL") {
			if((match.team1 == 'Aston Villa FC') || (match.team2 == 'Aston Villa FC')) {
				result.push(match)
			} 
		}
		if (selectClub.value == "WHU") {
			if((match.team1 == 'West Ham United FC') || (match.team2 == 'West Ham United FC')) {
				result.push(match)
			} 
		}
		if (selectClub.value == "STK") {
			if((match.team1 == 'Stoke City FC') || (match.team2 == 'Stoke City FC')) {
				result.push(match)
			} else { display.innerHTML = 'No Such Records!' }
		}
		if (selectClub.value == "SUN") {
			if((match.team1 == 'Sunderland AFC') || (match.team2 == 'Sunderland AFC')) {
				result.push(match)
			} else { display.innerHTML = 'No Such Records!' }
		}
		if (selectClub.value == "EVE") {
			if((match.team1 == 'Everton FC') || (match.team2 == 'Everton FC')) {
				result.push(match)
			}
		}
		if (selectClub.value == "TOT") {
			if((match.team1 == 'Tottenham Hotspur FC') || (match.team2 == 'Tottenham Hotspur FC')) {
				result.push(match)
			}
		}
		if (selectClub.value == "MCI") {
			if((match.team1 == 'Manchester City FC') || (match.team2 == 'Manchester City FC')) {
				result.push(match)
			}
		}
		if (selectClub.value == "CHE") {
			if((match.team1 == 'Chelsea FC') || (match.team2 == 'Chelsea FC')) {
				result.push(match)
			}
		}
		if (selectClub.value == "WBA") {
			if((match.team1 == 'West Bromwich Albion FC') || (match.team2 == 'West Bromwich Albion FC')) {
				result.push(match)
			} else { display.innerHTML = 'No Such Records!' }
		}
		if (selectClub.value == "LIV") {
			if((match.team1 == 'Liverpool FC') || (match.team2 == 'Liverpool FC')) {
				result.push(match)
			}
		}
		if (selectClub.value == "ARS") {
			if((match.team1 == 'Arsenal FC') || (match.team2 == 'Arsenal FC')) {
				result.push(match)
			}
		}
		if (selectClub.value == "MUN") {
			if((match.team1 == 'Manchester United FC') || (match.team2 == 'Manchester United FC')) {
				result.push(match)
			}
		}
		if (selectClub.value == "NEW") {
			if((match.team1 == 'Newcastle United FC') || (match.team2 == 'Newcastle United FC')) {
				result.push(match)
			}
		}
		if (selectClub.value == "NOR") {
			if((match.team1 == 'Norwich City FC') || (match.team2 == 'Norwich City FC')) {
				result.push(match)
			} 
		}
		if (selectClub.value == "WAT") {
			if((match.team1 == 'Watford FC') || (match.team2 == 'Watford FC')) {
				result.push(match)
			}
		}
		if (selectClub.value == "SWA") {
			if((match.team1 == 'Swansea City FC') || (match.team2 == 'Swansea City FC')) {
				result.push(match)
			} 
		}
		if (selectClub.value == "CRY") {
			if((match.team1 == 'Crystal Palace FC') || (match.team2 == 'Crystal Palace FC')) {
				result.push(match)
			} 
		}
		if (selectClub.value == "LEI") {
			if((match.team1 == 'Leicester City FC') || (match.team2 == 'Leicester City FC')) {
				result.push(match)
			}
		}
		if (selectClub.value == "SOU") {
			if((match.team1 == 'Southampton FC') || (match.team2 == 'Southampton FC')) {
				result.push(match)
			}
		}
		if (selectClub.value == "BOU") {
			if((match.team1 == 'AFC Bournemouth') || (match.team2 == 'AFC Bournemouth')) {
				result.push(match)
			}
		}
	});

	// display is empty
	if (!display.innerHTML) {
	// show first 5 match results
  	for (i=index; i<len; i++) {
	    display.innerHTML += `<div class="clubResult">
		    											<h2>Round: ${result[i].round}</h2>
			    										<h3 class="date">Date: ${result[i].date}</h3>
			    										<h3 class="mscore">${result[i].team1} <span>${result[i].score.ft[0]} : ${result[i].score.ft[1]}</span> ${result[i].team2}</h3>
		    										</div>`
  	}
 	} 
 	// display is not empty
 	else {
 			// empty the output div
   		display.innerHTML = '';
   		load.innerHTML = '';

   		// if loadmore button event fired reset index, len to its original state
   		if (eventFire) {
				index = 0;
				len = 5;
			}
   		for (i=index; i<len; i++) {
	    display.innerHTML += `<div class="clubResult">
		    											<h2>Round: ${result[i].round}</h2>
			    										<h3 class="date">Date: ${result[i].date}</h3>
			    										<h3 class="mscore">${result[i].team1} <span>${result[i].score.ft[0]} : ${result[i].score.ft[1]}</span> ${result[i].team2}</h3>
		    										</div>`
	    }
 	}

 	// create load more button
  var btn = document.createElement("BUTTON"); 
	btn.id = 'load-more';
	btn.innerHTML = 'Load More';

	// click event on load more button
	btn.addEventListener('click', function(e) {
    if(e.target && e.target.id == 'load-more') {
      onloadmore();
		}
	});
	document.getElementById('load').appendChild(btn);

}

// load more button function
function onloadmore() {
	eventFire = true;
	// if (eventFire) { index = 0; len = 5; }
	
	for (i=index; i<len; i++) {
		// create 5 more elements
    if (i >= 5) {
    	display.innerHTML += `<div class="clubResult">
		    											<h2>Round: ${result[i].round}</h2>
			    										<h3 class="date">Date: ${result[i].date}</h3>
			    										<h3 class="mscore">${result[i].team1} <span>${result[i].score.ft[0]} : ${result[i].score.ft[1]}</span> ${result[i].team2}</h3>
		    										</div>`

    	// hide loadmore button when all results are shown									 
    	if (i == result.length-1) {
      	document.getElementById('load-more').style.display = 'none';
      	break;
      }
    }
	}
	index += 5;
  len += 5;
}












