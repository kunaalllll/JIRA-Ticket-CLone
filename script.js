let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let addFlag = false;


addBtn.addEventListener("click", (e) => {
    // Display Modal
    // Generate Ticket

    // AddFlag, true -> Modal Display
    // AddFlag, true -> Modal None(hide)
    addFlag = !addFlag;
    if(addFlag) {
        modalCont.style.display = "flex";
    }
    else {
        modalCont.style.display = "none";
    }
})