# Sekhar Portfolio - MERN Stack

A professional portfolio website built with MERN Stack (MongoDB, Express, React, Node.js).

## 📁 Project Structure

```
sekhar-portfolio/
├── client/                 # React Frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Navbar.css
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── pages/          # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   ├── styles/
│   │   │   └── index.css   # Global styles
│   │   ├── App.jsx
│   │   └── index.js
│   └── package.json
│
├── server/                 # Node.js Backend
│   ├── models/
│   │   ├── Project.js
│   │   └── Contact.js
│   ├── routes/
│   │   ├── projects.js
│   │   └── contact.js
│   ├── index.js           # Express server
│   ├── .env
│   └── package.json
│
├── package.json           # Root package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)

### Installation

1. Install all dependencies:
```bash
npm run install-all
```

2. Configure MongoDB:
   - Edit `server/.env` with your MongoDB URI

3. Run the application:
```bash
# Run both client and server
npm run dev

# Or run separately:
npm run client   # React on http://localhost:3000
npm run server   # Node.js on http://localhost:5000
```

## 🛠 Tech Stack

**Frontend:**
- React.js (JSX)
- React Router DOM
- React Icons
- CSS3 (Custom styling)

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- CORS

## 📧 Contact

- **Email:** malipeddisekhar63@gmail.com
- **LinkedIn:** [Malipeddi Sekhar](https://www.linkedin.com/in/malipeddi-sekhar-08650630b/)
- **GitHub:** [malipeddisekhar](https://github.com/malipeddisekhar)
