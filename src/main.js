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
        console.log(response.data);
        let firstName = response.data[i].profile.first_name;
        let lastName = response.data[i].profile.last_name;
        $('#output').append(`<p>${firstName} ${lastName}</p>`);
      }

    }
  });
});
