export class DoctorLookup {
  async getDoctorByMedicalIssue(medicalIssue) {
    let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${medicalIssue}&location=or-portland&skip=0&limit=10&user_key=${process.env.API_KEY}`);
    let jsonifiedResponse = await response.json();
    return jsonifiedResponse;
  } catch(error) {
    console.error(`There was an error handling your request: ${error.message}`);
  }
}
