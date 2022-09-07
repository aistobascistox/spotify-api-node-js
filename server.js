/* Load the HTTP library */

import { createServer } from "http"; 

/* Create an HTTP server to handle responses */

createServer(function(request, reponse) {
     reponse.writeHead(200, {"Content-Type": "text/plain"}); 
     reponse.write("Hello World!"); 
     reponse.end(); 
}).listen(8888); 


         