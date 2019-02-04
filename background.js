chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(tab) {
		alert("dziala kurwa");

	});
});