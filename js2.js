var selectedRow = null;
var imageLoaded = false; // Flag to track image loading

// Form Submit Function
function onFormSubmit() {
    // check validity
    if (validate()) {
        // store user data
        var formData = readFormData();
        // check empty row
        if (selectedRow == null) {
            // Insert New User Record
            if (imageLoaded) {
                insertNewRecord(formData);
            } else {
                // Wait for image loading (if there's one)
            }
        } else {
            // Update New User Record
            updateRecord(formData);
        }
        // Reset Input Values
        resetForm();
    }
}

// Get Values From Form
function readFormData() {
    var formData = {};
    // Get Values From Input
    formData["userName"] = document.getElementById("userName").value;
    formData["rollNo"] = document.getElementById("rollNo").value;
    formData["stdClass"] = document.getElementById("stdClass").value;
    formData["tsub"] = document.getElementById("tsub").value;
    formData["age"] = document.getElementById("age").value;

    // Get Picture File
    var pictureInput = document.getElementById("picture");
    if (pictureInput.files && pictureInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            formData["picture"] = e.target.result;
            imageLoaded = true;  // Image data is ready
            // Insert record if it's waiting
            if (selectedRow == null) {
                insertNewRecord(formData);
            }
        };
        reader.readAsDataURL(pictureInput.files[0]);
    } else {
        formData["picture"] = "";
        imageLoaded = true;  // No image, so it's ready
        if (selectedRow == null) {
            insertNewRecord(formData);
        }
    }

    // Return Form Data
    return formData;
}


// Insert New User Record
function insertNewRecord(data) {
    var table = document.getElementById("stdlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.userName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.rollNo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.stdClass;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.tsub;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.age;
    cell6 = newRow.insertCell(5);

    // Handle picture display
    if (data.picture) {
        cell6.innerHTML = `<img src="${data.picture}" alt="Student Picture">`;
    } else {
        cell6.innerHTML = "No Image";
    }

    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;

    // Reset the imageLoaded flag after the row is inserted
    imageLoaded = false; 
}

// Reset Function
function resetForm() {
    document.getElementById("userName").value = "";
    document.getElementById("rollNo").value = "";
    document.getElementById("stdClass").value = "";
    document.getElementById("tsub").value = "";
    document.getElementById("age").value = "";
    document.getElementById("picture").value = "";
    selectedRow = null;
}

// Edit Function
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("userName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("rollNo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("stdClass").value = selectedRow.cells[2].innerHTML;
    document.getElementById("tsub").value = selectedRow.cells[3].innerHTML;
    document.getElementById("age").value = selectedRow.cells[4].innerHTML;
}

// Update Record
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.userName;
    selectedRow.cells[1].innerHTML = formData.rollNo;
    selectedRow.cells[2].innerHTML = formData.stdClass;
    selectedRow.cells[3].innerHTML = formData.tsub;
    selectedRow.cells[4].innerHTML = formData.age;
    if (formData.picture) {
        selectedRow.cells[5].innerHTML = `<img src="${formData.picture}" alt="Student Picture">`;
    }
}

// Delete Function
function onDelete(td) {
    if (confirm('Are you sure to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("stdlist").deleteRow(row.rowIndex);
        resetForm();
    }
}

// Check User validation
function validate() {
    isValid = true;
    // userName validation
    if (document.getElementById("userName").value == "") {
        isValid = false;
        document.getElementById("userNamevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("userNamevalidationError").classList.contains("hide")) {
            document.getElementById("userNamevalidationError").classList.add("hide");
        }
    }
    // Roll No validation
    if (document.getElementById("rollNo").value == "") {
        isValid = false;
        document.getElementById("rollNovalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("rollNovalidationError").classList.contains("hide")) {
            document.getElementById("rollNovalidationError").classList.add("hide");
        }
    }
    // Std class validation
    if (document.getElementById("stdClass").value == "") {
        isValid = false;
        document.getElementById("stdClassvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("stdClassvalidationError").classList.contains("hide")) {
            document.getElementById("stdClassvalidationError").classList.add("hide");
        }
    }
    // Tsub validation
    if (document.getElementById("tsub").value == "") {
        isValid = false;
        document.getElementById("tsubvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("tsubvalidationError").classList.contains("hide")) {
            document.getElementById("tsubvalidationError").classList.add("hide");
        }
    }
    // Age validation
    if (document.getElementById("age").value == "") {
        isValid = false;
        document.getElementById("agevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("agevalidationError").classList.contains("hide")) {
            document.getElementById("agevalidationError").classList.add("hide");
        }
    }
    return isValid;
}
