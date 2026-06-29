function closeWelcomeModal() {
  const modal = document.getElementById('welcome-modal');
  if (modal) {
    modal.style.display = 'none';
  }
}

function showSection(sectionId) {
  // 1. Find the home section safely
  const homeSection = document.getElementById('home');
  if (homeSection) {
    homeSection.style.display = 'none';
  }

  // 2. Find all elements with the 'tab' class name safely
  const sections = document.querySelectorAll('.tab');
  
  // 3. Loop through and hide them all
  sections.forEach(section => {
    if (section) {
      section.style.display = 'none';
    }
  });
  
  // 4. Safely reveal the specific tab that was clicked
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = 'block';
  } else {
    console.error("Could not find a section with the ID: " + sectionId);
  }
}

function toggleGraphics() {
  const menu = document.getElementById("graphics-menu");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
