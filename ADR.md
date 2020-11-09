## Architecture Decision Records

### React

In order to quickly create a complex and interactive web app, we looked at several different <br/>frameworks.  Our client wants users to have a real time experience, where data transforms as they <br/>manipulate parameters. Web frameworks are a necessity for creating these kinds of experiences: and the 3<br/> that stand out are Vue, Angular, and React. Since two group members already had experience with React,<br/> we decided to stick to it in order to avoid a learning curve with a new framework.

### GraphQL

In order to create an organized API that works well with complex queries, we chose to use GraphQL. The<br/> nature of the app requires querying a backend database with 5 or more potential parameters on any given <br/>query. A REST API for this solution would look incredibly clunky: but given GraphQL's query and variable<br/> system, a clean solution is much easier.

### Bulma

**Summary**
In order to style our web page, we decided to use Bulma as our CSS framework.

**Problem**
We want our website design to be responsive on different platforms. If the user decides to view our <br/>project on their mobile device instead of their computer, our site can adjust responsively. In addition,<br/> we want the designs on our website to be familiar to the users. This is important because they can<br/> navigate through the site easier and it's more intuitive.

**Constraints** 
None

**Options**
Plain CSS:
- Pro: we have more options when styling our website, we aren't restricted as much
- Con: no built-in library that we can use (css made for a button), might not be responsive on different devices

Bootstrap:
- Pro: intuitive class names, large library of different UI components
- Con: many pre-defined styles so the users don't have a lot of choice, repetitive (dull) styles

Foundation:
- Pro: more flexibility when compared to Bootstrap, neat features like form-validation
- Con: Small community (less forum responses), more freedom so users might be overwhelmed by the list of options

Bulma:
- Pro: good documentation, easy class names, designs are responsive on different devices, good range of styles
- Con: built-in classes so users have less freedom, less components when compared to Bootstrap

**Rationale**
We decided to use Bulma as our CSS framework because Bulma has intuitive class names that make CSS <br/>styling easy. Bulma also has a limited amount of design components, so we can play around with different<br/> styles while avoid being overwhelmed. Bulma keeps up-to-date documentations on their service, which <br/>makes it easier to troubleshoot. Lastly, Bulma is responsive on difference devices and can adapt to<br/> different platforms.

### Typescript

**Summary**
In order to use a programming language that defines different variable types, we decided to use TypeScript.

**Problem**
When a language doesn't define a specific type for its variables, it might be confusing for the user to <br/>know the exact state of that variable. It can be difficult to debug without knowing the type and state <br/>of an variable. 

**Constraints**
We want to use a frontend-focused language that all of us have had experience with, so we are <br/>comfortable from the beginning.

**Options**
JavaScript
- Pros: simple, popular so more documentation, client-side so less work is put on the servers
- Cons: types aren't defined so bugs are discovered at run time, different browsers will interpret code differently

TypeScript
- Pros: types are defined, additional features like interfaces and generics that don't exist in JavaScript, compile time type checking
- Cons: longer code when compared to JavaScript that might not add any clarity

**Rationale**
We chose TypeScript over JavaScript as our frontend language because we want to have our types clearly <br/>defined. Bugs will be discovered earlier at compile time rather than at run time. Also, the users will <br/>know the exact state of a variable rather than inferring it. 

### MySQL

In order to access the data provided by Prof. Hurlbert and his team in an efficient, reliable, and <br/>standardized way, we decided to use MySQL.<br/>
The backbone of the Avian Diet Database project a database that is currently  a tab deliminated text <br/>file. Prof. Hurlbert's current method of querying is a set of R functions that he wrote himself.<br/>
Since we decided to use GraphQL as the API to serve our data to the frontend, we can easily fit this<br/> with the data by using TypeORM with a database like MySQL.<br/>
Furthermore, using SQL to query the database rather than creating our own parser for a text file would<br/> be much more efficient in term of time and manpower.<br/>
There are other databases that we have also looked into like MongoDB or PostgreSQL, but the client <br/>requests we use MySQL due to his own preference.<br/>
Since the database is relatively flat, there would be no huge benefit for any other database, so we <br/>ultimately chose based on client preference.

### Carolina Cloud Apps

In order for the frontend to access our APIs, we decided to use Carolina Cloud Apps to host the backend and database.<br/>
There are other alternatives like Heroku, but since the database contains over 50,000+ rows, it exceeds<br/> the free tier limit that Heroku provides. This is a similar issue for other services.<br/>
We decided to use Carolina Cloud Apps because Prof. Hurlbert is able to increase memory limits for the servers for free if needed.<br/>
Having the backend also in Carolina Cloud App allows easy interaction between it and the database.<br/>
Prof. Hurlbert also prefers the use of Carolina Cloud App, since he is able to get direct assistance <br/>with University staff if any trouble is to occur.
