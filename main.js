var url = "https://raw.githubusercontent.com/sssssuty/Thesis2/master/Testing1/testing1.json";
    fetch(url)
            .then(function(response){return response.json();})
            .then(function(json){ sortData(json);})

function sortData(json){

    console.log(json);
}