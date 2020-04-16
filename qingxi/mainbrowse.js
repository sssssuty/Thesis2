var url = "https://raw.githubusercontent.com/sssssuty/Thesis2/master/Testing1/testing5.json";
    fetch(url)
            .then(function(response){return response.json();})
            .then(function(json){sortData1(json);})

var url = "https://raw.githubusercontent.com/sssssuty/Thesis2/master/Testing1/testing5.json";
    fetch(url)
            .then(function(response){return response.json();})
            .then(function(json){sortData2(json);})

var url = "https://raw.githubusercontent.com/sssssuty/Thesis2/master/Testing1/testing5.json";
    fetch(url)
            .then(function(response){return response.json();})
            .then(function(json){sortData3(json);})


function sortData1(json){
    var array = json;
    console.log(array);

    for (var i = 0; i < array.length; i ++){
        array.sort(function(a,b){
            if (a.pinYinNum < b.pinYinNum) return -1;
            if (b.pinYinNum < a.pinYinNum) return 1;
            return 0;
        });
        var nn = array[i].char;
        var strokeNum = array[i].strokeNum;
        var char = document.createElement("div");
        char.innerHTML = nn;
        var className = "strokeNum" + strokeNum;
        document.getElementById("idchar1").appendChild(char).setAttribute("class", className);
        $("#buttonPinyin").css({"color": "black"});
        $("#buttonPinyin").css({"backgroundColor": ""});
        $("#buttonComponent").css({"color": "black"});
        $("#buttonStroke").css({"color": "black"});
    }

}

function sortData2(json){
    var array = json;
    for (var i = 0; i < array.length; i ++){
            array.sort(function(a,b){
                if (a.strokeNum < b.strokeNum) return -1;
                if (b.strokeNum < a.strokeNum) return 1;
                return 0;
                });
            var nn = array[i].char;
            var pinYin = array[i].pinYin;
            var char = document.createElement("div");
            char.innerHTML = nn;
            var className = "pinyin" + pinYin;      
            document.getElementById("idchar2").appendChild(char).setAttribute("class", className);
            document.getElementById("idchar2").style.display = "none";
        }
}

function sortData3(json){
    var array = json;
    for (var i = 0; i < array.length; i ++){
            array.sort(function(a,b){
                if (a.componentNum < b.componentNum) return -1;
                if (b.componentNum < a.componentNum) return 1;
                return 0;
                });
            var nn = array[i].char;
            var pinYin = array[i].pinYin;
            var char = document.createElement("div");
            char.innerHTML = nn;
            var className = "pinyin" + pinYin;      
            document.getElementById("idchar3").appendChild(char).setAttribute("class", className);
            document.getElementById("idchar3").style.display = "none";    
        }
}

function sortPinyin(){
    document.getElementById("idchar1").style.display = "block";
    document.getElementById("idchar2").style.display = "none";
    document.getElementById("idchar3").style.display = "none";

    document.getElementById("buttonPinyin").style.backgroundPosition = "-99.99% 0";
    document.getElementById("buttonComponent").style.backgroundPosition = "0";
    document.getElementById("buttonStroke").style.backgroundPosition = "0";

}
function sortStrokeNum(){
    document.getElementById("idchar1").style.display = "none";
    document.getElementById("idchar2").style.display = "block";
    document.getElementById("idchar3").style.display = "none";

    document.getElementById("buttonPinyin").style.backgroundPosition = "0";
    document.getElementById("buttonComponent").style.backgroundPosition = "0";
    document.getElementById("buttonStroke").style.backgroundPosition = "-99.99% 0";
}

function sortComponent(){
    document.getElementById("idchar1").style.display = "none";
    document.getElementById("idchar2").style.display = "none";
    document.getElementById("idchar3").style.display = "block";

    document.getElementById("buttonPinyin").style.backgroundPosition = "0";
    document.getElementById("buttonComponent").style.backgroundPosition = "-99.99% 0";
    document.getElementById("buttonStroke").style.backgroundPosition = "0";
}






