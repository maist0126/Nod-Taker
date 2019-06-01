(function() {
	var firebaseConfig = {
		apiKey: "AIzaSyC2XbcwWxo3s23HjvPYD_dq94VyMjzh6lU",
		authDomain: "mid-gradwork.firebaseapp.com",
		databaseURL: "https://mid-gradwork.firebaseio.com",
		projectId: "mid-gradwork",
		storageBucket: "mid-gradwork.appspot.com",
		messagingSenderId: "449677305537",
		appId: "1:449677305537:web:d47f7aad8736334b"
	};
	firebase.initializeApp(firebaseConfig);
}());

function setting(){
	firebase.database().ref().set({
		count: 0
	});
}
