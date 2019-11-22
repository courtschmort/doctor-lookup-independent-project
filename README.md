# Doctor Lookup

#### Asynchrony and APIs Independent Project for Epicodus; November 22, 2019

#### By Courtney Schild

## Description

This is a website that uses the [BetterDoctor API](https://developer.betterdoctor.com/) to facilitate finding a doctor in your city who can treat your medical issue. Just enter a medical issue into a form, submit it, and receive a list of doctors, including contact information and whether or not the doctor is accepting new patients.

## Specs

<!-- This is another way to write out specs:
 * Spec:
  * Input:
  * Output:  -->

| Behavior (Our program should handle:) | Example Input (When it receives:) | Example Output (It should return:) |
| ----------- | ----------- | ----------- |
| A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query. | [medical issue] | [a list of doctors in the Portland area] |
| A user should be able to enter a name to receive a list of doctors in the Portland area that fit the search query. | [name] | [a list of doctors in the Portland area] |
| If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients. | [query] | [first name, last name, address, phone number, website and whether or not the doctor is accepting new patients] |
| If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is. | [query] | "There was an error handling your request: [error message]" |
| If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. | [query] | "There are no doctors that meet your search criteria." |

## Setup/Installation Requirements

This webpage may be viewed on any web browser and edited by following the instructions below to clone or download the repository to your computer.

**Click [here](https://courtschmort.github.io/doctor-lookup-independent-project/) to open the GitHub Pages website.**

#### Cloning

###### From GitHub
1. Click the **Clone or download** dropdown button.
2. Within the dropdown, click the **Download ZIP** button.

###### From the command-line interface (CLI)
1. To change the directory, type `cd Desktop` after the command prompt.
2. To clone the repository to your Desktop, type `git clone https://github.com/courtschmort/doctor-lookup-independent-project.git` after the command prompt. (This web URL can be located within the **Clone or download** dropdown button in GitHub.)

For more information about cloning repositories available on GitHub, click [here](https://help.github.com/en/articles/which-remote-url-should-i-use).

#### Install webpack

###### From the CLI
3. Type `npm install` to install the dependencies in the local node_modules folder.
4. Type `npm run build` (or `npm build`) to run custom scripts specified in package.json, or `npm run start` to do the same and use live reloading on a web development server at http://localhost:8080/.

#### API Keys
5. This website uses an API key from [BetterDoctor API](https://developer.betterdoctor.com/). Sign up for a new account and create a new application, then copy the API credentials to your pasteboard.
6. Type `touch .env` in the CLI to create a new file in the root directory of the repository, then paste the API credentials into an `API_KEY` within the .env file.

## Known Bugs

There are no known bugs at this time.

## Support and Contact Details

If you have any questions, please email me at courtneyschild@gmail.com.

Find me on LinkedIn and GitHub:

* [Connect with me](https://www.linkedin.com/in/courtneyschild/) on LinkedIn
* [Follow me](https://github.com/courtschmort) or [watch this repository](https://github.com/courtschmort/doctor-lookup-independent-project.git) on GitHub

<!-- ## Product Roadmap

In the future, I plan to include the following key features:
* Key feature 1
* Key feature 2
* Key feature 3 -->

## Technologies Used

* Markdown
* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery
* JSON
* Jest
* webpack
* npm
* BetterDoctor API

## License

This website is licensed under the MIT license.

Copyright &copy; 2019 **Courtney Schild**
