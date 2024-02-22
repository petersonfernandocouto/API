document.getElementById("card").style.setProperty("display", "none", "important");



function Search(){

    document.getElementById("card").style.setProperty("display", "block", "important")

    var country = document.getElementById("Nation").value

    var codeURL = `https://restcountries.com/v3.1/name/${country}?fullText=true`

    fetch(codeURL)

        .then(function(response){

            return response.json()
        })

        .then(function(data){

            
            console.log(data[0])
            console.log(data[0].name)
            console.log(data[0].capital[0])
            console.log(data[0].continents[0])
            console.log(data[0].population)


            let NameNation = document.getElementById("NameNation")
            let NationFlag = document.getElementById("NationFlag")
            let Capital = document.getElementById("Capital")
            let Continente = document.getElementById("Continente")
            let População = document.getElementById("População")

            
            NameNation.innerText = country
            Capital.innerText = data[0].capital[0]
            Continente.innerText = data[0].continents[0]
            População.innerText = data[0].population.toLocaleString('pt-BR');

            NationFlag.src = data[0].flags.svg
    
           })

           .catch(function(error) {
            alert(`Erro: Escreva ${country} em Inglês`, error);
        });



}