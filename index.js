function createPerson(name, age) {
  return {
    name,
    age,
    friends: [],
  };
}

function addPersonAsFriend(person, friend) {
  person.friends.push(friend);
  return person;
}

function addGreetingToPerson(person, greeting) {
    person.greeting = greeting;
}

module.exports = {
  createPerson,
  addPersonAsFriend,
};
