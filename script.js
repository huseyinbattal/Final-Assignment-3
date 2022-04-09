getFinalOrder = (k, amounts) => {

    let result = [];
    let bigNum = [];

    for (let i = 0; i < amounts.length; i++) {
        if (amounts[i] <= k) {
            let indexItem = amounts.indexOf(amounts[i]);
            result.push(indexItem + 1);
        } else {
            bigNum.push((amounts.indexOf(amounts[i])+1))
        }
    }

    return [...result,...bigNum];
}

console.log("-----------------EXAMPLES----------------");
console.log("Amounts:[3,5,1] and k=2 => result:",getFinalOrder(2, [3, 5, 1]));
console.log("Amounts:[7,4,5] and k=6 => result:", getFinalOrder(6, [7, 4, 5]));
console.log("Amounts:[3,4,5] and k=8 => result:", getFinalOrder(8, [3, 4, 5]));