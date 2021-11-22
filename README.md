## 0. Avian Diet Database

A mobile-friendly web page that presents bird diet information using  data compiled by Prof. Hurlbert’s <br />lab in an interactive and easy to digest manner. It does this using data visualizations (e.g. maps, graphs, etc.)<br /> along with interactive filters (e.g. geographic, temporal, taxonomic, etc.) that provide a variety of ways to <br />explore the relationships between a bird and its diet.

## 1. Getting Started
### Prerequisites
- Git
- npm
- [Node.js](https://nodejs.org/en/)

### Installing
1. Clone the repository
    
    `https://github.com/avian-diet-database/dietdb-frontend.git`

2. Run npm install to have all the libraries

    `npm install`

### Running Locally
In the project, you can run 

`npm run start-dev`

to launch a local server to see the unbuilt files live.

`npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

`npm run start`

Launches the app from the build folder. This will not live-update, run build in order to see updates.



### Warranty
These instructions were last tested on Nov. 12th, 2021 by https://github.com/pichhim on Windows 10

## 2. Testing 
`npm test`

Launches the Jest test suites while file-watching.<br />

Use the options '-- --coverage --watchAll=false' to generate a code coverage report.

## 3. Deployment

The frontend, backend, and production database are deployed using Carolina Cloud Apps. 

When local changes are pushed onto GitHub, the changes will be built automatically,<br /> and the production will be updated. 


## 4. Technologies Used

### Frontend
- React
- Apollo Client
- Bulma 
- react-vis
- Typescript

Fall 2020 architecture decision records can be found in the ADR.md file.
For Data Submission Implementation in Fall 2021, our architecture decision records can be found in the ADR-fa2021.md file.


## 5. Contributing
### Access
New developers will need access to both the GitHub repository and the Trello board <br />for this project before contributing
### Style and code conventions
Use JavaScript linter [ESLint](https://eslint.org/)

Use [JavaScript](https://standardjs.com/) Standard Style

Follow the [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) and with separate branches created for each major feature

### [Website Link Fall 2020](https://comp523fa2020.github.io/Overview/)
### [Website Link Fall 2021](https://tarheels.live/comp523project/)

## 6. Authors

### Frontend
- Teddy Randby (Fall 2020)
- Muyan Pan (Fall 2020)
- Eden Chou (Fall 2021)
- Pich Him (Fall 2021)

### Backend
- Thomas Le (Fall 2020)
- Kevin Le (Fall 2020)
- Pich Him (Fall 2021)

## 7. TODO
- Refactor with a state management library - like Redux. 
- Build in UI for user profiles for each user to keep track of approval progress on their submissions.

## 8. Licenses

MIT license



## 9. Acknowledgements

- Professor Allen Hurlbert for providing the R queries and consistent feedbacks
- Jacob Yackenovich for mentoring us weekly and answering our questions
- Derek Chadwell for mentorship during Fall 2021 semester
