# Golam Kibria - Portfolio Website

A modern, premium single-page portfolio website built with React, featuring a bold purple design theme, smooth animations, and responsive layout.

## 🚀 Features

- **Modern Design**: Purple-based color psychology with radial gradients
- **Smooth Animations**: Expressive transitions using CSS transforms (~200ms)
- **Fully Responsive**: Optimized for all devices (340px to 1320px+)
- **Performance Focused**: Lazy loading with React Suspense
- **Blog Management System**: Easy-to-use blog system with Bengali language support
- **Interactive Components**: 
  - Sticky navbar with active section highlighting
  - Mobile hamburger menu with slide-in animation
  - Swiper carousel for blog posts
  - Contact form with EmailJS integration
  - Scroll to top button

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## 🛠️ Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Firebase** (Optional - for backend features)
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Copy your Firebase configuration
   - Update `src/config/firebase.js` with your credentials
   - Update `.firebaserc` with your project ID

## 🎨 Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🚀 Deployment

### Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase (if not already done):
   ```bash
   firebase init hosting
   ```

4. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

**Live Site**: https://golamkibria-official.web.app

## 📝 Blog Management

This portfolio includes a comprehensive blog management system that supports both Bengali and English content.

### Quick Start - Adding a New Blog

See `QUICK_START.md` for a quick guide on adding new blog posts.

### Detailed Documentation

- **Blog Management Guide**: `BLOG_MANAGEMENT_GUIDE.md` - Complete guide for managing blogs
- **Blog Template**: `blog-template.md` - Template for creating new blog posts

### Blog Features

- ✅ Bengali and English language support
- ✅ Categories and tags
- ✅ Easy data management through `src/data/blogData.js`
- ✅ No coding knowledge required
- ✅ Responsive blog cards with images

## 📁 Project Structure

```
gk-portfolio/
├── public/
│   └── images/          # Profile and blog images
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Profile.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogCard.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── config/          # Configuration files
│   │   └── firebase.js
│   ├── data/            # Static data
│   │   └── blogData.js  # Blog posts data
│   ├── utils/           # Utility functions
│   │   └── smoothScroll.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── BLOG_MANAGEMENT_GUIDE.md  # Blog management documentation
├── blog-template.md          # Blog post template
├── QUICK_START.md            # Quick start guide
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information

1. **Profile Images**: Replace images in `public/images/`
   - `profile-hero.jpg` - Hero section image
   - `profile-about.jpg` - About section image

2. **Personal Details**: Update in respective components
   - Name and bio: `src/components/Hero.jsx`
   - About text: `src/components/Profile.jsx`
   - Contact info: `src/components/Contact.jsx`

3. **Social Links**: Update URLs in:
   - `src/components/Profile.jsx`
   - `src/components/Contact.jsx`
   - `src/components/Footer.jsx`

4. **Blog Posts**: Modify `src/data/blogData.js` (See `BLOG_MANAGEMENT_GUIDE.md`)

### Color Scheme

The purple color palette is defined in `tailwind.config.js`. You can customize:
- Primary colors (purple shades)
- Secondary colors (pink/magenta shades)
- Gradient definitions in `src/index.css`

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + DaisyUI
- **Carousel**: Swiper.js
- **Icons**: React Icons
- **Email Service**: EmailJS
- **Backend**: Firebase (Firestore + Hosting)
- **Font**: Work Sans (Google Fonts)

## 📱 Responsive Breakpoints

- Mobile: 340px - 767px (1 blog slide)
- Tablet: 768px - 1023px (2 blog slides)
- Desktop: 1024px - 1279px (3 blog slides)
- Large Desktop: 1280px+ (4 blog slides)

## ⚡ Performance Features

- Lazy loading with React Suspense
- Optimized images
- CSS-only animations (no JavaScript)
- Smooth scrolling with easing
- Minimal bundle size

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Golam Kibria**
- Portfolio: https://golamkibria-official.web.app
- Email: mohammadabulhayatt@gmail.com
- GitHub: [@abulhayat-assdi](https://github.com/abulhayat-assdi)

## 🙏 Acknowledgments

- Design inspiration from modern UI/UX trends
- Icons from React Icons
- Fonts from Google Fonts
- Carousel by Swiper.js
- Email service by EmailJS

---

Made with ❤️ by Golam Kibria
