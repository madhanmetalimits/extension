document.addEventListener("DOMContentLoaded", function () {
    const applyColorButton = document.getElementById("applyColor");
    const colorPicker = document.getElementById("colorPicker");
  
    applyColorButton.addEventListener("click", function () {
      const selectedColor = colorPicker.value;
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "changeColor", color: selectedColor });
      });
    });
  });
  
  function applyColor(selectedColor) {
    document.body.style.backgroundColor = selectedColor;
  }
  