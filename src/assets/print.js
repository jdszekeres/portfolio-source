 function updateBackground(element,progress) {
    style = element.style;
    style.background = `linear-gradient(0deg,rgb(0,0,0) 0%,rgb(0, 0, 0) ${progress}%,rgb(255,255,255) ${progress+0.01}%, rgb(255, 255, 255) 100%)`;
    style.backgroundColor = "#000";
style.backgroundSize = "100%";
style.backgroundRepeat = "repeat";

// Set the background to be clipped to the text and transparent
style.webkitBackgroundClip = "text";
style.webkitTextFillColor = "transparent";
style.mozBackgroundClip = "text";
style.mozTextFillColor = "transparent";
  
}
