/**
 * Created by arvind on 22/6/17.
 */
window.onload = function () {
    var isfloat = false;
    var text = document.getElementById("ans")
    var acbtn = document.getElementById("ac");
    acbtn.onclick = function () {
        text.innerHTML = "";
        isfloat = false;
    };
    var plusbtn = document.getElementById("plus");
    plusbtn.onclick = function () {
        text.innerHTML += "+";
    };
    var minusbtn = document.getElementById("minus");
    minusbtn.onclick = function () {
        text.innerHTML += "-";
    };
    var multibtn = document.getElementById("multi");
    multibtn.onclick = function () {
        text.innerHTML += "*";
    };
    var onebtn = document.getElementById("one");
    onebtn.onclick = function () {
        text.innerHTML += "1";
    };
    var twobtn = document.getElementById("two");
    twobtn.onclick = function () {
        text.innerHTML += "2";
    };
    var threebtn = document.getElementById("three");
    threebtn.onclick = function () {
        text.innerHTML += "3";
    };
    var divibtn = document.getElementById("divi");
    divibtn.onclick = function () {
        text.innerHTML += "/";
    };
    var fourbtn = document.getElementById("four");
    fourbtn.onclick = function () {
        text.innerHTML += "4";
    };
    var fivebtn = document.getElementById("five");
    fivebtn.onclick = function () {
        text.innerHTML += "5";
    };
    var sixbtn = document.getElementById("six");
    sixbtn.onclick = function () {
        text.innerHTML += "6";
    };
    var dotbtn = document.getElementById("dot");
    dotbtn.onclick = function () {
        text.innerHTML += ".";
        isfloat = true;
    };
    var sevenbtn = document.getElementById("seven");
    sevenbtn.onclick = function () {
        text.innerHTML += "7";
    };
    var eightbtn = document.getElementById("eight");
    eightbtn.onclick = function () {
        text.innerHTML += "8";
    };
    var ninebtn = document.getElementById("nine");
    ninebtn.onclick = function () {
        text.innerHTML += "9";
    };
    var zerobtn = document.getElementById("zero");
    zerobtn.onclick = function () {
        text.innerHTML += "0";
    };
    var openbtn = document.getElementById("open");
    openbtn.onclick = function () {
        text.innerHTML += "(";
    };
    var closebtn = document.getElementById("close");
    closebtn.onclick = function () {
        text.innerHTML += ")";
    };
    var equalbtn = document.getElementById("equal");
    equalbtn.onclick = function () {
      var val = text.innerHTML;
      var answer = findans(val);
      text.innerHTML = answer;
    };
    // 0 - plus, 1 - minus, 2 - multiply, 3 - divide
    var findans = function (val) {
        var brackstring = "0";
        var opbc = 0;
        var clbc = 0;
        var currnuminstring = "0";
        var fn = 0;
        var sn = 0;
        var kaam = 0;
        for(var i = 0; i < val.length; i++){
            var cc = val.charAt(i);
            switch(cc){
                case "(":
                    i++;
                    opbc = 1;
                    while(i < val.length){
                        var cc1 = val.charAt(i);
                        if(cc1 == "("){
                          opbc++;
                        }else if(cc1 == ")"){
                            clbc++;
                        }

                        if(opbc == clbc){
                            var tempans = findans(brackstring);
                            currnuminstring += tempans;
                            opbc = 0;
                            clbc = 0;
                            break;
                        }

                        brackstring += cc1;
                        i++;
                    }
                case "+":
                    if(isfloat){
                        sn = parseFloat(currnuminstring);
                    }else{
                        sn = parseInt(currnuminstring);
                    }
                    fn = doJob(fn,sn,kaam);
                    kaam = 0;
                    currnuminstring = "0";
                    break;
                case "-":
                    if(isfloat){
                        sn = parseFloat(currnuminstring);
                    }else{
                        sn = parseInt(currnuminstring);
                    }
                    fn = doJob(fn, sn, kaam);
                    kaam = 1;
                    currnuminstring = "0";
                    break;
                case "*":
                    if(isfloat){
                        sn = parseFloat(currnuminstring);
                    }else{
                        sn = parseInt(currnuminstring);
                    }
                    fn = doJob(fn, sn, kaam);
                    kaam = 2;
                    currnuminstring = "0";
                    break;
                case "/":
                    if(isfloat){
                        sn = parseFloat(currnuminstring);
                    }else{
                        sn = parseInt(currnuminstring);
                    }
                    fn = doJob(fn, sn, kaam);
                    kaam = 3;
                    currnuminstring = "0";
                    break;
                default:
                    currnuminstring += cc;
            }
        }
        if(isfloat){
            sn = parseFloat(currnuminstring);
        }else{
            sn = parseInt(currnuminstring);
        }
        fn = doJob(fn,sn,kaam);
        return fn;
    };

    var doJob = function (fn, sn, kaam) {
        if(kaam == 0){
            return fn + sn;
        }else if(kaam == 1){
            return fn - sn;
        }else if(kaam == 2){
            return fn * sn;
        }else{
            if(fn % sn != 0){
                isfloat = true;
            }
            return fn / sn;
        }
    };
};

    
