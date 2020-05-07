let name = prompt('Imput Name', 'Name');
let lastName = prompt('Imput lastName', 'lastName');

let student = {
    name: name,
    lastName: lastName,
};

let subj;
let subjGrade;
let table = {};
let count = 0;
for (let i = 0; i < 50; i++) {
    count++
    subj = prompt(`Imput subject N ${count}`, 'Subject');
    console.log(subj);
    if (subj == null) break;
    subjGrade = prompt(`Imput ${subj} grade`, 'Grade');
    if (subjGrade == null) break;
    table[subj] = subjGrade;

}
student.table = table;
console.log(student.table);
console.log(student);

function negGrade(student) {
    let i = 0;
    for (let key in student.table) {

        if (student.table[key] < 4) {
            i++
        };

    }

    let message = (i == 0) ? 'Student transferred to next course' : `Your have a ${i} negativ grade number`;
    alert(message);
}

function sumGrade(student) {
    let sum = 0;
    let n = 0;
    let grant;
    for (let key in student.table) {
        n++;
        sum += student.table[key];
    }
    grant = sum / n;
    let message = (grant >= 0) ? 'Student granted scholarship' : ` Go learn a dumb animal`;
    alert(message);
}
negGrade(student);
sumGrade(student);







// createNewUser();



// newUser.getLogin = function() { return (firstName[0].toLowerCase() + lastName.toLowerCase()); };

// console.log(newUser);

// console.log(newUser.getLogin());

// Object.defineProperty(newUser, "firstName", {
//     writable: false
// });
// Object.defineProperty(newUser, "lastName", {
//     writable: false
// });
// newUser.firstName = "Gnuda";
// newUser.lastName = "Galima";

// console.log(newUser);


// newUser.setFirstName = "John";
// newUser.setLastName = "Rambo";

// console.log(newUser);