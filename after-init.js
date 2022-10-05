jQuery(document).ready(function($) {
    //addDemoMetabox();
    window.setTimeout(addDemoMetabox, 2000);
});

function addDemoMetabox() {
    var dispatch = wp.data.dispatch( 'core/edit-post' );

    jQuery( '#normal-sortables' ).prepend(
        '<div id="demo-postbox" class="postbox">' +
        '   <div class="postbox-header">' +
        '       <h2 class="hndle ui-sortable-handle">' +
        '           <span>Demo Field Group</span>' +
        '       </h2>' +
        '       <div class="handle-actions hide-if-no-js">' +
        '           <button type="button" class="handlediv" aria-expanded="true">' +
        '               <span class="screen-reader-text">Toggle panel: Demo Field Group</span>' +
        '               <span class="toggle-indicator" aria-hidden="true"></span>' +
        '           </button>' +
        '       </div>' +
        '   </div>' +
        '   <div class="inside">' +
        '       <label for="demo-field">Demo Field</label>' +
        '        <input type="text" id="demo-field" name="demo-field" />' +
        '    </div>' +
        '</div>'
    );

    locations = {normal: [{id: "demo-postbox", title: "Demo Field Group"}]};
    dispatch.setAvailableMetaBoxesPerLocation( locations );
}