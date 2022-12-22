const email = "ivanov.oleg@pochta.com";

const emailSplitter = (link) => {
  const elOfEmail = link.split("@");
  return {
    username: elOfEmail[0],
    domain: elOfEmail[1],
  };
};

console.log(emailSplitter(email));
