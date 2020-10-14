module.exports = function check(str, bracketsConfig) {
    const bracketsDict = new Map(bracketsConfig);

    let stackArr = [];

    for (let bracket of str) {
        if (bracketsDict.has(bracket) &&
            bracketsDict.get(bracket) !== bracket) {
            stackArr.push(bracket);
        } else if (bracketsDict.get(bracket) &&
                    bracketsDict.get(bracket) === bracket &&
                    stackArr[stackArr.length - 1] !== bracket) {
            stackArr.push(bracket);
        } else if (bracketsDict.get(bracket) &&
                    bracketsDict.get(bracket) === bracket &&
                    stackArr[stackArr.length - 1] === bracket) {
            stackArr.pop();
        } else {
            if (stackArr.length < 1) {
                return false;
            } else if (bracketsDict.get(stackArr[stackArr.length - 1]) !== bracket) {
                return false;
            } else {
                stackArr.pop();
            }
        }
    }
    return (stackArr.length === 0) ? true : false;
}
