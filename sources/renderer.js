// ****************************************
// Modules Init
// ****************************************
// Electron Modules
const electron = require( "electron" );
const ipc = electron.ipcRenderer;

// ****************************************
// Active States
// ****************************************
// Document Ready
var rootTreeNavHtml;

$( document ).ready( function() {
  // Tree Pane
  const rootOpenBtn = document.getElementById( "rootOpenBtn" );
  const rootRefBtn = document.getElementById( "rootRefBtn" );
  rootOpenBtn.addEventListener( "click", function( event ) {
    ipc.send( "rootOpenEvent" );
    console.log( "rootOpenEvent" );
  } );
  rootRefBtn.addEventListener( "click", function( event ) {
    ipc.send( "rootRefEvent" );
    console.log( "rootRefEvent" );
  } );
  ipc.on( "rootTreeEvent", function( event, rootTree ) {
    console.log( rootTree );
    $( "#rootTreeNav" ).empty();
    rootTreeNavHtml = "";
    traverseTree( rootTree, 0 );
    $( "#rootTreeNav" ).html( rootTreeNavHtml );
  } );
  function traverseTree( node, depth ) {
    if ( node.name && node.name.charAt( 0 ) !== "." && !node.name.includes("node_modules")) {
      if ( node.children.length > 0 ) {
        rootTreeNavHtml += "<ul><li class=\"nav-group-item\"><span class=\"icon icon-down-open\"></span>" + node.name + "</li>";
        if ( typeof depth === "number" ) {
          depth++;
        } else {
          depth = 0;
        }
        node.children.forEach( function( val ) {
          traverseTree( val, depth );
        } );
      } else {
        rootTreeNavHtml += "<ul><li class=\"nav-group-item\"><span class=\"icon icon-folder\"></span>" + node.name + "</li>";
      }
      rootTreeNavHtml += "</ul>"
    }
  }
} );
