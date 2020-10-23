//Задача 4
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

//Решение

// let calculator = {
//     read() {
//         this.firstNumber = +prompt('number 1', 10);
//         this.secondNumber = +prompt('number 2', 20);
//     },
//     sum() {
//        return this.firstNumber + this.secondNumber
//     },
//     mul() {
//        return this.firstNumber * this.secondNumber
//     }
// }

// calculator.read()

//задача 5
// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//     },
//     down() {
//       this.step--;
//     },
//     showStep: function() { // показывает текущую ступеньку
//       alert( this.step );
//     }
//   };
//   Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:
//   ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

// ladder.up().up().down().showStep(); // 1


//Решение

// console.log(calculator.sum(), calculator.mul());

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this
//     },
//     down() {
//         this.step--;
//         return this
//     },
//     showStep: function() {
//         alert(this.step);
//         return this
//     }
// };


// console.log(ladder.up().up().down().showStep());