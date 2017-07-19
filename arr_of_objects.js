// A javascript program to use array of objects

var people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
];

for(var i=0; i<people.length; i++){
  console.log(people[i].name+'\n'+people[i].family["mother"]);
}

//console.log(people[0]);