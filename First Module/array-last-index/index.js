function arrayIndex(arr, arg) {
    const newArr = []
    arr.map((item, index) => {
        if(index < arg) newArr.push(index)
    })
    return newArr
}

window.arrayIndex = arrayIndex;

export default arrayIndex;
