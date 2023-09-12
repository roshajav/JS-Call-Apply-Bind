import "./styles.css";

import "./styles.css";

var employee1 = {firstName: "Javid", lastName: "Roshan"};
var employee1 = {firstName: "Javid", lastName: "Roshan"};
var employee2 = {firstName: "Nazeer", lastName: "Ahamed"};

function greet(greeting1, greeting2) {
 return console.log(greeting1 + " " + this.firstName + " " + this.lastName + " " + greeting2)
}

greet.apply(employee1, ["Hello", "How are you?"]);
greet.apply(employee2, ["Hello", "How are you?"]);

greet.call(employee1, "Welcome", "Employee");
greet.call(employee2, "Welcome", "Employee");

var inviteEmployee1 = greet.bind(employee1);
var inviteEmployee2 = greet.bind(employee2);
inviteEmployee1("Hello", "How are you?");
inviteEmployee2("Hello", "How are you?");

