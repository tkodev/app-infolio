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
$( document ).ready( function() {
  // Nav Pane
  const root_open_btn = document.getElementById( 'root_open_btn' );
  const root_refresh_btn = document.getElementById( 'root_refresh_btn' );
  root_open_btn.addEventListener( 'click', function( event ) {
    ipc.send( 'root_open_btn' );
    console.log( 'root_open_btn' );
  } );
  root_refresh_btn.addEventListener( 'click', function( event ) {
    ipc.send( 'root_refresh_btn' );
    console.log( 'root_refresh_btn' );
  } );
  ipc.on( 'root_tree', function( event, root_tree ) {
    console.log( root_tree );
    $( '#nav' ).jstree( root_tree );
  } );
} );
