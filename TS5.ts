// Задание 1

let Student: { name: string ; age : number ; grade: number };

Student = {
    name: "Ramzan",
    age: 19,
    grade: "5", // Нельзя изменить тип данных или вписать другой тип
}

// Задание 2

interface Animal {
Name: string;
Age: number;
}

let dog : Animal = {
    Name: "Rex",
    Age: 5,
    Type : "Dog" // Не существует такого свойства в интерфейсе
}

// Задание 3

interface Employee {
    Name: string;
    Age: number;
    Department?: string; // Необязательное свойство
}

let employee: Employee = {
    Name: "Ramzan",
    Age: 19
}

// Задание 4

interface Student {
    Name: string;
    Grades: number[];
}
let student : Student[] = [
    {
        Name: "Ramzan",
        Grades: [1, 2, 3, 4, 5]
    },
    {
        Name: "Dzhantemirov",
        Grades: [1, 2, 3, 4, 5],
        class : 5, // Не существует такого свойства в интерфейсе
    }
]

// Задание 5

interface Book {
    Name: string;
    Author: string;
    Year: number;
}

let Book : Book = {
    Name: "Таракан",
    Author: "Валентин Пушкин",
    Year: 2017
}
let book1 : Book = {
    Name: "Лукоморье Дуб зеленый ",
    Author: "Пушекин",
    Year: 1823
}
function PrintBookInfo (Book: { Name: string ; Author: string ; Year: number }) {
    console.log(`Name: ${Book.Name} \nAuthor: ${Book.Author} \nYear: ${Book.Year}`)
}

PrintBookInfo(Book)
PrintBookInfo(book1)