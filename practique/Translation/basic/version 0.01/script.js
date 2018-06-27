
window.onload = function()
{

    document.getElementById('rus').style.display = "none";
    document.getElementById('trr').addEventListener('click',transLate);
    document.getElementById('tre').addEventListener('click',transLate2);
}
function transLate(e)
{
    document.getElementById('en').style.display = "none";
    document.getElementById('rus').style.display = "block";
}
function transLate2(e)
{
    document.getElementById('rus').style.display = "none";
    document.getElementById('en').style.display = "block";
}

