var readlineSync = require("readline-sync");
var fs = require("fs");
const { stringify } = require("querystring");
var students = [];
function loadData() {
  var fileContent = fs.readFileSync("./data.json");
  students = JSON.parse(fileContent);
}
function showMenu() {
  console.log("1. Show all student");
  console.log("2. Create a new student");
  console.log("3. Save and exit");
  var option = readlineSync.question("> ");
  switch (option) {
    case "1":
      showStudents();
      showMenu();
      break;
    case "2":
      showCreateStudent();
      showMenu();
      break;
    case "3":
      saveandExit();
      break;
    default:
      console.log("Wrong Option");
      showMenu();
      break;
  }
}
function showStudents() {
  for (var student of students) {
    console.log(student.name, student.age);
  }
}
function showCreateStudent() {
  var name = readlineSync.question("Input name: ");
  var age = readlineSync.question("Input age: ");
  var student = {
    name: name,
    age: parseInt(age),
  };
  students.push(student);
}
function saveandExit() {
  var content = JSON.stringify(students);
  fs.writeFileSync("./data.json", content, { encoding: "utf-8" });
}
function main() {
  loadData();
  showMenu();
}
main();
