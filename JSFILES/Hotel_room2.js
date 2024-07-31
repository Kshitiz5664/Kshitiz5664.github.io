// Initialize Firebase (ADD YOUR OWN DATA)
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
    
    // Reference Room_Booking collection
    var Room_BookingRef = firebase.database().ref('Room_Booking');
    
    // Listen for form submit
    document.getElementById('booking-form').addEventListener('submit', submitForm);
    
    // Submit form
    function submitForm(e){
      e.preventDefault();
    
      // Get values
      var name = getInputVal('name');
      var phone = getInputVal('phone');
      var check_in = getInputVal('check_in');
      var check_out = getInputVal('check_out');
      var room_type = getInputVal('room_type');
    
      // Save message
      saveMessage(name, phone, check_in, check_out, room_type);
    
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
    function saveMessage(name, phone, check_in, check_out, room_type){
      var newMessageRef = Room_BookingRef.push();
      newMessageRef.set({
        name: name,
        phone:phone,
        check_in:check_in,
        check_out:check_out,
        room_type:room_type
      });
    }