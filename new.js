//1 2 3 4 5
// 10 9 8 7 6
// 11 12 13 14 15
// 20 19 18 17 16

// function num(num) {
//     const ans = [];
//     for (let i = 0; i < num; i++) {
//         for (let j = 1; j <= 5; j++) {
//             ans.push((i * 5) + j);
//         }
//         if (i % 2 !== 0) {
//             ans.reverse()
//         }
//         console.log((ans.join(' ')) + "\n");
//         ans.length = 0
//     }
// }
// num(4)




// 1 2 3 4 5
//   8 7 6
//    9 10
//     11
function pattern(num) {
    let ans = []
    for (let i = 0; i <= num; i++) {
        for (let j = num; j > i; j--) {
            ans.push((i * 5) + j);
        }
        console.log((ans.join(' ')) + "\n");
        ans.length = 0

    }

}
pattern(4)