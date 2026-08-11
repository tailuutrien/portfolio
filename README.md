# Personal Portfolio

A responsive personal portfolio website built with React to showcase my profile, technical skills, resume, projects, and contact information.

## Tech Stack

- **React 19** — component-based frontend development
- **Vite** — development server and build tool
- **JavaScript**
- **Tailwind CSS 4** — utility-first styling
- **shadcn/ui / Base UI** — reusable UI components
- **React Router** — client-side routing
- **Motion** — page transition animations
- **Lucide React & React Icons** — icons
- **ESLint** — code linting

## Features

* **Multi-page navigation** using React Router

  * Home
  * Resume
  * Skills
  * Projects
  * Contact
  * Custom 404 Not Found page

* **Responsive design**

  * Optimized for mobile, tablet, and desktop
  * Responsive navigation and page layouts

* **Responsive navigation**

  * Active navigation state based on the current route
  * Hamburger menu for mobile devices
  * Mobile navigation menu with open/close interaction
  * Automatic menu closing after selecting a navigation item

* **Page transition animations**

  * Smooth entrance and exit animations between routes
  * Animated navigation through Navbar and CTA links

* **Scroll behavior**

  * Automatic scroll-to-top when navigating to another route
  * Back-to-Top button for quickly returning to the top of long pages

* **Resume / Profile section**

  * Personal information
  * Career objective
  * Education
  * Activities and experience
  * CV viewing/download access

* **Skills section**

  * Technical skills grouped by category
  * Skill proficiency indicators
  * Soft skills
  * Language proficiency

* **Data-driven Projects section**

  * Project screenshots
  * Project descriptions
  * Technology badges
  * GitHub repository links
  * Live demo links when available
  * Disabled state for unavailable demos
  * Search projects by project name
  * Filter projects by multiple technology tags

* **Contact form**

  * Name, email, subject, and message fields
  * Required-field validation
  * Email format validation
  * Minimum 20-character message validation
  * Message character counter
  * Field-level validation messages
  * Loading state during submission
  * Disabled submit button while submitting
  * Success message after mock submission

* **Accessibility**

  * Semantic HTML structure
  * Alternative text for images
  * Properly associated form labels
  * Keyboard-accessible navigation controls
  * Visible focus and interaction states


## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### Installation

Clone the repository:

```bash
git clone https://github.com/tailuutrien/portfolio.git
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will display the local development URL in your terminal, usually:

```text
http://localhost:5173
```

### Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Demo

Live Demo: https://tailuutrien.github.io/portfolio/

## Screenshot

### Home Page

![Home Page](./public/screenShot/home.png)

### Projects Page
![Projects Page](./public/screenShot/projects.png)

### Mobile view with hamburger menu
<p align="center">
  <img src="./public/screenShot/mobile.PNG" alt="Mobile view with hamburger menu" width="300" />
</p>

## Author

**Trien Tai Luu**

- GitHub: https://github.com/tailuutrien
- Email: tai.luutrien@gmail.com
