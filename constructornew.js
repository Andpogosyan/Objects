//Задача 2
// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.


// function Calc() {
//     this.read = function() {
//             this.first = +prompt('number 1', 10);
//             this.second = +prompt('number 2', 15)
//         },
//         this.sum = function() {
//             return this.first + this.second;
//         },
//         this.mul = function() {
//             return this.first * this.second;
//         }
// }

// let calculator = new Calc();

// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

//задача 3
// Напишите функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение 
// устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, 
// что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

// function Accumulator(v) {
//     this.value = +v,
//         this.read = function() {
//             this.value += +prompt('num', 10);
//         }
// }

// let acc = new Accumulator(5);

// acc.read();
// acc.read();

// console.log(acc.value);