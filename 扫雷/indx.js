    var gamett = document.getElementById("gameid");
    const on = 2;
    const off = 0;
    const oo = 1;
    var buttonconset = 0;
    var buttonvv = 0;
    var dd = 10;
    document.oncontextmenu = function() { return false; };
    var array = new Array();
    var arryaData = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];

    function random() {
        var dataX = Math.floor(Math.random() * 9) + 1;
        var dataY = Math.floor(Math.random() * 9) + 1;
        var boolXY = dataX + "" + dataY;
        //console.log(boolXY);
        return boolXY;
    }

    function array1() {
        array[0] = random();
        for (i = 1; i < 11; i++) {
            array[i] = random();
            //console.log("第"+i+"个"+array[i]);
            for (w = 0; w < i; w++) {
                if (array[w] == array[i]) {
                    array[i] = random();
                }
            }
        }
    }

    function pdd() {
        var eventw = event.target;
        var buttononmouseup = event.button;
        //console.log(eventw);
        var hml = eventw.id;
        //console.log(hml);
        var data = document.getElementById(hml);
        var text = data.value;
        var id = data.id;

        var d = document.getElementById("span-conext");
        // console.log(id);

        if (buttononmouseup == 2) {
            date(true);
            if (id != buttonvv) {
                buttonconset = 0;
            }
            switch (buttonconset) {
                case 0:
                    dd--;
                    console.log(dd);
                    console.log(d);
                    if (parseInt(dd) >= parseInt(0)) {
                        data.style.backgroundColor = "red";
                        d.innerText = dd;
                        buttonconset++;
                    } else if (parseInt(dd) >= parseInt(0)) {
                        break;
                    }



                    //console.log(buttonconset); 
                    break;
                case 1:

                    data.style.backgroundColor = "blue";
                    buttonconset++;
                    //console.log(buttonconset);
                    break;
                case 2:
                    data.style.backgroundColor = "white";
                    buttonconset = 0;
                    //console.log(buttonconset);
                    break;
            }
            buttonvv = id;
            //console.log(buttonvv);
        } else if (buttononmouseup == 0) {
            date(true);
            if (data.style.backgroundColor != "red" && data.style.backgroundColor != "blue") {
                switch (text) {
                    case "0":
                        {
                            data.style.display = "none";
                            // console.log(data.id);
                            // console.log("开始");

                            var text = data.id;
                            recursion(text);
                            break;
                        }
                    case "1":

                        //console.log("1");
                        data.style.display = "none";
                        break;
                    case "2":
                        //console.log("2");
                        data.style.display = "none";
                        alert("game over");
                        window.location.href = "html1.html";
                        break;
                    default:
                        break
                }
            }
        }
    }

    function recursion(text) {
        var strs = new Array();
        var sts = new Array();
        strs = text.split("")
        sts = possibility(strs[0], strs[1])
        for (var key in sts) {
            var dd = document.getElementById(sts[key]);
            dd.style.display = "none";
            // console.log(dd.id);
            // if(dd.value=="1"){
            //     continue;
            // }
        }

    }

    function possibility(I, J) {
        var arrvarnew = new Array();
        // if(isNaN(I)){
        var i = parseInt(I);
        // }
        // if(isNaN(J)){
        var j = parseInt(J);
        // }
        const bottm = 9;
        const top = 1;

        var dataI = i;
        var dataJ = j;
        var connset = 0;
        if ((dataI + 1 >= top && dataJ + 0 >= top) && (dataI + 1 <= bottm && dataJ + 0 <= bottm)) {
            //  console.log(dataI+1,dataJ+0);

            arrvarnew[connset] = (dataI + 1) + "" + (dataJ + 0);
            connset++;
        }
        if ((dataI + 1 >= top && dataJ + 1 >= top) && (dataI + 1 <= bottm && dataJ + 1 <= bottm)) {
            //    console.log(dataI+1,dataJ+1);
            arrvarnew[connset] = (dataI + 1) + "" + (dataJ + 1);
            connset++;
        }
        if ((dataI + 0 >= top && dataJ + 1 >= top) && (dataI + 0 <= bottm && dataJ + 1 <= bottm)) {
            //   console.log(dataI+0,dataJ+1);
            arrvarnew[connset] = (dataI + 0) + "" + (dataJ + 1);
            connset++;
        }
        if ((dataI - 1 >= top && dataJ + 1 >= top) && (dataI - 1 <= bottm && dataJ + 1 <= bottm)) {
            //    console.log(dataI-1,dataJ+1);
            arrvarnew[connset] = (dataI - 1) + "" + (dataJ + 1);
            connset++;
        }
        if ((dataI - 1 >= top && dataJ + 0 >= top) && (dataI - 1 <= bottm && dataJ + 0 <= bottm)) {
            //   console.log(dataI-1,dataJ+0);
            arrvarnew[connset] = (dataI - 1) + "" + (dataJ + 0);
            connset++;
        }
        if ((dataI - 1 >= top && dataJ - 1 >= top) && (dataI - 1 <= bottm && dataJ - 1 <= bottm)) {
            //  console.log(dataI-1,dataJ-1);
            arrvarnew[connset] = (dataI - 1) + "" + (dataJ - 1);
            connset++;
        }
        if ((dataI + 0 >= top && dataJ - 1 >= top) && (dataI + 0 <= bottm && dataJ - 1 <= bottm)) {
            //console.log(dataI+0,dataJ-1);
            arrvarnew[connset] = (dataI + 0) + "" + (dataJ - 1);
            connset++;
        }
        if ((dataI + 1 >= top && dataJ - 1 >= top) && (dataI + 1 <= bottm && dataJ - 1 <= bottm)) {
            //console.log(dataI+1,dataJ-1); 
            arrvarnew[connset] = (dataI + 1) + "" + (dataJ - 1);
            connset++;
        }
        return arrvarnew;
    }

    function configure(arrvarnew, arryaData, connset1, divdata, buttondata) {
        for (w = 0; w < 10; w++) {
            if (array[w] == arryaData[i][j]) {
                divdata.style.backgroundColor = "blue";

            }
        }
        for (var vv of arrvarnew) {
            // console.log(vv);
            for (w = 0; w < 10; w++) {
                if (array[w] == vv) {
                    connset1++;
                }
            }
        }
        if (divdata.style.backgroundColor == "blue") {
            divdata.style.backgroundImage = "url(image/bool.jpg)";
            buttondata.value = on;
            return;

        }
        switch (connset1) {
            case 0:
                divdata.style.backgroundImage = "url(image/kong.jpg)";
                buttondata.value = off;
                break;
            case 1:
                divdata.style.backgroundImage = "url(image/1.jpg)";
                buttondata.value = oo;
                break;
            case 2:
                divdata.style.backgroundImage = "url(image/2.jpg)";
                buttondata.value = oo;
                break;
            case 3:
                divdata.style.backgroundImage = "url(image/3.jpg)";
                buttondata.value = oo;
                break;
            case 4:
                divdata.style.backgroundImage = "url(image/4.jpg)";
                buttondata.value = oo;
                break;
            case 5:
                divdata.style.backgroundImage = "url(image/5.jpg)";
                buttondata.value = oo;
                break;
            case 6:
                divdata.style.backgroundColor = "red";
                break;
            case 7:
                divdata.style.backgroundColor = "red";
                break;
            case 8:
                divdata.style.backgroundColor = "red";
                break;
            default:
        }
    }

    function witre2() {
        array1();
        for (i = 1; i < 10; i++) {
            for (j = 1; j < 10; j++) {
                var connset1 = 0;
                // console.log("开始");
                // console.log(dataI,dataJ); 
                // console.log("起飞");
                var arrvarnew = possibility(i, j);
                arryaData[i][j] = i + "" + j;
                var divdata = document.createElement("div");
                divdata.className = "divdata";
                // divdata.innerText = arryaData[i][j];
                var buttondata = document.createElement("button");
                buttondata.className = "buttondata";
                buttondata.id = arryaData[i][j];
                // buttondata.innerText = arryaData[i][j];
                buttondata.onmouseup = pdd;
                divdata.appendChild(buttondata);
                gamett.appendChild(divdata);
                configure(arrvarnew, arryaData, connset1, divdata, buttondata);
            }
        }

    }
    var timeCount = 0;
    var tt = false;


    function date(tt) {
        var type = tt;
        if (type) {
            setInterval(function() {
                timeCount++;
                var m = parseInt(timeCount / 60);
                var s = parseInt(timeCount % 60);
                var date = document.getElementById("span-time");
                date.innerText = toDub(m) + ":" + toDub(s);

            }, 1000);
        }

    }

    function toDub(n) {
        return n < 10 ? "0" + n : "" + n;
    }
    witre2();


    function dataDivConext() {
        var datadiv = document.getElementById("gameid");
        var d = document.getElementById("span-conext");
        console.log(datadiv.childNodes);
        var data = datadiv.childNodes;
        var da = 10;
        data.forEach(function(e) {
            if (e.firstChild == null) {
                return;
            }

            if (e.firstChild.style.backgroundColor == "red") {
                console.log(d);
                console.log(d);
                d.innerText = da--;
            }
        })
    }