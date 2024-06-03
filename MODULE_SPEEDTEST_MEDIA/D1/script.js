fetch('http://localhost:8080/speedtest/random.php')
    .then(response => response.json())
    .then(response => console.log(response))