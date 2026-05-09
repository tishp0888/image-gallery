# Image Gallery

A beautiful, responsive one-page image gallery website with filtering capabilities and lightbox functionality.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Category Filtering**: Filter images by categories (All, Nature, Urban, Abstract)
- **Lightbox Modal**: Click on images to view them in a larger modal
- **Smooth Animations**: Hover effects and smooth transitions throughout
- **Modern UI**: Clean and modern design with gradient backgrounds
- **No Dependencies**: Pure HTML, CSS, and JavaScript - no external libraries needed

## File Structure

```
image-gallery/
├── index.html      # HTML structure
├── styles.css      # CSS styling and responsive design
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## Getting Started

1. Clone or download the repository
2. Open `index.html` in your web browser
3. No build process or server required!

## How to Use

### Filter Images
- Click on the filter buttons at the top (All, Nature, Urban, Abstract) to filter images by category
- The gallery automatically updates to show only images from the selected category

### View in Lightbox
- Click on any image to open it in a lightbox modal
- Click the X button or click outside the image to close
- Press the Escape key to close the lightbox

### Customize

#### Add Your Own Images
Edit `index.html` and modify the gallery items:
```html
<div class="gallery-item" data-category="nature">
    <img src="YOUR_IMAGE_URL" alt="Image description">
    <div class="overlay">
        <h3>Image Title</h3>
    </div>
</div>
```

#### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-color: #333;
    --light-bg: #f7f7f7;
    --white: #ffffff;
    --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
```

#### Add New Categories
1. Add a new button in `index.html`:
```html
<button class="filter-btn" data-filter="your-category">Your Category</button>
```

2. Add the category to gallery items:
```html
<div class="gallery-item" data-category="your-category">
    <!-- image content -->
</div>
```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Credits

Images are sourced from Unsplash (free stock photos).