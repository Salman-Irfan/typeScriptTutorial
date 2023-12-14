interface Human {
    name: string
    email: string
    age: number
}

interface Student extends Human {
    rollNumber: number
}

let zeeshan: Student = {
    name: "Zeeshan",
    email: "zeeshan@gmail.com",
    age: 26,
    rollNumber: 1
}