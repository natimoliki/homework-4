
// 'use strict';


// 1.


let array2 = [14, 150, 'css', null, 'javascript', 25];
let newarray22 = array2.map(function(item){
    if (typeof item == 'string')
    return item.toUpperCase();
    return item *item;

})
console.log(newarray22);  



// 2.

let info= 'good day';
let newInfo = info.slice (5);
console.log(newInfo);



// 3. შედეგს კი სწორად აბრუნებს, მაგრამ ვერ ჩავამატე string - რომ იყოს მაგის შემოწმების ლოგიკა 

function funct (texts) { 
    // if (typeof texts === String)
   return texts.length;
    }
let resultsofstring = funct ('გამარჯობა')
console.log(resultsofstring);


// 4. ----

// 5. 
let fruits = ['apple', 'mango', 'avocado','kiwi'] 
fruits.splice ( -2,1,'strawberry')
console.log(fruits);


// 6. 

let array10 =[5, 25, 89, 120, 36];

array10.push ('javascript' , 'python');
array10.unshift ('html', 'css');
console.log(array10.length);
array10.shift () && array10.pop();
console.log(array10);


// 7.
let array11 = ['ფორთოხალი','ბანანი','კივი']

console.log(array11.length);
array11.push ('ვაშლი' , 'ანანასი');
array11.unshift ('საზამთრო' );
array11.splice(2,0,'მანგო')
array11.shift () & array11.pop();
console.log(array11.length);




// 8.

// let array3 = [1, 2, 3, 4, 5]
// array3.splice (3,0,'a');
// array3.splice (4,0,'b');
// array3.splice (5,0,'c');
// console.log(array3);




let array3 = [1, 2, 3, 4, 5];

array3.splice(3, 0, "a", "b", "c");

console.log(array3);

// 9.

let  array5 = [12, 25, 3, 6, 8, 14, 7, 23];
let newarray5 = array5.map (function(items) {
     
     return (items/3)
}
)
console.log(newarray5);



// 10.
let array7 =  [15, 100, 25, 10, 36]
array7.splice (3,1)
console.log(array7);

// 11.
let array8 = [1, 2, 3 , 4 , 5]
array8.splice (2,1,'three')
console.log(array8);



// 12.
let array1 =['hello1', 14,24, 'hello2']

let newArray1 = array1.filter(function(item) {
    return typeof item =='number'
  })
  console.log(newArray1);




// 13.

let array4 = [1, 2, 3, 4, 5];
let sum = 0;
array4.forEach ( function (item) {
    sum +=item;
}
 
)
let result = sum;
console.log(result);



// 14.

let languages = ['html', 'css', 'javascript', 'python', 'php'];
let newlanguages = languages.filter(function(element){
    return element.length > 3
})
console.log(newlanguages);




// 15.	

let words = ['madrid', 'rome', 'milan', 'berlin'];

let answer = words.filter(item => item.includes ('m'))

console.log(answer);






