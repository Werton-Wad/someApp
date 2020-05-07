
const trimArray = (arr, countEl) => {
    return arr.filter((el,i) => i < countEl ? el : null);
}

export {
    trimArray,
}