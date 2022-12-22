let user = {
  first_name: "Ivan",
  last_name: "Ivanov",
  email: "ivanov@pochta.com",
};

const emailConcater = (obj) => {
  return `${obj.last_name} ${obj.first_name} ${obj.email}`;
};

console.log(emailConcater(user));
