// script.ts
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggle-btn');
    var skillsSection = document.getElementById('skills-section');
    // Toggle visibility of the skills section
    toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', function () {
        if (skillsSection) {
            if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
                skillsSection.style.display = 'block';
                toggleButton.textContent = 'Hide Skills';
            }
            else {
                skillsSection.style.display = 'none';
                toggleButton.textContent = 'Show Skills';
            }
        }
    });
});
