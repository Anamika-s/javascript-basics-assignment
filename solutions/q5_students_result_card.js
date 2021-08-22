// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here
// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here
const student = [
    {name:'A',subjects :[{subject:'Grammer',marks:88},{subject:'Accounts',marks:92}]},
    {name:'B',subjects :[{subject:'Grammer',marks:78},{subject:'Accounts',marks:78}]},
    {name:'C',subjects :[{subject:'Grammer',marks:95},{subject:'Accounts',marks:94}]},
    {name:'D',subjects :[{subject:'Grammer',marks:89},{subject:'Accounts',marks:48}]},
    {name:'E',subjects :[{subject:'Grammer',marks:81},{subject:'Accounts',marks:67}]},
    {name:'F',subjects :[{subject:'Grammer',marks:87},{subject:'Physics',marks:78}]},
    {name:'G',subjects :[{subject:'Grammer',marks:83},{subject:'Physics',marks:68}]},
    {name:'H',subjects :[{subject:'Grammer',marks:88},{subject:'Physics',marks:78}]},
    {name:'I',subjects :[{subject:'Grammer',marks:80},{subject:'Physics',marks:88}]},
    {name:'J',subjects :[{subject:'Grammer',marks:87},{subject:'Physics',marks:68}]}
  ];
  function scoreCard(list)
  {
     list.forEach(element => {
      
      var percentage=((element.subjects[0].marks+element.subjects[1].marks)*100)/200;
      console.log("Name : "+element.name+", Percentage : "+percentage+"%");
      
    });
  }
  scoreCard(student);