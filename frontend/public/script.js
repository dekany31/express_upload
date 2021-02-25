function _load() {

    console.log("The Client is running.");

    let form = document.getElementById('uploadForm');

    form.addEventListener("submit", (e) => {
              e.preventDefault();
             console.log("We blocked the file upload process")
        });
}

window.addEventListener("load", _load);