var App = App || function () {
	this.io = io('http://'+ window.location.hostname+':5555');
};

App = new App();
console.log(App.io);