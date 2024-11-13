# next

## server side rendering

- hit url get all thing in one index.html file
- all the processing done on the server

the thing i learned today the next js we write the component as async

- Async component

- loading.tsx
  - if the component is gonna take time to fetch the data
  - in mean time what should user see
  - obviously the loader
  - so next js say put the loading.tsx in the top of file
  - next will automatically identifies it and show the user loading while data is not present

# Api in next js

- usually we add the page.tsx beacasue its a page inside that ui is written
- but when we write the api for the data fetching at that time we dont create page.tsx we
  create the <u>route.tsx</u> becasuse its route inside of it api is written.

# Routes in Next

- to create the end point in next we create the api folder inside of that create the route
- In next the route are create using function name
- if function name is GET() the it will be get request
- if function name is POST(req:NextRequest) the it will be POST request
  - NextRequest is type of request in next
  - we need to add await so whenever we need to use req body gotta use async function
  - await req.json(); - mean also need to convert in to JSON
- Response in Next Response.json({message})

## in next we import next/navigation not next/router

- to redirect user to another page

#### in next when we fetch url we are sending request to next-server to next-server so instead of creating the routes for some different file like get detail like we can add that code directly on our component

##### next

- get params -> req.nextUrl.searchParams.get(name of param);
- get headers => req.headers.get("name of headers")
