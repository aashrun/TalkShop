# Social Media Analytics Platform Microservice

## Overview
This project implements a scalable microservice for a hypothetical social media analytics platform using Typescript and Node.js. The primary focus is on creating, retrieving, and analyzing social media posts with considerations for scalability and infrastructure.



## Setup Guide

### Installation
1. Clone the Repository:

```
git clone <repository_url>
```

2. Install Dependencies:

```
cd <project_directory>
npm install
```


3. Configure MySQL Database:
    a. Open MySQL Workbench and replace mysqlDatabase, mysqlUsername, and mysqlPassword with your credentials.
   
    b. Run it on localhost.


5. Run the Application:

```
cd TalkShop
npx nodemon app.ts
```


## Backend Requirements
a. **Express Framework**: Used for backend development.  

b. **REST Framework**: Implementation of RESTful API endpoints.  

c. **SQL Database**: MySQL chosen for data storage.  

d. **Caching Mechanism**: Utilizing Node-Cache for caching purposes.  

e. **IP Based Rate Limiting**: Implemented using Express-Rate-Limit.  



## Project Structure
a. **Controllers**: Main business logic resides in the controllers folder.  

b. **Helpers**: Validation logic is separated into the helpers folder.  

c. **Models**: Contains the schema for the MySQL database.  

d. **Routes**: All API routes are defined in the routes folder.  


## Major Libraries Used
a. Express  

b. Nodemon  

c. UUID (for generating unique post IDs)  

d. Node-Cache (for caching)  

e. Express-Rate-Limit (for IP based rate limiting)  

f. Sequelize (for MySQL query conversion)  

g. Mysql2 (MySQL connectivity)  



## API Usage
1. ### Create Post
**Endpoint**: POST /api/v1/posts/createPost  

**Request Body**:

```
{
    "useCase": "bio",
    "data": "Ed"
}
```

**Note**: "useCase" can be "bio", "postCaptionAndComment", or "tweet" ONLY.

2. ### Get Post Analysis
**Endpoint**: GET /api/v1/postAnalysis/getPostAnalysis/:id  

**Usage**: Copy the post ID from the database and replace ":id" in the endpoint.  

**Functionality**: Returns analysis including the number of words and average word length in the post.


## Scalability Considerations
1. ### Handling Large Data and High Requests:

    a. Utilizing efficient database indexing.
   
    b. Implementing asynchronous processing for high request volumes.

    c. Large Data is handled by checking the length of the "data" key. For bio, the limit is character limit is 160, postCaptionAndComment has 2200 and tweet has 4000.

    d. High Number of requests are handled by Express-Rate-Limit library which has been implemented in the app.ts file, inside the routes.

   

2. ### Parallelization of Analysis Computation:

    a. Designing analysis computation to be distributed in the helper.ts file under the helpers folder keeping into consideration for future API purposes.
   
    b. Exploring the use of microservices for parallel processing.




## Known Issues and Improvements

1. ### Error Handling Constraints:

    a. TS strictness limited the use of certain error handling techniques.

2. ### Middleware DB Call:

    a. Due to TS strictness, the middleware DB call couldn't be made global for use in the main API.

3. ### Environment Variable Conversion:

    a. TS strictness prevented the straightforward conversion of string to number for process.env values.


## Conclusion
This project demonstrates the implementation of a social media analytics microservice using Typescript and Node.js, with a focus on scalability and infrastructure considerations. It serves as a foundation for future enhancements and improvements.
