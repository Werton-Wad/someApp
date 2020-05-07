
const transformString = (text) => {
	return text.length > 70 ?
	 text.split('').filter((el, i) => i < 70 ? el : null).join('').trim() + '...'
	 :
	text;
  }

  const paginationPages = (arr, numberOfPages) => {
    const copyArr = [...arr];
    let paginationArr = [];
    while (copyArr.length) {
      paginationArr.push(copyArr.splice(0, numberOfPages));
    }
    return paginationArr;
  }


  export {
      transformString,
      paginationPages,
  }