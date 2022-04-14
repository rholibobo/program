let Name1 = prompt("Enter your First Name");
firstName = Name1.slice(0,4);

let Name2 = prompt("Enter your Last Name");
lastName = Name2.slice(0,1);

let user = firstName + lastName;

let userId = user.toLowerCase();

let output = "Your CapacityBay UserId is " + userId ;

alert(output);
