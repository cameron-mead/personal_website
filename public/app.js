
function new_guestbook ( element ) {

    // fetch data
    let form = new FormData ( element );
    let name = form.get( 'name' );
    let message = form.get( 'message' );
    // skip long messages
    if ( name.length > 1000 || message.length > 1000 ) {
        return;
    }

    element.reset(); // clear form

    // add to guestbook

    // log to console
    message = message.replaceAll( '\n', '\n\t\t' );
    let date = new Date().toString().split(' ');
    date = `${date[2]} ${date[1]} ${date[3]} ${date[4]}`;
    console.log ( `${date}\n{
    name    : \t${name}
    message : \t${message}\n}` );

    return;
}

