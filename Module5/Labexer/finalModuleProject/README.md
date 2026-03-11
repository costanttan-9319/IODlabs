Make sure to make a clean MVC Structure and use Swagger to test things out, and make a documentation that is easy to read and test.



My MVC Structure is organised into 

- Public / in charge with front end 

- Routes / in charge of hearing requests and points them to the correct function in the controller

- Controller / in charge with managing the flow , ensuring the request baton 
is being brought over to the backend and using AXIOS to fetch data from (in this case) the external fakestore API and then properly responds back.

- app.js / conguring of express, CORS, and connects the route and Swagger

- server.js / in charge of the server port 3188. 



By doing such structure allows me to make changes for updates, and if things dont work, its easier for anyone to find and amend errors according to the failed test message during test. 