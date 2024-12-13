$(document).ready(function() {
    $('#registrationForm').submit(function(event) {
        event.preventDefault();

        // Capture form data
        var formData = $(this).serialize();

        // Send data to submit.php using AJAX
        $.ajax({
            type: 'POST',
            url: 'submit.php',
            data: formData,
            success: function(response) {
                // Display the result on success
                var data = JSON.parse(response);
                $('#displayName').text('Name: ' + data.name);
                $('#displayEmail').text('Email: ' + data.email);
                $('#displayPhone').text('Phone: ' + data.phone);
                $('#displayAddress').text('Address: ' + data.address);
                $('#result').show();
            },
            error: function() {
                alert('Error submitting form!');
            }
        });
    });
});
