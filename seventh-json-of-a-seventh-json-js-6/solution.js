const param = {
  name: 'A',
  gender: 'male',
  children: [
    { name: 'BBBB', gender: 'female', children: [] },
    { name: 'B', gender: 'male', children: [] },
    { name: 'C', gender: 'male', children: [] },
    { name: 'D', gender: 'male', children: [] },
    { name: 'E', gender: 'male', children: [] },
    { name: 'F', gender: 'male', children: [] },
    { name: 'G', gender: 'male', children: [] },
    {
      name: 'H',
      gender: 'male',
      children: [
        { name: 'I', gender: 'male', children: [] },
        { name: 'J', gender: 'male', children: [] },
        { name: 'K', gender: 'male', children: [] },
        { name: 'L', gender: 'male', children: [] },
        { name: 'M', gender: 'male', children: [] },
        { name: 'N', gender: 'male', children: [] },
        {
          name: 'O',
          gender: 'male',
          children: [],
        },
      ],
    },
  ],
};
function nameFunction(params) {
  const checkSeven = (person) => {
    if (person.gender === 'male') {
      const sonsOfThePerson = person.children.filter((child) => child.gender === 'male');
      if (sonsOfThePerson.length >= 7) {
        return sonsOfThePerson[6];
      }
      return null;
    }
  };
  const father = checkSeven(param);
  const son = checkSeven(father);
  return son ? son.name : 'No seventh son of a seventh son';
}
console.log(nameFunction(param));
