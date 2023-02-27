function store() {
    let inputFname = document.getElementById("fname");
    sessionStorage.setItem("fname", inputFname.value);

    let inputLname = document.getElementById("lname");
    sessionStorage.setItem("lname", inputFname.value);
}