(function(){
    var config = {
        apiKey: "AIzaSyBtGYABHzNh41B9M-OJc6yNbqLe8VZxY94",
        authDomain: "voicecollect-5c536.firebaseapp.com",
        databaseURL: "https://voicecollect-5c536.firebaseio.com",
        projectId: "voicecollect-5c536",
        storageBucket: "voicecollect-5c536.appspot.com",
        messagingSenderId: "669484910928"
    };
    firebase.initializeApp(config);
    var database = firebase.database();

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);
            ///writeUserData(firebase.auth().currentUser.uid, email,age, gender, ethnicity);
            //window.location.replace("voicerecord.html");
            console.log('finally logged in');
        }else{
            console.log('not logged in');
            window.location.replace("index.html");
        }
    });
}());