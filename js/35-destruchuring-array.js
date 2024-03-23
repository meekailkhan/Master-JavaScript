// descrtrucharing array 

const one = ["meekail","muzaahid","feajan","fayyaz"]

// let two = one[0];
// let three = one[1]

// ...four me bachi hui jitni bhi value hai vo sab store ho rhi hai

let [two,three,...four] = one;

three = "aslam"


console.log(two)
console.log(three)
console.log(four)

console.log(one)
