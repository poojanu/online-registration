<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Capture form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];

    // Prepare the response in JSON format
    $response = array(
        'name' => $name,
        'email' => $email,
        'phone' => $phone,
        'address' => $address
    );

    // Return the response
    echo json_encode($response);
}
?>
