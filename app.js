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

    //Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    //Add login event
    btnLogin.addEventListener('click' , e => {
        const email =txtEmail_login.value;
        const pass = txtPassword_login.value;
        const auth = firebase.auth();
        //Sign in
        const promise = auth.signInWithEmailAndPassword(email,pass);
        promise.catch(e => console.log(e.message));
        window.location.replace("voicerecord.html");
    });

    //Add signup event
    btnSignUp.addEventListener('click' , e => {
        console.log('sign up clicked');
        const email =txtEmail_signup.value;
        const pass = txtPassword_signup.value;
        const age = txtAge.value;
        const gender = txtGender.value;
        const ethnicity = txtEthnicity.value;
        const auth = firebase.auth();
        //Sign in
        const promise = auth.createUserWithEmailAndPassword(email,pass);
        promise.catch(e => alert("Login failed"));
    });

    //Add logout event
    /*btnLogout.addEventListener('click', e =>{
       firebase.auth().signOut();
    });*/

    firebase.auth().onAuthStateChanged(firebaseUser => {
       if(firebaseUser){
           console.log(firebaseUser);
           window.location.replace("voicerecord.html");
       }else{
           console.log('not logged in');
       }
    });
}());