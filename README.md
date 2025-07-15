# 🎯 Target Acquisition Reflex Tester

[![Project Status: Complete](https://img.shields.io/badge/status-complete-success.svg)](https://github.com/shvbhi/reflex-tester)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

This project is Day 15 of my **#30DaysOfVibeCoding** challenge.

---

### ✨ **Live Demo**

Test your reflexes with the live, deployed version of the application on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://demo.vercel.app)



---

![Target Acquisition Tester Screenshot](./public/Screenshot%202025-07-16%20025230.png)
![Target Acquisition Tester Screenshot](./public/Screenshot%202025-07-16%20025249.png)
![Target Acquisition Tester Screenshot](./public/Screenshot%202025-07-16%20025310.png)
![Target Acquisition Tester Screenshot](./public/Screenshot%202025-07-16%20025350.png)


## 📝 Project Description

This is an interactive web-based tool designed to measure a user's **Target Acquisition Time**. It's a fun and challenging game that tests a combination of pure cognitive reflex (perceiving a stimulus) and motor skill (moving the mouse to the target). The application presents a minimalist UI where a target appears at a random location after a random delay. The user's goal is to click the target as quickly as possible.


## 🌟 Key Features

-   **Dynamic Target Generation:** The target appears at a random X/Y coordinate on the screen after a randomized delay to keep the user engaged and provide a true test of reaction.
-   **Millisecond-Precision Timing:** Uses the JavaScript `Date.now()` method to accurately measure the time from target appearance to a successful click.
-   **Full Game State Machine:** The app cycles through clean states (`start`, `waiting`, `ready`, `result`) using React Hooks to manage the entire game flow.
-   **Score Tracking:** Saves the last five scores and displays a running average, allowing users to track their performance over time.
-   **Component-Based Architecture:** Features a professional, reusable `<Footer>` component for easy maintenance and a clean codebase.

## 💻 Tech Stack

-   **Frontend:** React.js, Vite
-   **Icons:** `react-icons` for the footer.
-   **Core Logic:** Pure JavaScript (`useState`, `useRef`, `setTimeout`, `Date.now()`)
-   **Styling:** Pure CSS3 for the minimalist UI, animations, and layout.
-   **Deployment:** Vercel

## 🛠️ Getting Started Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
- `npm`
  ```sh
  npm install npm@latest -g
  ```

### Cloning the Repository

1.  Fork the project (click the "Fork" button in the top right of the GitHub page).
2.  Clone your forked repository:
    ```sh
    git clone https://github.com/shvbhii/reflex-tester.git
    ```
    

### Installation & Running

1.  Navigate to the project directory:
    ```sh
    cd reflex-tester
    ```
2.  Install the NPM packages:
    ```sh
    npm install
    ```
3.  Run the development server:
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173/` (or another port if 5173 is busy).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/shvbhii/reflex-tester/issues).

1.  **Fork** the Project.
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the Branch (`git push origin feature/AmazingFeature`).
5.  Open a **Pull Request**.

## 👤 Creator & Contact

**Shubhi Sharma**

-   **LinkedIn:** [www.linkedin.com/in/shvbhi](https://www.linkedin.com/in/shvbhi)
-   **GitHub:** [@shvbhi](https://github.com/shvbhii)

## 📜 License

Distributed under the MIT License.