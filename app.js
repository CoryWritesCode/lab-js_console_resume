let name = 'Cory Cunningham';

console.log(`Name: ${name.toUpperCase()}`);

let company = 'Shipt';
let job = 'QA Analyst'
let describe = 'I am left handed';

function displayPosition(companyName, jobTitle, description) {
  console.log(`Company: ${companyName}.`);
  console.log(`Career: ${jobTitle}`);
  console.log(`Description: ${description}`);
};

displayPosition(company, job, describe);

console.log(' ');

var myInterests = [['* Programing'], ['* Playing Video Games'], ['* Being with family'], ['* Watching funny tv']];

function displaySkill(interest) {
  for (var i = 0; i < interest.length; i++) {
    console.log(`${interest[i]}`);
  };
};

console.log(`My interests:`);
displaySkill(myInterests);

console.log(' ');

var prevExp = [['Coffee Shop Manager.'], ['Bachelor of Arts in Bible and Theology.'], ['Drive to learn and grow in everything I do... See what I did there?']];

function displayExp(experience) {
  for (var i = 0; i < experience.length; i++) {
    console.log('* ' + `${experience[i]}`);
  };
};

console.log(`My previous experience:`);
displayExp(prevExp);

console.log(' ');

var mySkills = [['Ruby'], ['Playing Guitar'], ['* HTML'], ['* Eating'], ['Gif placement'], ['* Playing Games']];

function displaySkill(skill) {
  for (var i = 0; i < skill.length; i++) {
    if (skill[i][0].includes('*')) {
      console.log(`${skill[i]}`);
    } else {
      console.log('* BAM: ' + `${skill[i]}`);
    };
  };
};

console.log(`My skills:`);
displaySkill(mySkills)
