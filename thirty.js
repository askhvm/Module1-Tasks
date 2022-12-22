let user = {
    id: 123,
    first_name: "Ivan",
    last_name: "Ivanov",
    password: "new password",
    age: 15
}


let another = Object.assign({},user)
delete another.password
console.log(another)