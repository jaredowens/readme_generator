// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) { 
  if (license === 'none') {
    return ''
  } else {
    return `![badge](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[MIT](https://mit-license.org/)`
  } else if (license === 'Apache') {
    return `[Apache](https://www.apache.org/licenses/LICENSE-2.0)`
  } else if (license === 'GNU') {
    return `[GNU](https://www.gnu.org/licenses/gpl-3.0.en.html)`
  } else if (license === 'MPL') {
    return `[MPL](https://www.mozilla.org/en-US/MPL/2.0/)`
  } else if (license === 'AGPL') {
    return `[AGPL](https://opensource.org/license/agpl-v3)`
  } else {
    return ('')
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license === 'MIT') {
    return `This project is licensed under MIT.`
  } else if (license === 'Apache') {
    return `This project is licensed under Apache.`
  } else if (license === 'GNU') {
    return `This project is licensed under GNU.`
  } else if (license === 'MPL') {
    return `This project is licensed under MPL.`
  } else if (license === 'AGPL') {
    return `This project is licensed under AGPL.`
  } else {
    return ('')
  }
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
 return `# ${data.title}
 ${renderLicenseBadge(data.license)}

 ## Description
 ${data.description}

 ## Table of Contents
 - [Description](#description)
 - [Installation]($installation)
 - [Usage](#usage)
 - [License](#license)
 - [Contributing](#contributing)
 - [Tests](#tests)
 - [Question]($questions)
 - [Additional Info](#additional-info)

 ## Installation
 ${data.installation}

 ## Usage
 ${data.usage}

 ## Credits
 ${data.contributing}

 ## License
 ${renderLicenseSection(data.license)}\n
 ${renderLicenseLink(data.license)}

 ## About
 ${data.email}\n
 ${data.GitHub}

 ## Tests
 ${data.tests}
 `
}

export default generateMarkdown;