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
    var initialize = false;

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);
            ///writeUserData(firebase.auth().currentUser.uid, email,age, gender, ethnicity);
            //window.location.replace("voicerecord.html");
            if(!initialize){
                initialize = true;
                var userId = firebase.auth().currentUser.uid;
                var start_index;
                console.log('users/' + userId+'/latest/index');
                firebase.database().ref('users/' + userId+'/latest/index').once('value').then(function(snapshot) {
                    start_index = snapshot.val();
                    if(start_index == undefined) start_index = (parseInt(Math.random()*174)) % 174;
                    else start_index++;
                    LoadFile(start_index);
                });
            }
            console.log('finally logged in');
        }else{
            console.log('not logged in');
            window.location.replace("index.html");
        }
    });

}());