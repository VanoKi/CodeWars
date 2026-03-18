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
      if (person.children.filter((child) => child.gender === 'male').length <= 7) {
        return true;
      }
      return false;
    }
  };
  return checkSeven(param);
}
console.log(nameFunction(param));
