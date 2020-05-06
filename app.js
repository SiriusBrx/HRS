// Initialize Firebase


  // Your web app's Firebase configuration
   var firebaseConfig = {
    apiKey: "AIzaSyATSN52kwZsjges5ZchSM3yO62k2MdJ6uM",
    authDomain: "hrs0-be700.firebaseapp.com",
    databaseURL: "https://hrs0-be700.firebaseio.com",
    projectId: "hrs0-be700",
    storageBucket: "hrs0-be700.appspot.com",
    messagingSenderId: "263476876928",
    appId: "1:263476876928:web:f67bc5827a50e362593865"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);

const docRef = firestore.collection("Staff_Information");

const inputTextField0 = document.querySelector("#SID");
const inputTextField1 = document.querySelector("#bdate");
const inputTextField2 = document.querySelector("#fname");
const inputTextField3 = document.querySelector("#lname");
const inputTextField4 = document.querySelector("#salary");
const inputTextField5 = document.querySelector("#elv");


const saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click", function () {

    const textToSave0 = inputTextField0.value;
	const textToSave1 = inputTextField1.value;
	const textToSave2 = inputTextField2.value;
	const textToSave3 = inputTextField3.value;
	const textToSave4 = inputTextField4.value;
	const textToSave5 = inputTextField5.value;


    console.log("Record is going to Firestore");
    docRef.add({

       StaffID: textToSave0,
	   Birth_Date: textToSave1,
	   First_Name: textToSave2,
	   Salary: textToSave4,
	   Education_Level: textToSave5,
	   Status:Active


    }).then(function() {
        console.log("Data Inserted!");
    }).catch(function(error) {
        console.log("Got an error: ", error)
    });

})