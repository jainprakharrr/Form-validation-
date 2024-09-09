document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const pincode = document.getElementById('pincode').value.trim();
    const address = document.getElementById('address').value.trim();

    const mobileRegex = /^[0-9]{10}$/;
    const pincodeRegex = /^[0-9]{6}$/;

    let isValid = true;
    let message = "";

    if (name === "") {
        isValid = false;
        message += "Name cannot be empty.<br>";
    }

    if (!mobileRegex.test(mobile)) {
        isValid = false;
        message += "Mobile number must be 10 digits.<br>";
    }

    if (!pincodeRegex.test(pincode)) {
        isValid = false;
        message += "Pincode must be 8 digits.<br>";
    }

    if (address === "") {
        isValid = false;
        message += "Address cannot be empty.<br>";
    }

    const alertPlaceholder = document.getElementById('alert-placeholder');
    alertPlaceholder.innerHTML = '';

    if (isValid) {
        alertPlaceholder.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Success!</strong> Form validated successfully.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
    } else {
        alertPlaceholder.innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Error!</strong> ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
    }
});
