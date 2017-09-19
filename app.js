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
        const email =txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //Sign in
        const promise = auth.signInWithEmailAndPassword(email,pass);
        promise.catch(e => console.log(e.message));
    });
}());