// script.ts

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-btn');
    const skillsSection = document.getElementById('skills-section');

    // Toggle visibility of the skills section
    toggleButton?.addEventListener('click', () => {
        if (skillsSection) {
            if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
                skillsSection.style.display = 'block';
                toggleButton.textContent = 'Hide Skills';
            } else {
                skillsSection.style.display = 'none';
                toggleButton.textContent = 'Show Skills';
            }
        }
    });
});
