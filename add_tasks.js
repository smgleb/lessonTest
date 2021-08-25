// 1.Создайте функцию, которая возвращает сумму пропущенных чисел из заданного массива.


//sumMissingNumbers([4, 3, 8, 1, 2]) ➞ 18
// 5 + 6 + 7 = 18

//sumMissingNumbers([17, 16, 15, 10, 11, 12]) ➞ 27
// 13 + 14 = 27

//sumMissingNumbers([1, 2, 3, 4, 5]) ➞ 0
// Нет пропущенных номеров (т.е. все числа в [1, 5] присутствуют в списке)

//Числовой диапазон, который следует учитывать при поиске пропущенных чисел в массиве, - это последовательность последовательных чисел между минимальным и максимальным из чисел (включительно).

// function sumMissingNumbers(arr) {

// 	let min = arr[0];
// 	let max = arr[0];
// 	let sum1 = 0;
// 	let sum2 = 0;
// 	// Ищем наибольшее и наименьшее значение
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] < min) {
// 			min = arr[i];
// 		}
// 		if (arr[i] > max) {
// 			max = arr[i];
// 		}
// 		sum1 += arr[i];
// 	}

// 	for (let g = min; g <= max; g++) {
// 		sum2 += g;
// 	}

// 	let result = sum2 - sum1;
// 	return result;

// }
// console.log(sumMissingNumbers([4, 3, 8, 1, 2]));
// console.log(sumMissingNumbers([17, 16, 15, 10, 11, 12]));
// console.log(sumMissingNumbers([1, 2, 3, 4, 5]));








// 2. Создайте функцию, которая принимает массив строк и возвращает массив только со строками, в которых есть числа. Если нет строк, содержащих числа, вернуть пустой массив.

/* numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) ➞ ["test1"]

Строки могут содержать пробелы или символы любого типа.
Попробуйте решить это без регулярного выражения.

*/
// function numInStr(arr) {
// 	newArr = [];
// 	for (let i = 0; i < arr.length; i++) {

// 		for (let n = 0; n < arr[i].length; n++) {

// 			if (isFinite(arr[i][n]) && arr[i][n] !== ' ') {
// 				newArr.push(arr[i]);
// 				break;
// 			}

// 		}
// 	}
// 	return newArr;
// }
// console.log(numInStr(["1a", "a", "2b", "b"]));
// console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
// console.log(numInStr(["abc", "abc10"]));
// console.log(numInStr(["this is a test", "test1"]));


/*
3.Создайте функцию, которая принимает массив объектов даты и возвращает «самую длинную полосу» (т. Е. Количество последовательных дней подряд).



longestStreak([
  {
	 "date": "2021-04-18"
  },
  {
	 "date": "2021-04-19"
  },
  {
	 "date": "2021-04-20"
  },
  {
	 "date": "2021-04-26"
  },
  {
	 "date": "2021-04-27"
  },
  {
	 "date": "2021-04-30"
  }
]) ➞ 3


Пустой массив должен возвращать 0.

*/

function longestStreak(arr) {
	let result = [];
	let arrDate = [];
	for (let i = 0; i < arr.length; i++) {
		arrDate.push(arr[i].date.split('-')[2]);
	}
	for (let n = 0; n < arrDate.length; n++) {
		if (arrDate[n] === arrDate[n + 1] - 1) {
			result.push(arrDate[n])
		}
	}

	return result;

}
console.log(longestStreak([
	{
		"date": "2021-04-18"
	},
	{
		"date": "2021-04-19"
	},
	{
		"date": "2021-04-20"
	},
	{
		"date": "2021-04-26"
	},
	{
		"date": "2021-04-27"
	},
	{
		"date": "2021-04-30"
	}
]))