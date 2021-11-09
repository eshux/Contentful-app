export const scroll = (type: "top" | "down") => {
	const viewHeight = document.documentElement.clientHeight;
	const maxHeight = document.documentElement.scrollHeight;
	const possibleHeight = maxHeight - viewHeight;

	(function scrolling() {
    // down per section ( 100vh )
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