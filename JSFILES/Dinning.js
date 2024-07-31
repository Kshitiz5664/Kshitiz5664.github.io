const firebaseConfig = {
  apiKey: "AIzaSyBz1CNTmK2OhWbsvNaxGmi3DxlKaA-EtzI",
  authDomain: "testing-df111.firebaseapp.com",
  databaseURL: "https://testing-df111-default-rtdb.firebaseio.com",
  projectId: "testing-df111",
  storageBucket: "testing-df111.appspot.com",
  messagingSenderId: "388025832620",
  appId: "1:388025832620:web:2a45323090df0f36847b09",
  measurementId: "G-1XF8GNRR9V"
};
    
    firebase.initializeApp(firebaseConfig);
    
    // Reference Dinning collection
    var Dinning_FormRef = firebase.database().ref('Dinning_Form');
    
    // Listen for form submit
    document.getElementById('booking-form').addEventListener('submit', submitForm);
    
    // Submit form
    function submitForm(e){
      e.preventDefault();
    
      // Get values
      var name = getInputVal('name');
      var phone = getInputVal('phone');
      var check_in = getInputVal('check_in');
      var time = getInputVal('time');
      var members = getInputVal('members');
    
      // Save message
      saveMessage(name, phone, check_in, time, members);
    
      // Show alert
      document.querySelector('.alert').style.display = 'block';
    
      // Hide alert after 3 seconds
      setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
      },3000);
    
      // Clear form
      document.getElementById('booking-form').reset();
    }
    
    // Function to get get form values
    function getInputVal(id){
      return document.getElementById(id).value;
    }
    
    // Save message to firebase
    function saveMessage(name, phone, check_in, time, members){
      var newMessageRef = Dinning_FormRef.push();
      newMessageRef.set({
        name: name,
        phone:phone,
        check_in:check_in,
        time:time,
        members:members
      });
    }