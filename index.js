var count;

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

function like(){
	sync();
	count += 1;
	firebase.database().ref().set({
		count: count
	});
}

function sync(){
  	firebase.database().ref().on('value', syncData);
  	console.log("a:" + count);
}

function syncData(data){
	count = data.val().count;
	console.log("b:" + data.val().count);
}