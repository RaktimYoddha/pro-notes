
<h1 align="center"> Pro-Notes </h1>

<p align="center">
  
 <img src="https://img.shields.io/github/languages/code-size/Abusayid693/Type-writer"  alt="size" />

 <img src="https://img.shields.io/github/languages/top/Abusayid693/Type-writer " alt="license" />
  
 <img src= "https://img.shields.io/github/issues/Abusayid693/Type-writer" /> 

<img src="https://img.shields.io/badge/Codepen-000000?style=for-the-badge&logo=codepen&logoColor=white"/>
  
</p>


<h3 align="center"> Short Brief </h3>

<p align="center">


  </p>

## Contents:
- About
- Project Starter
- Features
- Tools and Packages
- Deployment

---

# ✊ About

<p>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>

<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>

<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>

<img src ="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white"/>

<img src ="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"/>

</p>

> Type-writer is a documenting web application that supports markdown editing, copy pasting images etc.



[](https://i.imgur.com/EXmDWRR.png)

--- 
# 👨‍💻 Getting started


This section will work you through how you can get started with the project.

### Directory Layout


<pre>
.
├── <strong>Backend</strong>
│   │  
│   ├── <strong>middlewares</strong>
│   │
│   ├── <strong>models</strong>
│   │
│   ├── <strong>routes</strong>
│   │
│   ├── <strong>db.js</strong>
│   │
│   └── <strong>index.js</strong>
│
│ 
├── <strong>Pro-notes-frontend</strong>
│   ├── <strong>public</strong>
│   └── <strong>src</strong>
│       │    
│       ├── <strong>assets</strong>
│       │ 
│       ├── <strong>components</strong> 
│       │   ├── <strong>Homepage</strong>
│       │   │   │
│       │   │   └──<strong>Navbar</strong>
│       │   │      └──<strong>index.jsx</strong>
│       │   │      └──<strong>Navbar.jsx</strong>
│       │   │
│       │   └──<strong>Notespage</strong>
│       │      └──<strong>NoteCard</strong>
│       │         └──<strong>index.jsx</strong>
│       │         └──<strong>NoteCard.jsx</strong>
│       │    
│       ├── <strong>constants</strong>
│       │   └──<strong>config.js</strong>
│       │  
│       ├── <strong> Pages</strong>
│       │   ├── <strong>Homepage.jsx</strong>
│       │   ├── <strong>LoginPage.jsx</strong>
│       │   ├── <strong>NotesPage.jsx</strong>
│       │   └── <strong>SignupPage.jsx</strong>
│       │ 
│       ├── <strong>Redux</strong>
│       │   │
│       │   ├── <strong>notes</strong>
│       │   │   ├──<strong>note.action.js</strong>
│       │   │   ├──<strong>note.reducer.js</strong>
│       │   │   └──<strong>note.action.js</strong>
│       │   │
│       │   ├── <strong>users</strong>
│       │   │   ├──<strong>user.action.js</strong>
│       │   │   ├──<strong>user.reducer.js</strong>
│       │   │   └──<strong>user.action.js</strong>
│       │   │
│       │   └── <strong>store.js</strong>
│       │ 
│       └── <strong>routes</strong>
│           ├── <strong>AllRoutes.jsx</strong>
│           └── <strong>PrivateRoute.jsx</strong>
│       
└── README.md
</pre>






### Run on your local server

You will need [NodeJS](), [Git]() and [MongoDB]() installed to run this project locally

      node@v10.16.0 or higher
      npm@6.9.0 or higher
      git@2.17.1 or higher

If you dont have [MongoDB]() you use [MongoDB Atls]()


1. Clone the repo
 ```bash
 git clone https://github.com/RaktimYoddha/pro-notes.git
```

2. Create a file called .env in the Backend directory of your project:


       Backend
       └──- Controllers
           - Models
           - .env         <-- create it here
           - .gitignore
           - index.js
           - package-lock.json
           - package.json



3. Inside the .env file, add key `DB_CONNECTION` and assign your MongoDB local host or Mongo Atls like this, also add `NODE_ENV` and `JWT_SECRET`.


```bash
# .env
DB_CONNECTION = "YOUR_DB_LOCAL_HOST" 
# eg : mongodb://localhost/typewriter1 or mongodb+srv://"Your username ":" your password "....

JWT_SECRET = "YOUR_JWT_SECRET"
NODE_ENV = development
```


Warning: Treat your tokens like passwords and keep them secret. When working with the API, use tokens as environment variables instead of hardcoding them into your programs.


4. Starting the server application.
```bash
cd pro-notes && cd pro-notes-backend 
npm install
Nodemon index.js
```
   `This will start server on localhost:8000`     

5. Starting the Client application.
```bash
cd pro-notes && cd pro-notes-frontend 
npm install
npm start
```
   `This will start client app on localhost:3000`  





---
# 🚀 Features
## 1. [Markdown rules]()

### Heading tags
For heading user can use prefix "#"

```bash
Prefix " # "                                          -- For H1 tags
prefix " ## "                                         -- For H2 tags
prefix " ### "                                        -- For H3 tags
prefix " #### "                                       -- For H4 tags.  
```
`user must press Space after entering prefix`    
 ### [Lists tags]()
#### Unordered Lists 

```bash
prefix " - "                                          -- for Unordered Lists elements 
```
#### Ordered Lists 
```bash
prefix " Numerical digits "                           -- for Ordered Lists elements   
```
`user must press Space after entering prefix`    


# 🧰 Tools & Packages

## Client 


  | Package | Description | version |
  | ------------ | ------------- | ------------- |
  | [axios](https://www.npmjs.com/package/axios) |Promise based HTTP client for the browser and node.js|  0.21.1 |
   | [React-redux](https://react-redux.js.org) |A predictable state container for JavaScript applications|  0.21.1 |
  | [react-equation](https://www.npmjs.com/package/react-equation) | Used of displaying equations over webpages | 0.2.1 |
  | [react-resizable](https://www.npmjs.com/package/react-resizable) | To make resizable react components |3.0.4 |
  | [react-dropdown](https://www.npmjs.com/package/react-dropdown) | React dropdown menu      | 1.9.2 |
  | [react-syntax-highlighter](https://www.npmjs.com/package/react-syntax-highlighter) | Used for syntaxhighlighting in coding blocks,texts etc | 11.0.3 |
  | [react-typed](https://www.npmjs.com/package/react-typed) | Typing annimation in react | 1.2.0 |
  | [file-saver](https://www.npmjs.com/package/file-saver) | provides downloadable formats of files  | 2.0.5 |
  | [jsPDF](https://www.npmjs.com/package/jspdf) |A library to generate PDFs in JavaScript.  | 2.3.1 |
  | [material-ui](https://material-ui.com)| Customized React components | 4.12.2 |
  | [react-color](https://casesandberg.github.io/react-color/) | color palette | 2.19.3 |


## Server



  | Package | Description | version |
  | ------------ | ------------- | ------------- |
  | [mongoose](https://mongoosejs.com) | elegant mongodb object modeling for node.js | 5.13.3 |
  | [morgan](https://www.npmjs.com/package/morgan) |HTTP request logger middleware for node.js | 1.10.0 |
  | [express](https://expressjs.com) | Node.js web application framework for server side scripting | 4.17.1 |
  | [MongoDB](https://www.mongodb.com) | a NoSQL database | 4.4.3 |
  | [bcryptjs](https://www.npmjs.com/package/bcrypt) | A library to help you hash password | 4.4.3 |
  | [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) | An implementation of JSON Web Tokens | 8.5.1 |  
