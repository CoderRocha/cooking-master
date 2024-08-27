# Cooking Master

"Cooking Master" is a simple app project created by me, Guilherme Rocha, to understand more the process of creating a React Application from the ground up, utilizing many of the React features, such as "React Hooks", and more about local and realtime databases using 'json-server' and 'Firebase'. Also, the project is currently using Firebase 'Realtime Database' to store data, but initially, it was created to run with local databases with "json-server".

# How to run the app correctly?

After you download and extract all the source code on the zip file to it's own folder, you can run the following commands in order on the project directory terminal to install the necessary dependencies to run the application without any issues:

### `npm install`

After the installation, you need to install a specific 'Firebase' version, so the 'Realtime Database' works properly.
Run the following command to install the correct version for this project:

### `npm install firebase@8.5`

After both installations, to run the React application, you need to run the following command in a terminal:

### `npm run start`

And then, access the application in the following local URL:
[http://localhost:3000](http://localhost:3000)

The project is about a simple app that you can view and create your own recipes lists. It can display 3 recipes on each row, that are organized according to the order you create them. Each lists contains the Recipe title, ingredients, method and cooking time, so you can follow the step-by-step of each recipe to reproduce it correctly in real life, according to the info you added on each recipe list.

And to add a little touch, you can either use the "Light" or "Dark" mode according to your own preferences, on the "Bright Sun" icon located in the left-up corner of the screen.
You can also change the "Navigation Bar" color to add a personal touch, to feel more familiar with the app, by clicking in one of the "colored circles" on the right-up corner of the screen, so you can add your favourite color to your own recipes app, to bright your day while you're cooking :D

You can also search for the recipes you've created using the "Search Bar", and you can delete any recipe by clicking on the "Trash can" icon next to each recipe.

## App Features

- Search bar to search for the recipes you've created
- Option to create new recipes, containing 4 unique fields to add your own recipe name, ingredients, method and
  cooking time in minutes!
- Light and Dark Mode button
- List of the recipes that you created, and they are organized by order when you create them
- A button that is present in each recipe, so you can click it and fully view the recipe itself
- Another button to delete the recipe if you don't like it or won't use it anymore
- You can customize your Navigation Bar with different colors as well!

## Technologies used in this project

- HTML5
- CSS3
- Javascript
- React.js
- Json-Server for Local Database (Not used anymore. Replaced by Firebase Realtime Database)
- Firebase (Realtime Database)

### Final Considerations

You can add as many recipes as you like, and when creating a new recipe, you can't add the same ingredient twice, so it won't appear if you try to put the same ingredient on the recipe you are currently creating.

Also, if you search for a specific recipe name, method, cooking time or ingredient, it will only show what you have searched. If you search something that don't exist in any of the recipes yet, it won't show anything :(