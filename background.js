import browser from "webextension-polyfill";

// Ensure the background script continues running by adding error handling
browser.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install" || details.reason === "update") {
    // Perform any necessary actions after installation or update
    console.log("Extension installed or updated.");
  }
});

// Handle browser action click event
browser.browserAction.onClicked.addListener(function (tab) {
  // Use try-catch to handle potential errors and prevent the script from stopping
  try {
    // Send a message to the content script
    browser.tabs.sendMessage(tab.id, { message: "clicked_browser_action" });
  } catch (error) {
    console.error("Error in background script:", error.message);
  }
});

// Keep the background script running persistently
// This is not necessary in most cases, but if you want to ensure
// the script runs continuously, you can use a setInterval or similar approach
// Example:
// setInterval(() => console.log('Background script is running'), 60000); // Log a message every minute
