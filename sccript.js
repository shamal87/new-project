```javascript
// =========================
// PROJECT MODAL
// =========================

function openProject(projectName) {

    const modal = document.getElementById("projectModal");

    const projectTitle = document.getElementById("projectName");

    const modalTitle = document.getElementById("modalTitle");

    projectTitle.textContent = projectName;

    modalTitle.textContent = projectName;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


// =========================
// CLOSE PROJECT
// =========================

function closeProject() {

    const modal = document.getElementById("projectModal");

    modal.classList.remove("active");

    document.body.style.overflow = "auto";
}


// =========================
// CLOSE WHEN CLICKING OUTSIDE
// =========================

document.getElementById("projectModal").addEventListener(
    "click",
    function(event) {

        if (event.target === this) {

            closeProject();

        }

    }
);


// =========================
// ESC KEY
// =========================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeProject();

        }

    }
);


// =========================
// SAMPLE VIDEO BUTTON
// =========================

function watchVideo(event) {

    event.preventDefault();

    alert(
        "Replace this button with your YouTube, Vimeo or video portfolio link."
    );

}
```
