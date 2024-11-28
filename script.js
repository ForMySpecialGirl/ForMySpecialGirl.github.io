document.getElementById("startButton").onclick = function() {
    // Sembunyikan pesan selamat datang dan tombol
    document.getElementById("welcomeMessage").style.display = "none";
    document.getElementById("instruction").style.display = "none";
    document.getElementById("startButton").style.display = "none";

    // Tampilkan pesan romantis
    document.getElementById("romanticMessage").style.display = "block";

    // Tampilkan foto
    document.getElementById("foto1").style.display = "block";
    document.getElementById("foto2").style.display = "block";
    document.getElementById("foto3").style.display = "block";

    // Tampilkan tombol ungkapkan perasaan
    document.getElementById("expressButton").style.display = "block";

    // Putar musik
    var music = document.getElementById("backgroundMusic");
    music.play();
};

document.getElementById("expressButton").onclick = function() {
    // Tampilkan pesan ungkapan perasaan
    document.getElementById("expressionMessage").style.display = "block";
    
    // Sembunyikan tombol ungkapkan perasaan setelah diklik
    document.getElementById("expressButton").style.display = "none";
    
    // Tampilkan pesan terima kasih setelah ungkapan perasaan
    document.getElementById("thankYouMessage").style.display = "block";
};