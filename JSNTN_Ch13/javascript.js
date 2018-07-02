// fetch method -> needs the url of the source we want to fetch
const url = 'https://myurl.com/data';

fetch(url)
.then((response) => {
    if (response.ok)
        return response;
    throw Error(response.statusText);
})
.then ( /* response => do something with res */ )
.catch ( error => console.log('There was an error!') );

// REDIRECT
fetch(url)
.then( response => response.redirect(newUrl))
.then ( /* response => do something with res */ )
.catch ( error => console.log('There was an error!') );

// TEXT RESPONSE
fetch(url)
.then( response => response.text() )
.then ( text => console.log(text) )
.catch ( error => console.log('There was an error!') );

// FILE RESPONSE
fetch(url)
.then( response => response.blob() )
.then ( blob => console.log(blob.type) )
.catch ( error => console.log('There was an error!') );

//JSON
fetch(url)
.then( response => response.json() )
.then ( data => console.log(Object.entires(data)) )
.catch ( error => console.log('There was an error!') );

// RES OBJECTS
const res = new Response( 'Hello', {
    ok: true,
    status: 200,
    statusText: 'OK',
    type: 'core',
    uri: '/api'
});

// REQ OBJECTS
    const request = new Request('https://example.com/data', {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    cache: 'no-cache'
});

// REQ PARAMETER
fetch(request)
.then( /* do something with the response */ )
.catch( /* handle any errors */ );

// HEADERS - functions: has(), get(), set(), append(), delete()
const headers = new Headers();
const headers2 = new Headers({ 'Content-Type': 'text/plain', 'Accept-Charset' : 'utf-8', 'Accept-Encoding':'gzip,deflate'})

// SUM TOTAL
const url2 = 'https:example.com/data';
const headers3 = new Headers({ 
    'Content-Type': 'text/plain', 'Accept-Charset' : 'utf-8', 'Accept-Encoding':'gzip,deflate'
})

const request = (url,{ headers: headers })

fetch(request)
.then( function(response) {
if(response.ok)
    return response;
    
throw Error(response.statusText);
})

.then( response => // do something with response )
.catch( error => console.log('There was an error!') )

// FORM DATA
const data = new FormData();


// ANOTHER API DATA
$.ajax('http://numbersapi.com/random')
.done(text => outputDiv.innerHTML = text );