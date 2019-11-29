import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import img from './file.png';
import { DoctorLookup } from './doctor-lookup-service.js';

$(document).ready(function() {

  $('form').submit(function(event) {
    event.preventDefault();

    let query = $('#query').val();
    $('#query').val("");

    makeApiCall();

    async function makeApiCall() {
      let doctorLookup = new DoctorLookup();
      const response = await doctorLookup.getDoctor(query);
      getElements(response);
    }

    function getElements(response) {
      $('#result').show();
      $('.count').text(response.data.length);
      $('.doctors').empty();

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
        let number = response.data[i].practices[0].phones[0].number;
        let acceptsNewPatients = response.data[i].practices[0].accepts_new_patients;
        let website = response.data[i].practices[0].website;
        if (acceptsNewPatients === true) {
          acceptsNewPatients = `${firstName} ${lastName} is accepting new patients.`;
        } else {
          acceptsNewPatients = `${firstName} ${lastName} is not accepting new patients.`;
        }
        $('.doctors').append(`<hr> <div> <h6>${firstName} ${lastName}</h6> <p>${name}</p> <p>${street}, ${street2} ${city}, ${state} ${zip}</p> <p>☎️ <a href='tel:${number}'>${number}</a></p> <p>ℹ️ <a href='${website}' target='_blank'>Website</a></p> <p>${acceptsNewPatients}</p> </div>`);
      }

    }
  });
});
