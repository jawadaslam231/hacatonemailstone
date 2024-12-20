var toggalButton = document.getElementById('toggal-skill');
var skills = document.getElementById('skills');
toggalButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
