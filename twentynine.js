const user = {
  id: 123,
  first_name: "Ivan",
  last_name: "Ivanov",
  password: "new password",
  age: 15,
};

const { id, first_name: firstName, last_name: lastName, ...rest } = user;

console.log(firstName, lastName);
