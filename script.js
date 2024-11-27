function scrollToSection(sectionId) {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  document.querySelector('.logo').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the home section
  });
  