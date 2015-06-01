/*
Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
 Use a sequence of if operators.
 */

function getSign(nums){
    var negative = 0;

    for(var i = 0; i < nums.length; i++){
        if(nums[i]){
            if(nums[i] * -1 > nums[i]){
                ++negative;
            }
        }else{
            return 0;
        }
    }

    return (negative % 2) ? '-' : '+';
}

console.log([0, 5, -5] + ' sign: ' + getSign([0, 5, -5]));
console.log([5, 5, -4] + ' sign: ' + getSign([5, 5, -4]));
console.log([-3, 5, -5] + ' sign: ' + getSign([-3, 5, -5]));
console.log([-5, -5, -5] + ' sign: ' + getSign([-5, -5, -5]));
console.log([3, 3, 3] + ' sign:' + getSign([3, 3, 3]));
