function viewsAndBindings() {
	var key,
		topView = _jsv.views[0],
		res = "",
		topViews = "",
		bindings = "";

	for (key in _jsv.views) {
		if (_jsv.views[key]) {
			res += key + " ";
		}
	}

	res = res.slice(2); // Remove view 0

	res = res ? "Bound Views: " + res + "<br/>" : "";

	for (key in topView.views) {
		if (topView.views[key]) {
			topViews += key + " ";
		}
	}

	res = res + (topViews ? "Top Views: " + topViews + "<br/>" : "");

	for (var key in _jsv.bindings) {
		if (_jsv.bindings[key]) {
			bindings += key + " ";
		}
	}

	res = res + (bindings ? "Bindings: " + bindings : "");

	var viewsElement = document.getElementById("views");
	if (viewsElement) {
		viewsElement.innerHTML = "Views and Bindings:<br/>" + res ;
	}
	return res;
}