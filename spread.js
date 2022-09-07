// global.name = "shakil"
const user1 = {
    name: "ashivn",
    email: "ashivn@gmail.com",
    address: {
        state: "gujrat",
        city: "jamnagar",
    }

}
const user2 = {
    name: "ajay",
    email: "ahsgf@gmail.com",
    sayname: () => {
        console.log(user2.name);
    }
}
const user3 = {
    name: "pinak",
    email: "akjs@gmail.com"
}

// let userData = function (password, number) {
//     this.sayname()
//     console.log("userName: " + this.name + "\nemail:" + this.email + "\npassword: " + password + "\nMobileNo: " + number);
// }
// user2.sayname()
//===========================================================================================
// call
// userData.call(user2, "skdjghjksdgh", 12321212333131)
// userData.apply(user3, ["skdjghjksdgh", 12321212333131])


// let user4 = { ...user1 };
// let user4 = Object.assign({}, user1)
// user4.name = 'prit'

// let user4 = JSON.parse(JSON.stringify({ ...user1 }));
// user4.address.city = 'ahmedabad'


// console.log(user1);
// console.log(user4);
//============================================================================================

// function test() {
//     this.name = 'somthing'
//     var that = this
//     setTimeout(function () {
//         console.log(that.name);
//     }, 1000);
// }
// test()
//============================================================================================
// function delay(time) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res()
//         }, time);
//     }).then(() => {
//         console.log("===hello===");
//     }).catch((e) => {
//         console.log(e, "catch");
//     })
// }

// async function times() {
//     console.log("before");
//     await delay(5000);
//     console.log("runnig");
//     await delay(3000);
//     console.log("after")
//     dealy(2000)
// }



// function delay(time) {
//     setTimeout(() => {
//         console.log('hello');
//     }, time);
// }
// function times() {
//     console.log("before");
//     delay(5000);
//     console.log("runnig");
//     delay(3000);
//     console.log("after")
//     delay(2000)
// }
// times()
//============================================================================================

// const p1 = new Promise((resolve, reject) => {
//     resolve();
// });
// const p2 = new Promise((resolve, reject) => {
//     reject();
// });
// const p3 = new Promise((resolve, reject) => {
//     resolve();
// });
// const p4 = new Promise((resolve, reject) => {
//     reject();
// });
// const p5 = new Promise((resolve, reject) => {
//     resolve();
// });

// const promises = [p1, p2, p3, p4, p5];

// Promise.allSettled(promises).
//     then((results) => results.map((result) => console.log(result.status)));

// Promise.allSettled = function (promises) {
//     const convertedPromises = promises.map(p => Promise.resolve(p).then((value) => console.log(value)));
//     return Promise.all(convertedPromises);
// };
//============================================================================================


// Using .catch:
// Promise.all([p1, p2, p3, p4, p5])

//     .then((values) => {
//         console.log(values);
//     })
//     .catch((error) => {
//         console.error(error.message)
//     });

// From console:
// "reject"
//
// new Promise(function (resolve, reject) {
//     setTimeout(() => resolve("before"), 1000)
// })
//     .then(function (result) {
//         console.log(result)
//         return new Promise((resolve, reject) => { // (*)
//             setTimeout(() => resolve(1), 5000);
//         });

//     }).then(function (result) {
//         console.log(result)

//         return new Promise((resolve, reject) => {
//             setTimeout(() => resolve(2), 1000);
//         });


//     }).then(function (result) {
//         console.log(result);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => resolve("after"), 1000);
//         });
//     }).then(function (result) {
//         console.log(result);
//     })







// new Promise((resolve, reject) => {
//     resolve("ok");
// }).then((result) => {
//     console.log(a, "before");
// }).catch((e) => {
//     console.log(e, 'after');
// });


//============================================================================================
let obj = { 1: "one", 2: '2', 3: '3', 4: '4' }
for (let key in obj) {
    // console.log(obj[key]);
}
// consol.log(obj.value)

// const arr = [1, 2, 3, 4, 5]

// console.log(arr[0])

// console.log(Object.values(obj));
