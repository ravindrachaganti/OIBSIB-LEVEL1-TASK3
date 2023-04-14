document.getElementById('convert-button').addEventListener('click', function() {
    let celsiusInput = document.getElementById('celsius-input').value;
    let fahrenheitInput = document.getElementById('fahrenheit-input').value;

    if (celsiusInput !== '') {
        let fahrenheit = (celsiusInput * 9/5) + 32;
        document.getElementById('fahrenheit-input').value = fahrenheit;
    } else if (fahrenheitInput !== '') {
        let celsius = (fahrenheitInput - 32) * 5/9;
        document.getElementById('celsius-input').value = celsius;
    }
});
