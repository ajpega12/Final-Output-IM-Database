document.addEventListener('DOMContentLoaded', function() {
    var students = [
        {
            name: 'A-jay Pega',
            age: 19,
            email: 'ajaypega65@.com',
            course: 'Information Technology',
            picture: 'aj.jpeg',
            gpa: 1.0
        },
        {
            name: 'Juliane Lisette Alcera',
            age: 20,
            email: 'jajejijuju@gmail.com',
            course: 'Information Technology',
            picture: 'jul.jpeg',
            gpa: 1.0
        },
        {
            name: 'Marie Alethea Intia',
            age: 21,
            email: 'aliemarieintia@gmail.com',
            course: 'Information Technology',
            picture: 'alie.jpeg',
            gpa: 1.0
        },
        {
            name: 'Katlyn Ann Joy Dino',
            age: 21,
            email: 'katlynannjoy@gmail.com',
            course: 'Information Technology',
            picture: 'kat.jpeg',
            gpa: 1.0
        },
        {
            name: 'Sherene Ronario',
            age: 20,
            email: 'sherenemhaeee@gmail.com',
            course: 'Information Technology',
            picture: 'sherene.jpeg',
            gpa: 1.0
        },
        {
            name: 'Shayne Dayson',
            age: 19,
            email: 'shayne.dayson@gmail.com',
            course: 'Information Technology',
            picture: 'shayne.jpeg',
            gpa: 1.0
        }
    ];

    var studentCards = document.getElementById('student-cards');
    
    function renderStudents() {
        studentCards.innerHTML = '';
        students.forEach(function(student, index) {
            var card = document.createElement('div');
            card.className = 'student-card'; // typo fixed here
            
            var img = document.createElement('img');
            img.src = student.picture;
            card.appendChild(img);
            
            var details = document.createElement('div');
            
            var name = document.createElement('h2');
            name.textContent = student.name;
            details.appendChild(name);
            
            var age = document.createElement('p');
            age.textContent = 'Age: ' + student.age; // fixed here
            details.appendChild(age);
            
            var email = document.createElement('p');
            email.textContent = 'Email: ' + student.email; // fixed here
            details.appendChild(email);
            
            var course = document.createElement('p');
            course.textContent = 'Course: ' + student.course; // fixed here
            details.appendChild(course);
            
            var gpa = document.createElement('p');
            gpa.textContent = 'GPA: ' + student.gpa; // fixed here
            details.appendChild(gpa);
            
            var editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', function() {
                editStudent(index);
            });
            details.appendChild(editButton);
            
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                if (confirm("Are you sure you want to delete this student's information?")) {
                    deleteStudent(index);
                }
            });
            details.appendChild(deleteButton);
            
            card.appendChild(details);
            studentCards.appendChild(card);
        });
    }
    
    function editStudent(index) {
        var student = students[index];
        var newName = prompt('Enter new name:', student.name);
        var newAge = prompt('Enter new age:', student.age);
        var newEmail = prompt('Enter new email:', student.email);
        var newCourse = prompt('Enter new course:', student.course);
        var newGpa = prompt('Enter new GPA:', student.gpa);
        
        if (newName && newAge && newEmail && newCourse && newGpa) {
            student.name = newName;
            student.age = parseInt(newAge);
            student.email = newEmail;
            student.course = newCourse;
            student.gpa = parseFloat(newGpa);
            renderStudents();
        }
    }
    
    function deleteStudent(index) {
        students.splice(index, 1);
        renderStudents();
    }
    
    renderStudents();
});



document.getElementById("add-student-btn").addEventListener("click", function() {
    window.location.href = "third1.html";
  });