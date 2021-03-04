var firebaseConfig = {
    apiKey: "AIzaSyCB7IWsWZlrzKlfVitaJDF-M1OB4wUvTHc",
    authDomain: "contactform-10e87.firebaseapp.com",
    databaseURL: "https://contactform-10e87-default-rtdb.firebaseio.com",
    projectId: "contactform-10e87",
    storageBucket: "contactform-10e87.appspot.com",
    messagingSenderId: "939708575117",
    appId: "1:939708575117:web:c6f56eabe02904a2a961c4",
    measurementId: "G-7TW2TNB78M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref('messages');

document.getElementById("contactForm").addEventListener('submit', formSubmit);

function formSubmit(e){
    e.preventDefault();

    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // submit form to database
   console.log(saveMessagesToFirebase(name, email, phone, message));
}

// get all input value
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save messages to firebass
function saveMessagesToFirebase(name, email, phone, message){
    newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        message: message
    });
}
