const d = document,
  $main = d.querySelector("main"),
  $files = d.getElementById("files");

const uploader = (file) => {
  const xhr = new XMLHttpRequest(),
    formData = new FormData();
  formData.append("file", file);

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      //let json = JSON.parse(xhr.responseText);
      console.log(xhr.responseText);
    } else {
      let message = xhr.statusText || "Ocurrió un error";

      alert(`Error ${xhr.status}: ${message}`);
    }
  });
  xhr.open("POST", "./uploader.php");
  xhr.setRequestHeader("enc-type", "multipart/form-data");
  xhr.send(formData);
};

d.addEventListener("change", (e) => {
  if (e.target === $files) {
    const files = Array.from(e.target.files);

    files.forEach((el) => uploader(el));
  }
});
