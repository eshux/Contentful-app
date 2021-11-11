export const scroll = (type: "top" | "down") => {
	const viewHeight = document.documentElement.clientHeight;
	const maxHeight = document.documentElement.scrollHeight;
	const possibleHeight = maxHeight - viewHeight;

	(function scrolling() {
    // down per section ( 100vh - client height )
		if (type === "down"
      && maxHeight >= viewHeight * 2 
      && window.pageYOffset < viewHeight
    ) {
			window.scrollBy(0, 10);
			setTimeout(scrolling, 0);
		} else if (type === "down"
      && maxHeight < viewHeight * 2
      && window.pageYOffset < possibleHeight
    ) {
			window.scrollBy(0, 10);
			setTimeout(scrolling, 0);
		}

    // to top
		if (type === "top" && window.pageYOffset > 0) {
			window.scrollBy(0, -10);
			setTimeout(scrolling, 0);
		}
	})();
};

export const compareArrays = (arr1: (number|string)[], arr2: (number|string)[]) => {
	if (arr1.length !== arr2.length) {
		return false
	}
	arr1.sort();
	arr2.sort();
  
  for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false
		}
	}
  
	return true
}