# TNP
 This is a full stack clone website of Training&PlacementCell(TNP), GNDEC. I am using  React js library for frontend development and for styling raw CSS and bootstrap library, Node js library for Backend development and Mysql Database for the data management.  

 I have used json server npm package to make my restapi so first we create a json-server then restapi is created then we run our react app.
 Constraints-Both the servers should be running on different ports.

I have a problem with loading Spinner. My api is fetching all the records one at a time so it gives no time to show spinner. I tried another way to show spinner is by limiting my api to fetch only particular amount of records using the following url  'http://localhost:8000/genconians/?_page=1&_limit=6' and made two states current_page_limit and page_prev_limit which gets on updating using setstate page_prev_limit = current_page_limit, current_page_limit = current_page_limit+6 and putting the condition that if page_prev_limit>= current_page_limit then show Spinner.
But this didn't work I think the reason might because it is not iterating to follow the above condition at each stage so To do so I have to make for loop untill all the records are fetched. 


#I am not able to connect my node js with react js to make post request and save the received data to my Mongodb server

#STEPS TO RENDER PAGE 
1.write the command cd my-app
2.write the command json-server ./src/Data/Genconians.json -p 8000
3.Go to another terminal and follow step 1 and then write the command npm start
4.Go to another terminal and follow step 1 and then write the command mongod
5.Go to another terminal and follow step 1 and then write the command cd Server and then write node index.js