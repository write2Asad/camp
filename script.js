
// const age = 19;

// let abc = "Asad";

// if(age > 18){
//     abc  = "Arslan";
//     console.log(abc + " is not eligable to drive");
// }

// console.log(abc + " is eligable to drive");


let students = ["Asad", "Arslan", "Tim", "Ed"];

// console.log(students[1])


// students.forEach(data => console.log(data) )

        //   4 = 3
for (let std = 2; std < students.length; std++){
    console.log(students[std])
}


for (let std of students) {
    console.log(std);
}