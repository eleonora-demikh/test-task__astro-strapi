# Please, follow the installation instructions for the project

- Open the Project: Navigate to your project's root directory using your terminal.

- Ensure that your Node version is not lower than the recommended one.
- !!! Recommended version: v18.16.0

Run the script below in the root folder to install the necessary npm packages (equivalent to npm install).

```
  node install-subprojects.js
```

- In the root folder of the backend, create a file named `.env ` with the following content:

  ```
  APP_KEYS="jhkvasafV"
  API_TOKEN_SALT="SomeRandomText"
  ADMIN_JWT_SECRET="AnotherRandom123"
  ```

- In the root folder of the frontend, create a file named `.env ` with the following content:

```
STRAPI_URL="http://127.0.0.1:1337"
```
  
- Run the following command from the project's root directory to start the development server:

```
npm run dev
```

This command will start both the backend server on port 1337 and the frontend on port 3000.

# Access the Server and Frontend:

- To access the backend server, open your web browser and go to:

[http://localhost:1337](http://localhost:1337)
This is where the server should be running. 

# Important!
  Create an account and log in.
Go to the Content Manager section and create a new entity called 'Cards'. Then press Save and Publish.

As an example, you can use the following data:
- type: "A dog (not sure)"
- name: "Finik"
- description: "A dog named Finik, 1.2 years old. Also called "Hey!", "Spit!", and "Fluffy shrimp". Willful and stubborn creature. Likes to steal underwear and socks."
- imgUrl: "https://i.postimg.cc/WzsnNTsX/Finik.jpg"

Go to the Server Settings and select 'Roles' in the USERS & PERMISSIONS PLUGIN. In Permissions/Public, grant access to 'find' and 'findOne' options.


- To access the frontend part of your application, open your web browser and go to:

[http://localhost:3000](http://localhost:3000)
This is where the frontend part of your project should be available.

Now you should be able to interact with your project's frontend and backend locally using the specified ports. Make sure to follow any project-specific instructions for further development and testing.
