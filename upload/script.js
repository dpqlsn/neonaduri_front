document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById('file-input');
    const uploadButton = document.getElementById('upload-button');
    const uploadSpace = document.getElementById('upload-space');
    const imagePreview = document.getElementById('image-preview');

    uploadSpace.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (event) => {
        handleFiles(event.target.files);
    });

    uploadSpace.addEventListener('dragover', (event) => {
        event.preventDefault();
        uploadSpace.classList.add('dragging');
    });

    uploadSpace.addEventListener('dragleave', () => {
        uploadSpace.classList.remove('dragging');
    });

    uploadSpace.addEventListener('drop', (event) => {
        event.preventDefault();
        uploadSpace.classList.remove('dragging');
        const files = event.dataTransfer.files;
        handleFiles(files);
    });

    function handleFiles(files) {
        const filesArray = Array.from(files);

        const selectedFiles = filesArray.map((file) => {
            return URL.createObjectURL(file);
        });

        selectedFiles.forEach((url, i) => {
            const imgElement = document.createElement('img');
            imgElement.src = url;
            imgElement.alt = `image${i}`;
            imagePreview.appendChild(imgElement);
        });

        if (filesArray.length > 0) {
            uploadButton.style.display = 'none';
        }
    }
});