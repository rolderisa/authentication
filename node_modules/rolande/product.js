function pro(nums){
    let product=1;
    for(i=0;i<nums.length;i++){
        product *= nums[i];
    }
    return product
}
console.log(pro([2,3,4]))

