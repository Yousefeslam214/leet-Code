function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;

    let i = 0; // slow pointer for unique elements

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j]; // move the unique element forward
        }
    }

    return i + 1; // number of unique elements
}
