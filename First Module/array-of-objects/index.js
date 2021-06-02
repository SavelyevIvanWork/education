function arraySearch(arr, arg) {
    const newArr = []
    arr.map(item => {
        if(item === arg) newArr.push(item)
    })
    return newArr
}

window.arraySearch = arraySearch;

export default arraySearch;
