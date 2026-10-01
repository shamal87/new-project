function selectCourse(courseName) {
    document.getElementById("course").value = courseName;

    document.getElementById("enroll").scrollIntoView({
        behavior: "smooth"
    });
}

function enrollUser(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;

    document.getElementById("message").innerText =
        "Thank you, " + name + "! You have successfully enrolled in " + course + ".";

    document.querySelector("form").reset();
}
