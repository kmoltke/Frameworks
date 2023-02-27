document.body.onload = addUserName();

function addUserName() {
    const username = sessionStorage.fname;
    if (username !== undefined) {
        document.getElementById("welcome").innerHTML =
            username + ", test your knowledge skills on birds!";
    }
}