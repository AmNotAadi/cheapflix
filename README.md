# Cheapflix

A professional website for selling discounted subscriptions to popular streaming and entertainment services.

## 🎯 About

Cheapflix is a clean, modern website designed to offer discounted subscriptions to premium services like Spotify Premium, YouTube Premium, and other entertainment platforms. The site features a professional dark theme with smooth animations and a user-friendly interface.

## ✨ Features

- **Modern Dark Theme**: Professional dark navy design with gold accents
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Animated Hero Section**: Dynamic floating logos and engaging animations
- **Subscription Catalogue**: Clean presentation of available services
- **WhatsApp Integration**: Direct checkout via WhatsApp
- **Professional Styling**: Smooth hover effects and transitions
- **Multi-page Structure**: Home, About Us, and Terms pages

## 🛠️ Technologies Used

- HTML5
- CSS3 (with modern features like CSS Grid and Flexbox)
- Vanilla JavaScript
- Responsive design principles
- CSS animations and transitions

## 📁 Project Structure

```
Cheapflix/
├── index.html          # Main homepage
├── about.html          # About Us page
├── terms.html          # Terms and Conditions page
├── style.css           # Main stylesheet
├── script.js           # JavaScript functionality
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cheapflix.git
   cd cheapflix
   ```

2. **Open in your browser**
   - Simply open `index.html` in your web browser
   - Or use a local server for development

3. **For development with a local server**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

## 🎨 Design Features

- **Color Palette**: Dark navy (#181B23), dark cards (#23273A), light text (#F3F4F6), gold accents (#FDCB58)
- **Typography**: Modern, clean fonts with proper hierarchy
- **Animations**: Smooth hover effects and floating logo animations
- **Layout**: CSS Grid and Flexbox for responsive layouts

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Customization

### Adding New Services
To add new subscription services, edit the catalogue section in `index.html` and add corresponding styles in `style.css`.

### Changing Colors
The main color variables are defined in the CSS root section. Modify these to change the overall theme.

### Modifying Animations
Animation properties can be adjusted in the CSS file under the respective animation classes.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support, please reach out through the contact information provided on the website.

---

**Note**: This is a frontend-only project. For production use, you'll need to integrate with a backend service for payment processing and order management. 