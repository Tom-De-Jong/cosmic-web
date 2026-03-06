const fileInput = document.querySelector('#fileInput');

fileInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (event) {
        const text = event.target.result;
        window.editor.setValue(text);
    };

    reader.readAsText(file);
});