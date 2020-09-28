# SEPT 17, 2020 Milestone 2: React / Redux / Router Project

Title: React / Redux / Router Project
Purpose:React / Redux / Router Assignment to demonstrate competence
Author: Scriptorce (Kenji, Dharmesh, Ayesha and Amr)
Date of last edit: september 28, 2020 9:00 am
==============================================================================================
# Project Related Links

- Assignment: https://drive.google.com/file/d/1TkQkSrqbAsLseSicMVCrTzICGsslFF_G/view?usp=sharing

- Trello board: https://trello.com/b/QuSHXICc

- GitHub Repo: https://github.com/TECHCareers-by-Manpower/milestone-2-react-redux-router-project-scriptorce

- Figma Planning Documents: https://www.figma.com/file/LZIMp2h1294u6McLJMCeoy/Wireframing-in-Figma
==============================================================================================
# Installation Instruction:

Hello there!

WELCOME to our REACT/ REDUX APP...

In order to get this website up and running on your computer, 

- You would first clone the project folder to your local host (computer). Please open you bash terminal and use the following command:
git clone https://github.com/TECHCareers-by-Manpower/milestone-2-react-redux-router-project-scriptorce
- Once you clone the project Repo, you would have to open the VScode, using the following code while in the project folder:
<>code .</>
- Once in the VS code environment, make sure you see all the project folders and files as they appear in the windows explorer window
- Now you will have to run the following command on your bash terminal in order to install the dependencies: 
<>npm install</>
this might take several minutes so be patient and don't close the VScode until you see no errors and usually the console would display "happy hacking" to indicate that the dependencies are fully installed successfully.
- Once all node modules (dependencies) are installed, from your console while on the project folder run the following command to start the react app
<>npm start</>
- The page loading might take a minute, again be patient while loading
- By now, you should have the website up and running on localhost:3000
- Note, if you have other react apps open, while doing <>npm start</> you might be prompt with the following question: Would you like to run the app on another port instead? (Y/n)... Please press y + enter on your keyboard.
That's it... Hope you enjoy browsing our project and looking forward your feedback if you find any issues or you have ideas to improve the website.

Note: <> denotes the start of a code line, while </> denote the end of the code line. Note, you don't need to type either <> or </> in your command line, those are meant to differentiate the code line from the regular text in this document.

Best Regards,
The project's team
==============================================================================================
# Technical support:

For technical support please feel free to leave us comment on GitHub through the issues page, and we will do our best to respond in timely fashion.

Best Regards,
The project's team
==============================================================================================
# Functionality Document

Can be found under the repo > project documentation
==============================================================================================

# Resources: 

The following links has been used as research resources during the project execution. If any code snippet is used, a citation would be added to the corresponding code.

1. Inserting Image in React : https://reactgo.com/react-images/
   2.CheckBox:
   https://stackoverflow.com/questions/17706058/error-cannot-read-property-checked-of-undefined 3.http://jsfiddle.net/jmUXY/1/
2. Save User data: https://html5hive.org/how-to-submit-forms-and-save-data-with-react-js-and-node-js/
3. Good Resource for react forms and Event Handlers: https://livebook.manning.com/book/react-quickly/chapter-7/127
4. Good Resource for React Classes :https://medium.com/capital-one-tech/how-to-work-with-forms-inputs-and-events-in-react-c337171b923b
5. React Icons :https://stackoverflow.com/questions/54576811/react-fontawesome-doesnt-have-free-brands-svg-icons-so-cant-show-the-social-me
6. Hero Section :https://childrenbelieve.ca/about-us/accountability/
7. Multiple Forms Single Button :
   https://stackoverflow.com/questions/7843355/submit-two-forms-with-one-button#:~:text=if%20you%20want%20to%20submit%20two%20forms%20with,use%20setTimeout%20%28%29%202-%20allow%20show%20pop%20up
8. https://stackoverflow.com/questions/40080742/how-to-get-refs-from-another-component-in-react-js
9. https://www.sicara.ai/blog/2018-06-27-custom-nested-validated-forms-with-react
10. https://redux-form.com/8.3.0/docs/api/reduxform.md/
11. https://stackoverflow.com/questions/21187028/javascript-submit-multiple-forms-with-one-button
12. https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react

13. https://stackoverflow.com/questions/17787680/overlay-the-div-on-the-div-of-contact-form
14. OverLay Component Package: https://binodswain.github.io/react-overlay-component/
    15.Static content: https://donate.worldvision.ca/pages/gift-catalogue-frequently-asked-questions?_ga=2.92856925.1149032770.1601052606-1805505462.1600439777&_gac=1.82702692.1601052621.Cj0KCQjwqrb7BRDlARIsACwGad6iGgWtrCOINhqHqsaU67Ph83Ng6zyCJMPZHUwsGN0wBJ5RmFv7R2UaAgO5EALw_wcB
==============================================================================================
# Citation:

(1) File Names:
components/Billing-details.js
components/Credit-card.js
components/Donation-form.js
components/Shopping-cart.js

Citation: Below response in stackoverflow gave me inspiration to what should be done
in my multi-form submission roadblock. I have use React Hooks to give the child component a reference so the parent component can access/ call a function that perform dispatch within the child component. Note that the code in my files is not copied from the resource below, however it follows the same logic.
Purpose: Perform multi-form submission using one submission button.
Source:https://stackoverflow.com/questions/37949981/call-child-method-from-parent
==============================================================================================

(2) File Name: Shopping-navigation.js (Reducer file)

Citation: The sorting function was adapted so that it could sort an array based on the product objects title.
Source: https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
Reason: A function to sort an array based on the inner object properties (title) was needed.
==============================================================================================

(3) File Name: Shopping-navigation.js (Reducer file)

Citation: The sorting function was adapted so that it could sort an array based on the product objects price.
Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Reason: A function to sort an array based on the inner object properties (price) was needed.
==============================================================================================

(4) File Name: Form-validation.js
Citation: Using online resources (links on files) to grab RegEx expression in the if statement
Source: Links kept in the above mentioned file
Reason: We are not so familiar with Regex expression and those many done already are 
available for use not to reinvent the wheel.
==============================================================================================

(5) Other citations:

- Images and Icons Credit has been added to the footer using react-icons library
- Product information has been used from fakestoreAPI.com
- Date picker was used from react-Date-Picker library
- Overall inspiration we got from Edmonton Food bank, Good Will Canada
- Instead of using lorem ipsum, we have copied random articles from charity websites, links above
- Tammy has given a good reference on how to resolve the API asynchronous issue that we faced ... https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao
- Thank you image from Pixabay.com
==============================================================================================

# General Notes:

- We have kept good reference for the websites that we learned from in our NoteJoy, however we
didn't copy code snippets from there, and if we did, it was explicitly mentioned above.

- Across the project files, we followed consistent file naming convention which helped us to be slim on comments specially in CSS as the names are self explanatory.

==============================================================================================
