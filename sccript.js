```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: #080808;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
}


/* =========================
   NAVBAR
========================= */

header {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;

    padding: 30px 7%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    z-index: 20;
}

.logo {
    font-size: 25px;
    font-weight: 900;
    letter-spacing: 3px;
}

.logo span,
h1 span,
h2 span {
    color: #ff4d00;
}

nav {
    display: flex;
    gap: 30px;
}

nav a {
    color: white;
    text-decoration: none;

    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;

    transition: 0.3s;
}

nav a:hover {
    color: #ff4d00;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 100vh;

    padding: 180px 7% 80px;

    display: flex;
    align-items: center;

    position: relative;

    background:
        linear-gradient(
            90deg,
            rgba(0,0,0,0.95),
            rgba(0,0,0,0.45)
        ),
        url("https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=2000&q=85");

    background-size: cover;
    background-position: center;
}

.hero-content {
    max-width: 900px;
}

.small-title,
.section-heading > p,
.section-label {
    color: #ff4d00;

    font-size: 12px;

    letter-spacing: 4px;

    font-weight: bold;

    margin-bottom: 25px;
}

.hero h1 {
    font-size: clamp(55px, 8vw, 110px);

    line-height: 0.9;

    font-weight: 900;
}

.hero-text {
    color: #aaa;

    max-width: 600px;

    line-height: 1.7;

    margin: 35px 0;

    font-size: 17px;
}

.hero-buttons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.btn {
    padding: 16px 25px;

    text-decoration: none;

    font-size: 12px;

    font-weight: bold;

    letter-spacing: 1px;

    transition: 0.3s;
}

.primary {
    background: #ff4d00;
    color: white;
}

.primary:hover {
    background: white;
    color: black;
}

.secondary {
    border: 1px solid #555;
    color: white;
}

.secondary:hover {
    border-color: #ff4d00;
}

.scroll {
    position: absolute;

    bottom: 30px;
    right: 7%;

    color: #777;

    font-size: 10px;

    letter-spacing: 3px;
}


/* =========================
   GENERAL SECTIONS
========================= */

.work,
.about,
.skills,
.software,
.contact {
    padding: 120px 7%;
}

.section-heading {
    margin-bottom: 60px;
}

.section-heading h2 {
    font-size: 55px;
}

.description {
    color: #777;

    max-width: 600px;

    line-height: 1.7;

    margin-top: 15px;
}


/* =========================
   PORTFOLIO
========================= */

.portfolio-grid {
    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 60px 25px;
}

.project-image {
    height: 430px;

    position: relative;

    background-size: cover;
    background-position: center;

    overflow: hidden;

    transition: 0.5s;
}

.project-image::after {
    content: "";

    position: absolute;

    inset: 0;

    background: rgba(0,0,0,0.2);

    transition: 0.4s;
}

.project:hover .project-image::after {
    background: rgba(0,0,0,0.6);
}

.project:hover .project-image {
    transform: scale(1.01);
}


/* Project images */

.project-one {
    background-image:
        url("https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1400&q=85");
}

.project-two {
    background-image:
        url("https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=85");
}

.project-three {
    background-image:
        url("https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=85");
}

.project-four {
    background-image:
        url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85");
}


/* Number */

.number {
    position: absolute;

    top: 20px;
    left: 20px;

    z-index: 3;

    background: black;

    padding: 8px 12px;

    font-size: 12px;
}


/* Play button */

.play {
    position: absolute;

    z-index: 5;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    width: 80px;
    height: 80px;

    border-radius: 50%;

    border: 1px solid white;

    background: rgba(0,0,0,0.3);

    color: white;

    font-size: 22px;

    cursor: pointer;

    opacity: 0;

    transition: 0.4s;
}

.project:hover .play {
    opacity: 1;
}


/* Project info */

.project-info {
    padding-top: 20px;

    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 20px;
}

.project-info h3 {
    font-size: 24px;
}

.project-info p {
    color: #777;

    margin-top: 8px;

    font-size: 14px;
}

.view-project {
    background: none;

    border: none;

    color: #ff4d00;

    font-size: 11px;

    font-weight: bold;

    letter-spacing: 1px;

    cursor: pointer;

    white-space: nowrap;
}

.view-project:hover {
    color: white;
}


/* =========================
   MODAL
========================= */

.modal {
    position: fixed;

    inset: 0;

    background: rgba(0,0,0,0.94);

    display: none;

    justify-content: center;
    align-items: center;

    z-index: 100;
}

.modal.active {
    display: flex;
}

.modal-box {
    width: 90%;

    max-width: 900px;

    background: #111;

    padding: 30px;

    position: relative;
}

.close {
    position: absolute;

    top: 10px;
    right: 20px;

    background: none;

    border: none;

    color: white;

    font-size: 35px;

    cursor: pointer;

    z-index: 10;
}

.video-preview {
    height: 430px;

    background:
        linear-gradient(
            rgba(0,0,0,0.25),
            rgba(0,0,0,0.7)
        ),
        url("https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=85");

    background-size: cover;

    background-position: center;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    margin-bottom: 25px;
}

.big-play {
    width: 75px;
    height: 75px;

    border: 2px solid white;

    border-radius: 50%;

    display: flex;

    justify-content: center;
    align-items: center;

    margin-bottom: 20px;
}

.video-preview h3 {
    font-size: 25px;
}

.video-preview p {
    color: #aaa;

    margin-top: 8px;
}

.modal-box h2 {
    font-size: 30px;

    margin-bottom: 15px;
}

.modal-description {
    color: #888;

    line-height: 1.7;
}

.watch-button {
    display: inline-block;

    margin-top: 25px;

    padding: 15px 25px;

    background: #ff4d00;

    color: white;

    text-decoration: none;

    font-size: 12px;

    font-weight: bold;
}


/* =========================
   ABOUT
========================= */

.about {
    background: #111;
}

.about-content {
    max-width: 850px;
}

.about h2 {
    font-size: 60px;

    line-height: 1;

    margin-bottom: 35px;
}

.about h2 span {
    display: block;
}

.about-content > p:not(.section-label) {
    color: #999;

    line-height: 1.8;

    margin-bottom: 20px;
}


/* =========================
   SKILLS
========================= */

.skills-grid {
    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 20px;
}

.skill {
    border-top: 1px solid #333;

    padding-top: 25px;
}

.skill > span {
    color: #ff4d00;

    font-size: 13px;
}

.skill h3 {
    margin: 20px 0;

    font-size: 22px;
}

.skill p {
    color: #777;

    line-height: 1.7;
}


/* =========================
   SOFTWARE
========================= */

.software {
    background: #ff4d00;

    color: black;
}

.software > p {
    font-size: 12px;

    letter-spacing: 3px;

    font-weight: bold;

    margin-bottom: 30px;
}

.software-list {
    display: flex;

    flex-wrap: wrap;

    gap: 30px;
}

.software-list span {
    font-size: 25px;

    font-weight: bold;

    border-bottom: 2px solid black;

    padding-bottom: 8px;
}


/* =========================
   CONTACT
========================= */

.contact {
    text-align: center;
}

.contact h2 {
    font-size: clamp(50px, 8vw, 100px);

    line-height: 0.95;

    margin-bottom: 30px;
}

.contact h2 span {
    display: block;
}

.contact > p:not(.section-label) {
    color: #888;

    max-width: 550px;

    margin: auto;

    line-height: 1.7;
}

.contact-button {
    display: inline-block;

    margin-top: 35px;

    padding: 18px 30px;

    background: #ff4d00;

    color: white;

    text-decoration: none;

    font-weight: bold;
}


/* =========================
   FOOTER
========================= */

footer {
    padding: 40px 7%;

    border-top: 1px solid #222;

    display: flex;

    justify-content: space-between;

    color: #666;
}

footer strong {
    color: white;

    font-size: 20px;
}

footer strong span {
    color: #ff4d00;
}

footer p {
    margin-top: 5px;
}


/* =========================
   MOBILE
========================= */

@media (max-width: 800px) {

    header {
        padding: 25px;
    }

    nav {
        display: none;
    }

    .hero {
        padding: 150px 25px 80px;
    }

    .work,
    .about,
    .skills,
    .software,
    .contact {
        padding: 80px 25px;
    }

    .portfolio-grid {
        grid-template-columns: 1fr;
    }

    .skills-grid {
        grid-template-columns: 1fr 1fr;
    }

    .section-heading h2,
    .about h2 {
        font-size: 40px;
    }

    .project-image {
        height: 350px;
    }

    .play {
        opacity: 1;
    }

    footer {
        flex-direction: column;

        gap: 20px;
    }
}


@media (max-width: 500px) {

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .hero h1 {
        font-size: 55px;
    }

    .project-info {
        flex-direction: column;

        align-items: flex-start;
    }

    .video-preview {
        height: 250px;
    }

    .modal-box {
        padding: 20px;
    }

}
```
