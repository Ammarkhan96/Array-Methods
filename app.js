//𝟱 𝗪𝗮𝘆𝘀 𝘁𝗼 𝗔𝗱𝗱 𝗜𝘁𝗲𝗺𝘀 𝘁𝗼 𝗔𝗿𝗿𝗮𝘆 𝗶𝗻 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 

//Adding Element with Index

// const numbers = [0, 10]
// numbers[3] = 30
// console.log(numbers) //[0, 10, undefined, 30]


//The Spread (...) Operators

// const animals = ['Dog', 'Cat']
// const zoo = [...animals, 'Fish', 'Lion', 'Tiger']
// console.log(zoo)  //['Dog', 'Cat', 'Fish', 'Lion', 'Tiger']


//The Concat() Method

// const disney = ['Cinderella', 'Bambi']
// const movies = disney.concat('Alladin', 'Tarzan')
// console.log(movies)    //['Cinderella', 'Bambi', 'Alladin', 'Tarzan']


//The Unshift() Method

// const cars = ['Tesla', 'Mazda']
// cars.unshift('Toyota', 'Honda')
// console.log(cars)


//The Push() Method

// const marvel = ['Spiderman', 'XMen']
// marvel.push('Venom', 'Deadpool', 'Thor')
// console.log(marvel)








//𝟰 𝗗𝗶𝗳𝗳𝗲𝗿𝗲𝗻𝘁 𝗪𝗮𝘆𝘀 𝘁𝗼 𝗖𝗼𝗻𝘃𝗲𝗿𝘁 𝗦𝘁𝗿𝗶𝗻𝗴 𝘁𝗼 𝗖𝗵𝗮𝗿𝗮𝗰𝘁𝗲𝗿 𝗔𝗿𝗿𝗮𝘆 𝗶𝗻 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 

//The Split() Method

// const myWeb = 'devbranding'
// const arr = myWeb.split('')
// console.log(arr)


//The From() Method

// const myWeb = 'devbranding'
// const arr = Array.from(myWeb)
// console.log(arr)


//The Spread Operator

// const myWeb = 'Devbranding'
// const arr = [...myWeb]
// console.log(arr)


//The assign() Method

// const myWeb = 'devbranding'
// const arr = Object.assign([], myWeb)
// console.log(arr)





//𝟰 𝗣𝗼𝘄𝗲𝗿𝗳𝘂𝗹 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 𝗖𝗼𝗱𝗲 𝗦𝗻𝗶𝗽𝗽𝗲𝘁: 𝗠𝗮𝗸𝗲 𝗬𝗼𝘂𝗿 𝗟𝗶𝗳𝗲 𝗘𝗮𝘀𝗶𝗲𝗿 𝘄𝗶𝘁𝗵 𝗧𝗵𝗲𝘀𝗲

//The Javascript way to remove falsy values from an array:

// const shoppingList = [
//     {name: 'Pizza', price: 20},
//     {name: 'Fries', price: 25},
//     {name: 'CheesyMacroni', price: 30},
// ]
// const filteredItems = shoppingList.filter(item =>item.price <= 22)
// console.log(filteredItems)


//How to Obtain a Random Element from an Array:

// const colors = ['yellow', 'orange', 'blue', 'purple', 'green']
// const randomColor = colors[Math.floor(Math.random() * colors.length)]
// console.log(randomColor)


//Shuffling an Array in Javascript:

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const shuffled = list.sort(() => Math.random()-0.5)
// console.log(shuffled)


//How to Find the Intersection of Two Array:

// const numOne = [0, 2, 4, 6, 8, 9]
// const numTwo = [1, 2, 3, 4, 5, 6]
// const duplicateValues = [...new Set(numOne)].filter(item => numTwo.includes(item))
// console.log(duplicateValues)


//5 JavaScript String Methods To Make Your Life Easier

//replace()
// const str = 'AwesomeJS'
// console.log(str.replace('Awesome', 'Cool'))

//concat()
// const str = 'Javascript'
// console.log(str.concat('IsAwesome'))

//charAt()
// const str = 'YouDontknowJS'
// console.log(str.charAt(6))
// console.log(str.charAt(3))

//slice()
// const str = 'JS Developer'
// console.log(str.slice(3, 6))
// console.log(str.slice(4, 8))

//repeat()
// const str = 'RepeatMe'
// console.log(str.repeat(3))
// console.log(str.repeat(7))






//How To Use: sort(), filter() keys() in JavaScript 

//sort()
// const months = ['March', 'Jan', 'Feb', 'Dec']
// months.sort()
// console.log(months)

// const numbers = [4, 2, 5, 1, 3]
// numbers.sort((a, b) => a - b)
// console.log(numbers)


