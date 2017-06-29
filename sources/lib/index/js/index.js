// ****************************************
// Modules Init
// ****************************************
// Electron Modules
const electron = require("electron");
const ipc = electron.ipcRenderer;

// ****************************************
// Active States
// ****************************************

// Get templates
$.when(
	$.get('templates/base.hbs').then(function(result) {
		return {name: "base", content: result};
	}),
	$.get('templates/footer.hbs').then(function(result) {
		return {name: "footer", content: result};
	})
).done(function() {
	let partials = {};
	for (let i in arguments){
		let partial = arguments[i];
		partials[partial.name] = partial.content;
	}
	$(document).ready(function(){
		initRactive(partials);
	});
});

// Init ractive
function initRactive(partials) {
	let ractive = new Ractive({
		target: '#ractive',
		template: "{{> base}}",
		partials: partials
	});
}

// Document Ready
$(document).ready(function() {
	// Tree Pane
	const rootOpenBtn = document.getElementById("rootOpenBtn");
	const rootRefBtn = document.getElementById("rootRefBtn");
	// rootOpenBtn.addEventListener( "click", function( event ) {
	//   ipc.send( "rootOpenEvent" );
	//   console.log( "rootOpenEvent" );
	// } );
	// rootRefBtn.addEventListener( "click", function( event ) {
	//   ipc.send( "rootRefEvent" );
	//   console.log( "rootRefEvent" );
	// } );
	// ipc.on( "rootTreeEvent", function( event, rootTree ) {
	//   console.log( rootTree );
	//   $( "#rootTreeNav" ).empty();
	//   rootTreeNavHtml = "";
	//   $( "#rootTreeNav" ).html( rootTreeNavHtml );
	// } );
});
