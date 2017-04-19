// ****************************************
// Modules Init
// ****************************************
// Electron Modules
const electron = require( 'electron' );
const ipc = electron.ipcRenderer;

// ****************************************
// Active States
// ****************************************
// Global Functions
function traverse(tree,func){
  if(tree.children){
    tree.children.forEach(val,idx){
      traverse(tree.children[val]);
    }
  }
}
// Document Ready
$( document ).ready( function() {
  // Tree Pane
  const rootOpenBtn = document.getElementById( 'rootOpenBtn' );
  const rootRefBtn = document.getElementById( 'rootRefBtn' );
  rootOpenBtn.addEventListener( 'click', function( event ) {
    ipc.send( 'rootOpenEvent' );
    console.log( 'rootOpenEvent' );
  } );
  rootRefBtn.addEventListener( 'click', function( event ) {
    ipc.send( 'rootRefEvent' );
    console.log( 'rootRefEvent' );
  } );
  ipc.on( 'rootTreeEvent', function( event, rootTree ) {
    console.log( rootTree );
    traverse(rootTree, buildButton);
  } );
  function renderTreeElement()
} );
