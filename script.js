// Gallery Filter Functionality
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');

            // Get the filter category
            const filter = button.getAttribute('data-filter');

            // Show/hide gallery items
            galleryItems.forEach(item => {
                if (filter === 'all') {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    const category = item.getAttribute('data-category');
                    if (category === filter) {
                        item.classList.remove('hidden');
                        item.style.animation = 'fadeIn 0.5s ease-in';
                    } else {
                        item.classList.add('hidden');
                    }
                }
            });
        });
    });

    // Optional: Add lightbox functionality
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const title = item.querySelector('.overlay h3')?.textContent || 'Gallery Image';
            openLightbox(img.src, title);
        });
    });
});

// Lightbox Function
function openLightbox(imageSrc, title) {
    // Create lightbox elements if they don't exist
    let lightbox = document.getElementById('lightbox');
    
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img id="lightbox-image" src="" alt="">
                <p id="lightbox-title"></p>
            </div>
        `;
        document.body.appendChild(lightbox);

        // Close lightbox on X click
        lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        
        // Close lightbox on outside click
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeLightbox();
        });
    }

    document.getElementById('lightbox-image').src = imageSrc;
    document.getElementById('lightbox-title').textContent = title;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
    }
}