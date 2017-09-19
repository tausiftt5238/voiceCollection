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

    //Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    var email;
    var pass;
    var age;
    var gender;
    var ethnicity;


    //Add login event
    btnLogin.addEventListener('click' , e => {
        email =txtEmail_login.value;
        pass = txtPassword_login.value;
        const auth = firebase.auth();
        //Sign in
        const promise = auth.signInWithEmailAndPassword(email,pass);
        promise.catch(e => console.log(e.message));
        window.location.replace("voicerecord.html");
    });

    //Add signup event
    btnSignUp.addEventListener('click' , e => {
        console.log('sign up clicked');
        email =txtEmail_signup.value;
        pass = txtPassword_signup.value;
        age = txtAge.value;
        gender = txtGender.value;
        ethnicity = txtEthnicity.value;
        const auth = firebase.auth();
        //Sign in
        const promise = auth.createUserWithEmailAndPassword(email,pass);
        promise.catch(e => alert("Login failed"));

        writeUserData(email,age,gender,ethnicity);
    });

    //Add logout event
    /*btnLogout.addEventListener('click', e =>{
       firebase.auth().signOut();
    });*/

    function writeUserData(userId, email, age, gender, ethnicity) {
        firebase.database().ref('users/' + userId).set({
            email : email,
            age: age,
            gender : gender,
            ethnicity : ethnicity
        });
    }

    firebase.auth().onAuthStateChanged(firebaseUser => {
       if(firebaseUser){
           console.log(firebaseUser);
           writeUserData(firebase.auth().currentUser, email,age, gender, ethnicity);
           window.location.replace("voicerecord.html");
       }else{
           console.log('not logged in');
       }
    });
}());