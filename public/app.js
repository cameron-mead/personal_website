
function new_guestbook ( element ) {
    let form = new FormData ( element );
    let name = form.get( 'name' );
    let message = form.get( 'message' );

    if ( name.length > 1000 || message.length > 1000 ) {
        return;
    }

    element.reset();



}

