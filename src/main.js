import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import img from './file.png';
import { DoctorLookup } from './doctor-lookup-service.js';

$(document).ready(function() {

  $('form').submit(function(event) {
    event.preventDefault();

    let medicalIssue = $('#medical-issue').val();
    $('#medical-issue').val("");

    makeApiCall();

    async function makeApiCall() {
      let doctorLookup = new DoctorLookup();
      const response = await doctorLookup.getDoctorByMedicalIssue(medicalIssue);
      getElements(response);
    }

    function getElements(response) {
      $('#output').show();
      $('.doctor-count').text(response.data.length);

      // QUERY BY MEDICAL ISSUE
      for (let i = 0; i < response.data.length; i ++) {
        let firstName = response.data[i].profile.first_name;
        let lastName = response.data[i].profile.last_name;
        let name = response.data[i].practices[0].name;
        let street = response.data[i].practices[0].visit_address.street;
        let street2 = response.data[i].practices[0].visit_address.street2;
        let city = response.data[i].practices[0].visit_address.city;
        let state = response.data[i].practices[0].visit_address.state;
        let zip = response.data[i].practices[0].visit_address.zip;
        $('#output').append(`<div> <h6>${firstName} ${lastName}</h6> <p>${name}</p> <p>${street}, ${street2} ${city}, ${state} ${zip}</p> </div> <hr>`);
        // let number = response.data[i].practices[0].phones[1];
        // let website = response.data[i].practices[0].website;
        // let acceptsNewPatients = response.data[i].practices[0].accepts_new_patients;

        // $('.number').text(`${number}`);
        // $('.website').text(`${website}`);
        // if (acceptsNewPatients === true) {
        //   $('.accepts-new-patients').text(`${name} is accepting new patients.`);
        // } else {
        //   $('.accepts-new-patients').text(`${name} is not accepting new patients.`);
        // }
      }

    }
  });
});
