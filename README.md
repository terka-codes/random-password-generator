# Password Generator using JavaScript
This is a simple project that generates two random passwords of 16 characters each using JavaScript. This project can be used as a reference for beginners to learn how to generate random passwords and how to copy text to the clipboard.

👉 [Live site](https://amazing-florentine-a8836a.netlify.app/) 

## My Thought Process 👩‍💻
When I started working on this project, I wanted to create a password generator that would randomly generate two passwords of 16 characters each.

I began by creating an array of characters that could be used in a password. Then, I wrote a function to randomly select characters from the array until it reached the length of 16 characters.

Next, I created a function to call the password-generating function twice and update the text of two password elements on the page.

I also added a feature to copy the password to the clipboard when the user clicked on the password elements.

Finally, I customized the colors and styles of the page to make it look more visually appealing.

![Snímek obrazovky 2023-02-25 v 7 36 30](https://user-images.githubusercontent.com/107133029/221342688-6dbe26b5-9554-4c96-96aa-593d623d6668.png)

Overall, I enjoyed working on this project and learned a lot about JavaScript and creating dynamic web pages. As a junior front-end developer, I'm excited to continue learning and improving my skills.

## How to Use
To use this project, follow these simple steps:

### Clone the repository or download the source code from GitHub.
Open the index.html file in your web browser.
Click on the "Generate Password" button to generate two random passwords.
Click on either password to copy it to your clipboard.
Technologies Used
This project was built using the following technologies:

- HTML
- CSS
- JavaScript

## How it Works
The project uses an array of characters that can be used in a password. The makePassword() function generates a password by randomly selecting characters from the array until it reaches the length of 16 characters.

The generatePasswords() function calls the makePassword() function twice to generate two random passwords and updates the text content of two password elements in the DOM.

The copyToClipboard1() and copyToClipboard2() functions are called when the user clicks on either password element. These functions use the navigator.clipboard.writeText() method to copy the password text to the clipboard and update the text content of a message element in the DOM.

## Credits
This project was created by [@TerkaCodes](https://twitter.com/TerkaCodes) as a practice project for learning front-end development with JavaScript on [Scrimba](https://scrimba.com/learn/frontend).
