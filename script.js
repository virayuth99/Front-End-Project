    
    
    
    
    
    // slider -------------------------------------

    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const dotsContainer = document.getElementById('dots');

    let currentIndex = 0;

    slide.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot'); 
      if (index === 0) dot.classList.add('active');
      dot.dataset.index = index;
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // Update slide and dot position
    function updateSlider() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentIndex].classList.add('active');
    }

    // Event listener for Previous button
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? slide.length - 1 : currentIndex - 1;
      updateSlider();
    });

    // Event listener for Next button
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex === slide.length - 1) ? 0 : currentIndex + 1;
      updateSlider();
    });

    // Event listener for dots
    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.dataset.index);
        updateSlider();
      });
    });

    setInterval(() => {
      currentIndex = (currentIndex === slide.length - 1) ? 0 : currentIndex + 1;
      updateSlider();
    }, 8000);


    