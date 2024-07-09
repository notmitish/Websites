    // Get the button element
    const button = document.getElementsByClassName('login');

    // Define the event handler function
    function handleClick() {
      alert('Button was clicked!');
    }

    // Add the event listener to the button
    button.addEventListener('click', handleClick);