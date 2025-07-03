let students = ["ali", "veli", "hakan"];

const student = (person, que) =>
{
    console.log(`${que + 1}-${person}`);
}

students.forEach(student);