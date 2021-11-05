# group-06

IRMS System - React + Node.js Express: User Authentication with JWT
- Node Js – JWT Authentication & Authorization (Backend) with JSONWebToken & Sequelize
- React - JWT Authentication

Registration, Login, Logout

# Steps to run the IRMS project

1. First you need to have these prerequisites installed in your machines

    - XAMPP
    - VS Code
    - Postman
    - MySQL - > phpMyAdmin
    - Node

2. Next clone this repository to your local machines

3. Create the database called "irms_db" (no need to create the tables since they will be automatically created )

4. Change the "db.config.js" file in "app->config" folder according to your MySQL Connection (username and password)

4. Then open the root directory which is "irms-backend" in command propmt and run "npm run dev" command
If an error occurred while running this you have to run this command “npm install”. (you may also need to run “node server.js”).

5. After that you can connect to the IRMS web application. There you will be able to login and register to the system.
    Register -> Login

6. Using postman you can register some users with /signup API. Users are based on roles.
    - admin -> admin role -> userID as 3
    - internMgr -> intern manager role -> userID as 2
    - user -> user role -> userID as 1

7. Sample outputs are added on sample Outputs Folder.


