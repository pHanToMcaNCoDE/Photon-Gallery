# User Sign-Up Requirements

1. email: user@example.com
2. password: 1Password

# About Project

A responsive image gallery that allows users to drag and drop images in an order of their choice. A login and registration form was implemented using ReactJS and Firebase to add more interaction between the users and the gallery. A search function was also integrated to allow users to search for images in the gallery.

# Features:

1. User Authentication: This was implemented using Firebase. However, the authentication is limited to a signup page. This means that only one email and password (as seen above) will allow you to access the site.
 
2. Drag and Drop (dnd): The dnd was implemented using the react-beautiful-dnd library. This feature allows users to drag an image into the gallery and drop it at the position of their choice.

3. Skeleton Loader State: The loading state is fired immediately when the authorized user accesses the website. This state was implemented using pure CSS.

4. Search Function: This was implemented by filtering the images in the gallery based on the name or tag typed in the given search in the input field.

# Errors Encountered:

1. "Unable to find draggable with id: {DataID}": This error was resolved by converting the draggable id data key of each item in the gallery to string.
    
<img width="556" alt="Screenshot 2023-09-21 at 05 49 16" src="https://github.com/pHanToMcaNCoDE/Photon-Gallery/assets/113244998/c3242019-3f15-4684-acae-8c71f3f1a582">

2. Items not dragging: Ensure that you type in the draggable attribute and set it to true. Syntax:
   draggable={true}

3. Items not dropping: You must create a state that stores the current position of an item that is picked. Then updates are made to the current status of the item. Also, ensure to add {provided.placeholder} to know the last item in the gallery (I really don't know how else to explain this 🤷🏽‍♂️).




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