//filter 
// function isEven(value) {
//     return value % 2 == 0
// }
// const filtered = [13, 98, 37, 23, 924].filter(isEven)
// console.log(filtered)

//keys()
// const array1 = ['x', 'y', 'z']
// const iterator = array1.keys()
// for(const key of iterator){
//     console.log(key)
// }







//𝟯 𝘄𝗮𝘆𝘀 𝘁𝗼 𝘂𝘀𝗲 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 𝗮𝗿𝗿𝗮𝘆 𝗺𝗲𝘁𝗵𝗼𝗱𝘀

//find()
// const array1 = [5, 12, 80, 140, 45]
// const found = array1.find(element => element > 10)
// console.log(found)

//some()
// const array = [1, 2, 3, 4, 5, 6]
// const even = (element) => element % 2 === 0
// console.log(array.some(even))

// console.log([2, 5, 8, 1, 5].some(x => x > 10))
// console.log([12, 5, 8, 1, 5].some(x =>x > 10))






// 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 𝗦𝗹𝗶𝗰𝗲() 𝗮𝗻𝗱 𝗦𝗽𝗹𝗶𝗰𝗲() 𝗠𝗲𝘁𝗵𝗼𝗱𝘀

//Slice()

// const colors =['red', 'black', 'brown', 'blue', 'green']
// console.log (colors.slice(2))
// console.log(colors.slice(2, 4))
// console.log(colors.slice(1, 5))

// const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// const citrus = fruits.slice(1, 3)
// console.log(citrus)


//Splice()

// const months = ['Jan', 'March', 'April', 'June']
// months.splice(1, 0, 'Feb')
// console.log(months)
// months.splice(4, 1, 'May')
// console.log(months)

// const colors1 = ['red', 'black', 'brown', 'green']
// const removed = colors1.splice(0, 2 ,'yellow', 'white', 'blue')
// console.log(colors1)
// console.log(removed)








// 𝟯 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 𝗔𝗿𝗿𝗮𝘆 𝗠𝗲𝘁𝗵𝗼𝗱𝘀 𝗧𝗼 𝗠𝗮𝗸𝗲 𝗬𝗼𝘂𝗿 𝗟𝗶𝗳𝗲 𝗘𝗮𝘀𝗶𝗲𝗿

//The Join() Method

// const array1 = ['Wind', 'Water', 'Fire']
// console.log(array1.join())
// console.log(array1.join(', '))
// console.log(array1.join(' + '))
// console.log(array1.join(''))

// const array2 = [1, 2, 3, 4, 5, 6]
// console.log(array2.join('|'))
// console.log(array2.join())
// console.log(array2.join(' '))


//The Concat() Method

// const array3 = ['a', 'b', 'c']
// const array4 = ['d', 'e', 'f']
// const array5 = array3.concat(array4)
// console.log(array5)
// const array6 = array3.concat()
// console.log(array6)


//The toString() Method

// const fruits = ['Banana', 'Mango', 'Orange', 'Apple']
// console.log(fruits.toString())

// const colors = ['Blue', 'Pink', 'Red', 'Yellow', 'Purple']
// console.log(colors.toString())

// const arr = [1, 2, 'a', '1b']
// console.log(arr.toString())







//𝘀𝗵𝗶𝗳𝘁(), 𝘂𝗻𝘀𝗵𝗶𝗳𝘁(), 𝗮𝗻𝗱 𝗿𝗲𝘃𝗲𝗿𝘀𝗲() 𝗠𝗲𝘁𝗵𝗼𝗱𝘀 𝗜𝗻 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁

//shift()

// const arr1 = [1, 2, 3, 4, 5, 6]
// const firstElement = arr1.shift()
// console.log(arr1)
// console.log(firstElement)

// const numbersArray = ['one', 'two', 'three', 'four', 'five']
// while(typeof(i = numbersArray.shift()) !== 'undefined') {
//     console.log(i)
// }


//unshift()

// const arr1 = [1, 2, 3]
// console.log(arr1.unshift(4, 5))
// console.log(arr1)

// const arr2 = [1, 2]
// console.log(arr2.unshift(0))
// console.log(arr2.unshift(-2, -1))


//reverse()

// const numbersArray = ['one', 'two', 'three']
// const reversed = numbersArray.reverse()
// console.log('reserved:', reversed)

// console.log('numberArr:', numbersArray)








//𝗽𝘂𝘀𝗵(), 𝗽𝗼𝗽() 𝗮𝗻𝗱 𝗳𝗶𝗹𝗹() 𝗠𝗲𝘁𝗵𝗼𝗱𝘀 𝗜𝗻 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 𝗔𝗿𝗿𝗮𝘆𝘀 

//push()
// const sports = ['soccer', 'baseball']
// const total = sports.push('football', 'swimming')
// console.log(sports)
// console.log(total)


 