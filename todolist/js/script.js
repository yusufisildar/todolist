function newElement() {
    let inputDOM = document.querySelector("#task").value;
    inputStr = inputDOM.replace(/\s+/g, '');
    if (inputStr === "") {
      showError()
      document.querySelector("#task").value = "";
    }
    else {
    //Atama
    let liDOM = document.createElement("li");
    liDOM.innerHTML = inputDOM;
    document.querySelector("#list").append(liDOM);
    document.querySelector("#task").value = "";
    //Çarpı oluşturma
    var span = document.createElement("span");
    var carpi = document.createTextNode("\u00D7"); 
    span.className = "close";
    span.appendChild(carpi);
    liDOM.appendChild(span);
    //Silme
    span.onclick = function() {
      let div = this.parentElement;
      div.remove();
    };
    //Checkleme
    liDOM.onclick = function() {
      this.classList.toggle("checked");
    }

    showSuccess()
    }
  }

function showError() {
  let errorDOM = document.querySelector("#liveToastError")
  errorDOM.classList.remove("hide");
  errorDOM.classList.add("show");
}

function showSuccess() {
  let successDOM = document.querySelector("#liveToastSuccess")
  successDOM.classList.remove("hide");
  successDOM.classList.add("show");
}