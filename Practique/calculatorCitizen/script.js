window.onload = function() {

    document.getElementById('oneCalc').addEventListener('click',addOne);
    document.getElementById('twoCalc').addEventListener('click',addOne);
    document.getElementById('threeCalc').addEventListener('click',addOne);

    document.getElementById('fourCalc').addEventListener('click',addOne);
    document.getElementById('fiveCalc').addEventListener('click',addOne);
    document.getElementById('sixCalc').addEventListener('click',addOne);

    document.getElementById('sevenCalc').addEventListener('click',addOne);
    document.getElementById('eightCalc').addEventListener('click',addOne);
    document.getElementById('nineCalc').addEventListener('click',addOne);

    document.getElementById('plus').addEventListener('click',addPlus);
    document.getElementById('minus').addEventListener('click',addMinus);
    document.getElementById('equal').addEventListener('click',equal);
    document.getElementById('cleaner').addEventListener('click', cleaner);

    document.getElementById('zeroCalc').addEventListener('click',addOne);
    document.getElementById('bajanel').addEventListener('click',addDeley);
    document.getElementById('bazmapatkel').addEventListener('click', addBazmapatkel);

    function addOne(e) {
        document.getElementById('inputText').value += +this.innerHTML;
    }
    function addPlus(e){
        document.getElementById('inputText').value += '+';
    }
    function addMinus(e){
        document.getElementById('inputText').value += '-';
    }
    function addDeley(e){
        document.getElementById('inputText').value += '/';
    }
    function cleaner(e){
        document.getElementById('inputText').value = "";
    }
    function equal(e) {
        var result = eval(document.getElementById('inputText').value);
        document.getElementById('inputText').value = result; 
        console.log(result);
    }
    function addBazmapatkel() {
        document.getElementById('inputText').value += '*';
    }
    // function addTwo(e) {
    //     document.getElementById('inputText').value += +this.innerHTML;
    // }
    // function addThree(e) {
    //     document.getElementById('inputText').value += +this.innerHTML;
    // }
    // function addFour(e) {
    //     document.getElementById('inputText').value += +this.innerHTML;
    // }
    // function addFive(e) {
    //     document.getElementById('inputText').value += +this.innerHTML;
    // }
    // function addSix(e) {
    //     document.getElementById('inputText').value += +this.innerHTML;
    // }
    // function addSeven(e) {
    //     document.getElementById('inputText').value += +this.innerHTML;
    // }
    // function addEight(e) {
    //     document.getElementById('inputText').value += +this.innerHTML;
    // }
    // function addNine(e) {
    //     document.getElementById('inputText').value += +this.innerHTML;
    // }

}