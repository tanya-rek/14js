function showMessage() {
    let userName = document.getElementById('name').value;
    document.getElementById('show-name').innerHTML = `Hello, ${userName}!`;
}