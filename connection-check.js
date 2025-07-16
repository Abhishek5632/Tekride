// Function to check the user's online/offline status
function checkConnection() {
    if (!navigator.onLine) {
      // Redirect to the offline page if the user is offline
      window.location.href = 'offline.html';
    }
  }
  
  // Listen for the 'offline' event
  window.addEventListener('offline', function () {
    console.log("You are offline");
    // Redirect to the offline page
    window.location.href = 'offline.html';
  });
  
  // Listen for the 'online' event
  window.addEventListener('online', function () {
    console.log("You are back online");
    // Redirect to index.html when the connection is restored
    window.location.href = 'index.html';
  });
  
  // Execute the connection check as soon as the page is loaded
  window.onload = checkConnection;
  