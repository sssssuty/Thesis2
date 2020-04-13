var url = "https://raw.githubusercontent.com/sssssuty/Thesis2/master/Testing1/testing1.json";
    fetch(url)
            .then(function(response){return response.json();})
            .then(function(json){sortData1(json);})

var url = "https://raw.githubusercontent.com/sssssuty/Thesis2/master/Testing1/testing1.json";
    fetch(url)
            .then(function(response){return response.json();})
            .then(function(json){sortData2(json);})

var url = "https://raw.githubusercontent.com/sssssuty/Thesis2/master/Testing1/testing1.json";
    fetch(url)
            .then(function(response){return response.json();})
            .then(function(json){sortData3(json);})


function sortData1(json){
    var array = json;

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
        $("#buttonPinyin").css({"color": "#FF5C00"});
        $("#buttonComponent").css({"color": "white"});
        $("#buttonStroke").css({"color": "white"});
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
    // console.log("hahah");
    // document.getElementById("idchar1").style.backgroundColor = "yellow";
    // document.getElementById("idchar2").style.backgroundColor = "red";
    document.getElementById("idchar1").style.display = "block";
    document.getElementById("idchar2").style.display = "none";
    document.getElementById("idchar3").style.display = "none";
    $("#buttonPinyin").css({"color": "#FF5C00"});
    $("#buttonComponent").css({"color": "white"});
    $("#buttonStroke").css({"color": "white"});
}
function sortStrokeNum(){
    // console.log("blablabla");
    // document.getElementById("idchar1").style.backgroundColor = "red";
    // document.getElementById("idchar2").style.backgroundColor = "yellow";
    document.getElementById("idchar1").style.display = "none";
    document.getElementById("idchar2").style.display = "block";
    document.getElementById("idchar3").style.display = "none";
    $("#buttonPinyin").css({"color": "white"});
    $("#buttonStroke").css({"color": "#FF5C00"});
    $("#buttonComponent").css({"color": "white"});
}

function sortComponent(){
    // console.log("blablabla");
    // document.getElementById("idchar1").style.backgroundColor = "red";
    // document.getElementById("idchar2").style.backgroundColor = "yellow";
    document.getElementById("idchar1").style.display = "none";
    document.getElementById("idchar2").style.display = "none";
    document.getElementById("idchar3").style.display = "block";
    $("#buttonPinyin").css({"color": "white"});
    $("#buttonStroke").css({"color": "white"});
    $("#buttonComponent").css({"color": "#FF5C00"});
}






