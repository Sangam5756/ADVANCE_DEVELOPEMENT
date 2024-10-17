# next js
file based routing

<!-- it compiled and everytrhiong is on the first response -->
it is called server-Side-Rendering -> html is generated on server
 
 <!-- when the googlebot scrap the page and look for page it doesn-t have to load javascript -->
 <!-- the index.html is directly come from the server which have all context of page  -->
 

<!-- folder -->
        layout
        -signin
        -signup

routes -> localhost:3000/folder/signin
routes -> localhost:3000/folder/signup

<!-- (folder) -->
        layout
        -signin
        -signup

routes -> localhost:3000/signin
routes -> localhost:3000/signup

these folder name inside the parenthesis make our route more shorter 
because next js ignore that folder it will not show in route



# client and server

client component sent to rendered on browser
server it run on the server

<!-- to use on client -->
"use client" -> useState ,useEffect, event listener that server donts have any use