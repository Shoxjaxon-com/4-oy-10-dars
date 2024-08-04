// String


// // 1-masala
// let str ="Salom"
// function a(str){
//     let conuter = 0;
//     for(let i =0; i< str.length;i++){
//         if(str[i] === 'a' || str[i] =='A'){
//             conuter++;
//         }
//     }
//     return conuter;
// }
// console.log(a(str));

// 2-masala

// let arr = 'salom'
// function ohirgiHArifi(str){
//   str =str.slice(2)
//     return str;
// } 
// console.log(ohirgiHArifi(arr));

// 3-masala
// let arr ="salom bolalar yaxshimisizlar"
// let resArr = arr.split(" ")
// let res = resArr.map(function(v){
//     return v[0].toUpperCase( ) + v.slice(1)
// }) 
// console.log(res);


// 4-masala
// let arr = "  salom"
// function boshJoy(arg){
//     arr = arr.trimStart()
//     return arr;
// }
// console.log(boshJoy(arr));

// 5-masala
// let str ='Salom'
// function rever(str){
//     return str.split('').reverse().join('');
// }
// console.log(rever(str));

// 6-masala
// let str ='salom'
// function belgilar(str){
//     return str.length;
// }
// console.log(belgilar(str));

// 7-masala
// let  str = 'salom'
// function takrolanadi(str){
//     return str.repeat(3)
// } 
// console.log(takrolanadi(str));

// 10-masala
// let arr = 'index.js'
// function js(arr){
//     return arr.includes('js')
// }
// console.log(js(arr));

// MASSIV
//  1  - masala
// let arr = [1,2,3,4,5,6,7,8,9]
// function max(arr){
//     if(arr.length ===0){
//         return undefined
//     }

//     let max = arr[0];
//     for(let i =1; i < arr.length;i++){
//         if(arr[i] >max){
//             max = arr[i]
//         }
//     }
//     return max
// }
// console.log(max(arr));

// 2 - masala
// function juftSonlar(arr) {
//     let juftlar = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             juftlar.push(arr[i]);
//         }
//     }
//     return juftlar;
// }
// let nums = [3, 6, 2, 8, 4, 10, 1];
// console.log(juftSonlar(nums));

// 3-masala
// let arr =[1,2,3,4,5,6,7,8,9]
// function yigindi(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum;
// }
// console.log(yigindi(arr));

// 4-masala
// let arr = [1,2,3,4,5,6,7,8,9]
// let res = arr.map(function(v){
//     return v**2
// }) 
// console.log(res);

// 5-masala

// let arr = [1,-2,-3,4,-5,-6,7,-8,9]

// function manfiyson(arr){
//     let musbta = []
//     for(let i = 0; i < arr.length; i++ ){
//         if(arr[i] >= 0){
//             musbta.push(arr[i])
//         }
//     }
//     return musbta
// }
// console.log(manfiyson(arr));

// 7-masala
// let arr1 =[1,2,3]
// let arr2 =[4,5,6]
// function birlashtirish(arr1 ,arr2){
//     let res =arr1.concat(arr2)
//     return res;
// } 
// console.log(birlashtirish(arr1,arr2));

// 8-masala

// let arr = [1,2,3,4,5,6,7,8,9]
// function teskariTartib(arr){
//     return arr.reverse()
// } 
// console.log(teskariTartib(arr));

// 9-masala
// let arr = [1,2,3,4,5,6,7,8,9]
// let res = arr.filter(function(v,i){
//     return i % 2 == 1
// }) 
// console.log(res);

// Object

// 1-masala

// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];
// function getOldestPersonName(people){
//     let kattaYosh  = people[0]
//     for(let i = 1; i<people.length;i++){
//         if(people[i].age > kattaYosh.age){
//             kattaYosh = people[i]
//         }
//     }
//     return kattaYosh;
// }
// console.log(getOldestPersonName(people));

// 2-masala
// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];
// function getPeopleAboveAge(people, age) {
//     let res = people.filter(person => person.age > age);
//     return res;
// }
// console.log(getPeopleAboveAge(people,26));

// // 3-masala
//    const people = [
//        { name: "Ali", age: 25 },
//        { name: "Vali", age: 30 },
//        { name: "Hasan", age: 28 }
//    ];
//    function getNames(people){
//     let ism =people.map(person =>person.name)
//     return ism
//    }
//    console.log(getNames(people));

// 4-masala
// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];
// function getTotalAge(age) {
//  let sum = people.reduce((sum,person)=> sum +person.age,0)
//  return sum;
// }
// console.log(getTotalAge(people));

// 5-masala
// function getPersonByName(people, name) {
//     let person = people.find(person => person.name === name);
//     return person;
// }
// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];
// console.log(getPersonByName(people, "Vali"));

// 8-masala
// function incrementAges(people) {
//     let res = people.map(person => ({
//         ...person,
//         age: person.age + 1
//     }));
//     return res;
// }
// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];
// console.log(incrementAges(people)); 

