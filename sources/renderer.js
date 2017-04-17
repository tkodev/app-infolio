// ****************************************
// Modules Init
// ****************************************
// Electron Modules
const electron = require( 'electron' );
const ipc = electron.ipcRenderer;


// ****************************************
// Active States
// ****************************************
// Document Ready
document.addEventListener( "DOMContentLoaded", function() {
  // open_root
  const open_root_btn = document.getElementById( 'open_root_btn' );
  open_root_btn.addEventListener( 'click', function( event ) {
    ipc.send( 'open_root_btn' );
    console.log("hello");
  } )
  ipc.on( 'opened_root', function( event, path ) {
    // document.getElementById('selected-file').innerHTML = `You selected: ${path}`
    console.log( path );
  } )
} );
