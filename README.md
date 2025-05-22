# 🚗 GearShift - Rent-a-Car Web Application

**GearShift** is a user-friendly and fully functional web application designed for an online car rental service. Users can browse available vehicles, view detailed information, submit rental inquiries, and register or log in when needed.

---

## ⚙️ Technologies Used

- **React.js** – Main frontend library  
- **React Router DOM** – For routing between pages  
- **CSS Modules / SCSS** – For styling and component-based design  
- **Formik + Yup** – For form handling and validation (if used)  
- **LocalStorage / Context API** – For managing user sessions (if used)

---

## 🎨 Color Palette

The app uses a clean and modern color scheme:

- `#ff7326` – Primary accent color  
- `whitesmoke` – General background  
- `#1a1a1a` – For text and dark areas  
- `white` – For component backgrounds

---

## 🗂️ Pages and Structure

The application includes the following core pages and components:

- **Home** – Landing page with category previews and featured cars  
- **About** – Information about the company, founder, and history  
- **Our Fleet** – View all available vehicles for rent  
- **Car Details** – Detailed car information and "Submit Enquiry" form  
- **Login / Signup** – User authentication pages  
- **Contact Us** – Form for feedback and questions  

> 🔐 **Note:** The "Submit Enquiry" form is only available to logged-in users. If the user is not authenticated, the form is disabled.

---

## 📌 Features

- Single Page Application (SPA)  
- Smooth navigation with React Router  
- User-friendly and responsive UI  
- Component-based architecture  
- Form validation and conditional rendering  
- Fully responsive design for all screen sizes

---

## 🚀 Getting Started

To run this project locally, follow these steps:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/gearshift-rentacar.git

# 2. Navigate to the project directory
cd gearshift-rentacar

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
