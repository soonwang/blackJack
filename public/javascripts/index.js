window.onload = function() {
	var ws = new WebSocket("ws:127.0.0.1:3000");
	ws.onopen = function() {
		console.log("WebSocket opened...");
	};
	ws.onmessage = function(event) {
		var JsonData = JSON.parse(event.data);
		switch (JsonData.type): {
			case 
		}
	}
};