// Block right-click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); 
});

// Block F12 (DevTools)
document.addEventListener('keydown', function(e) {
    // Disable F12 (DevTools)
    if (e.keyCode === 123) {
        e.preventDefault();
        alert("Developer tools are disabled.");
    }
    // Disable Ctrl+Shift+I (to prevent opening DevTools)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
        alert("Developer tools are disabled.");
    }
    // Disable Ctrl+U (viewing page source)
    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        alert("Viewing source code is disabled.");
    }
});

// Disable right-click on images and block drag & drop
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        alert("Right-click is disabled on images.");
    });
    img.addEventListener('dragstart', function(e) {
        e.preventDefault();
    });
});

// Disable copying and text selection
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

document.addEventListener('copy', function(e) {
    e.preventDefault();
    alert("Copying content is disabled.");
});

// Preventing image downloading
document.querySelectorAll('img').forEach(function(img) {
    img.addEventListener('dragstart', function(e) {
        e.preventDefault();
    });
});