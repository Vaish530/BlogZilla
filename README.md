# BlogZilla
Blogzilla:blogging platform built for simplicity  .Create, manage, and publish content with ease. Perfect for developers looking for a customizable solution to run their own blog.
Features
User Authentication: Secure sign-up and login using JWT (JSON Web Tokens).

*Blog Posting: Users can post blogs with titles, content, and images.

*Blog Commenting: Registered users can comment on blogs.

*View Own Blogs: Users can see and manage their own blogs.

*Admin Dashboard: Admins can delete any blog post.

*Responsive UI: Built with EJS templates and styled with Bootstrap.

Technologies Used
*Backend: Node.js, Express.js

*Database: MongoDB

*Frontend: EJS, Bootstrap

*Authentication: JWT (JSON Web Token)
Prerequisites

*Node.js (v14 or later)

*MongoDB (Make sure MongoDB is running on your machine or use a MongoDB Atlas cluster)

neccesary steps:

cd blog-zilla

npm install
npm init -y
npm start
run as node server js

JWT Authentication Flow
Signup: Users can sign up by providing a username, email, and password. Upon successful signup, a JWT token will be issued.

Login: Users can log in using their credentials. Upon successful login, the server will send back a JWT token that needs to be included in the Authorization header for accessing protected routes.

Admin Authentication: Admins have a special role, allowing them to delete blogs. Admins can log in and get a token with special permissions to manage the system.
The frontend is built with EJS templates, with Bootstrap styling to ensure responsiveness.

Login Page: /login

Signup Page: /signup

Dashboard: /dashboard (Where users can manage their blogs)
