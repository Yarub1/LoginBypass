

# README

## Overview
This project contains a combination of frontend and backend code for a web extension that includes a content script, a background script, and a popup. The main functionality involves bypassing certain prompts on a website using a content script and proxying requests through an Express server.

## Content Script (content.js)
The content script is injected into the web page and is responsible for disabling Segment analytics, hiding an account creation prompt, and bypassing registration/login prompts.

### Disable Segment Analytics
The script checks if the Segment analytics script is present and removes it if found.

### Disable Account Creation Prompt
The script hides the account creation prompt on the page.

### Bypass Registration/Login Prompts
Depending on the URL, the script either bypasses the registration process using a simulated SQL injection payload or bypasses the login process with a hardcoded login payload. Successful actions are logged, and the user is redirected to a desired page.

## Express Server (server.js)
The server acts as a proxy for Sentry API requests, forwarding them to Sentry and returning the response to the client.

### Usage
- Install dependencies: `npm install`
- Run the server: `npm start`
- Access Sentry API through `http://localhost:3000/sentry`

## Web Extension (background.js, popup.js, popup.html)
The web extension consists of a background script and a popup.

### Background Script (background.js)
- Listens for installation or update events.
- Handles browser action click event by sending a message to the content script.

### Popup
- HTML file (popup.html) contains checkboxes and a button.
- JavaScript file (popup.js) sends a message to the content script based on user interactions with checkboxes and button.

## Usage
1. Load the extension in the browser.
2. The content script runs on page load and performs the specified actions.
3. The background script ensures the extension continues running persistently.
4. The popup allows users to interact with the content script by toggling checkboxes and executing actions.

## Note
- This project is for educational purposes only and demonstrates techniques that may be considered unethical or malicious.
- Use responsibly and adhere to ethical coding practices.
- The provided code should not be used in a real-world scenario without proper authorization.

## Dependencies
- Express
- Cors
- Axios
- Webextension-polyfill
