function objectsSearch(arr, arg) {
    return arr.filter(item => item.reign === arg)
}

window.objectsSearch = objectsSearch;

export default objectsSearch;
