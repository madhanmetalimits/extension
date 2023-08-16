// content.js

// Function to change the color of a specified element
function changeElementColor(element, color) {
    element.style.backgroundColor = color;
  }
  
  // Listen for messages from the popup
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "changeColor") {
      const selectedColor = request.color;
  
      // Apply the color change to all div elements on the page
      const divElements = document.querySelectorAll("div");
      divElements.forEach((div) => {
        changeElementColor(div, selectedColor);
      });
  
      sendResponse({ message: "Color changed successfully!" });
    }
  });
  