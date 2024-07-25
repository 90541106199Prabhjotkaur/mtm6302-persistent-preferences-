document.addEventListener('DOMContentLoaded', function () {
    const colorPicker = document.getElementById('color-picker');
    const listStyleSelect = document.getElementById('list-style');
    const imageDropdown = document.getElementById('image-dropdown');
    const saveButton = document.getElementById('save');

    function applyPreferences() {
        const bgImage = localStorage.getItem('bgImage');
        const themeColor = localStorage.getItem('themeColor');
        const listStyle = localStorage.getItem('listStyle');

        if (bgImage) {
            document.body.style.backgroundImage = `url(${bgImage})`;
            imageDropdown.value = bgImage;
        }

        if (themeColor) {
            document.body.style.color = themeColor;
            colorPicker.value = themeColor;
        }

        if (listStyle) {
            listStyleSelect.value = listStyle;
        }
    }

    function savePreferences() {
        const bgImage = imageDropdown.value;
        const themeColor = colorPicker.value;
        const listStyle = listStyleSelect.value;

        if (bgImage) {
            localStorage.setItem('bgImage', bgImage);
        }
        if (themeColor) {
            localStorage.setItem('themeColor', themeColor);
        }
        if (listStyle) {
            localStorage.setItem('listStyle', listStyle);
        }
        
        applyPreferences();
    }

    saveButton.addEventListener('click', savePreferences);

    applyPreferences(); // Apply preferences on page load
});
