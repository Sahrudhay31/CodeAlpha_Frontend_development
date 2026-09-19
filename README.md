# CodeAlpha Frontend Development Internship

This repository contains the completed assignments developed during the CodeAlpha Frontend Development Internship program[cite: 1]. The projects focus on modern web development practices, semantic HTML5 markup, responsive CSS architectures, and client-side JavaScript logic[cite: 1].

---

## Project Structure

CodeAlpha_Frontend_development/ <br>
├── README.md <br>
├── Task-1_Image-Gallery/ <br>
│   ├── index.html <br>
│   ├── style.css <br>
│   └── script.js <br>
├── Task-2_Calculator/ <br>
│   ├── index.html <br>
│   ├── style.css <br>
│   └── script.js <br>
├── Task-3_Portfolio/ <br>
│   ├── index.html <br>
│   └── style.css <br>
└── Task-4_Music-Player/  <br>
    ├── index.html <br>
    ├── style.css <br>
    └── script.js <br>

---

## Tasks Overview & Technical Implementation

### Task 1: Image Gallery
An interactive image gallery featuring categorization, dynamic filtering, and a modal lightbox viewer[cite: 1].

* **Core Features:**
  * Category-based image filtering[cite: 1].
  * Modal lightbox view for full-scale image preview[cite: 1].
  * Forward and backward navigation controls[cite: 1].
  * CSS Grid layout responsive across mobile, tablet, and desktop screens[cite: 1].
* **Concepts Applied:**
  * DOM querying, manipulation, and event delegation using data-* attributes.
  * Array operations (map, filter, indexOf) to maintain active state across filtered datasets.
  * CSS transitions, CSS transforms, and flexible layout design using CSS Grid[cite: 1].

#### Output Preview
![Task 1 Preview](Task-1_Image-Gallery/Pasted%20image.png)

---

### Task 2: Interactive Calculator
A standard arithmetic calculator built with a display interface and evaluation engine[cite: 1].

* **Core Features:**
  * Arithmetic operations: addition, subtraction, multiplication, and division[cite: 1].
  * Instant screen update, clear (AC), and backspace (DEL) actions[cite: 1].
  * Keyboard input support for numeric entry and calculation triggering[cite: 1].
  * Operator collision sanitization to prevent invalid mathematical sequences.
* **Concepts Applied:**
  * State management using string concatenation and regular expression input sanitization.
  * Handling mouse events alongside global keyboard listener bindings (keydown)[cite: 1].
  * CSS Grid configuration for responsive button keypad layouts[cite: 1].

#### Output Preview
![Task 2 Preview](Task-2_Calculator/Pasted%20image1.png)

---

### Task 3: Personal Portfolio Site
A modern, responsive single-page personal portfolio highlighting developer profile details, technical skill sets, and completed projects[cite: 1].

* **Core Features:**
  * Sticky top navigation bar with smooth scroll behavior[cite: 1].
  * Clean presentation sections: About, Skills, Projects, and Contact[cite: 1].
  * Hover states on interactive cards and action buttons[cite: 1].
* **Concepts Applied:**
  * Semantic HTML5 elements (header, nav, section, footer)[cite: 1].
  * Modern CSS Flexbox and Grid patterns for structured alignment[cite: 1].
  * Responsive design strategies using CSS media queries and relative units[cite: 1].

#### Output Preview
![Task 3 Preview](Task-3_Portfolio/Pasted%20image2.png)

---

### Task 4: JavaScript Music Player
A custom audio player interface providing standard playback management and progress tracking[cite: 1].

* **Core Features:**
  * Audio playback controls: Play, Pause, Next, and Previous[cite: 1].
  * Dynamic progress bar with interactive seek functionality[cite: 1].
  * Real-time track duration and current playback time display[cite: 1].
  * Linear volume slider control and automatic consecutive track advancement[cite: 1].
* **Concepts Applied:**
  * HTML5 Audio API methods and event handling (timeupdate, ended, play, pause)[cite: 1].
  * Mathematical calculations converting client click coordinates to proportional audio timestamps.
  * Modular data structures using arrays of audio metadata objects.

#### Output Preview
![Task 4 Preview](Task-4_Music-Player/Pasted%20image3.png)

---

## Skills and Competencies Acquired

* **HTML5:** Semantic architecture, accessible element structures, and native media controls (audio)[cite: 1].
* **CSS3:** Advanced layout systems (Flexbox, CSS Grid), positioning contexts, responsive media queries, and smooth UI transitions[cite: 1].
* **JavaScript (ES6+):** Event listener propagation, HTML DOM manipulation, arithmetic parsing, input sanitization, and state tracking[cite: 1].
* **Version Control:** Git workflow implementation involving branch management, staging, multi-directory repository structuring, and synchronization with GitHub[cite: 1].

---

## How to Run Locally

1. Clone the repository:
   git clone https://github.com/Sahrudhay31/CodeAlpha_Frontend_development.git

2. Navigate to the project directory:
   cd CodeAlpha_Frontend_development

3. Open the index.html file of any task directly in a modern web browser:
   cd Task-1_Image-Gallery
   xdg-open index.html
