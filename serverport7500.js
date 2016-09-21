//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
var PORT=7500;

//We need a function which handles requests and send response
function handleRequest(request, response){

    response.end('It Works!! Path Hit: ' + request.url + 'by the way, you are a creative person');

}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
