const getCountriesDataSorted = async() => {
    var request = new XMLHttpRequest();
     request.open('GET','https://disease.sh/v3/covid-19/countries?sort=cases');
     request.addEventListener('load',function(){
         if(request.status == 200){
             let covidDataSorted = JSON.parse(this.response);
             console.log(covidDataSorted[1]['countryInfo'].flag);
             console.log(covidDataSorted);

            //  console.log(covidDataSorted[1].cases);
             let tableauJsonData = document.getElementById('myTable');
             let table2 =document.getElementById('myTable2');
                let tableContext;
                for(let i =0; i < covidDataSorted.length;i++){
                tableContext += '<div id="sousTable">';
                tableContext += '<tr>';
               tableContext+=' <td>'+ i+'</td>';
               tableContext += '<td>'+covidDataSorted[i].country+'</td>';
               tableContext += '<td>'+covidDataSorted[i].cases+'</td>';
               tableContext += '</div>'
               tableContext += '</tr>';
            }
                tableauJsonData.innerHTML =  tableContext;
                table2.innerHTML = tableContext;
            //  dataCovidText += covidData.country;

         }else {
            console.log('not working well');
         }
     });
     request.send();
}

const getInfectedCountries = async() => {
    var request = new XMLHttpRequest();
     request.open('GET','https://disease.sh/v3/covid-19/continents/africa?strict=true');
     request.addEventListener('load',function(){
         if(request.status == 200){
             console.log("It's OK");
             let listJsonData = JSON.parse(this.response);
                console.log(listJsonData);
                console.log(listJsonData.active)
            let listePuceDiv = document.getElementById('listInfoAfrica');
            let listPuceAdd;
            // for(let i =0; i< listJsonData.length;i++){
                // console.log(covidData[9].country);
                    listPuceAdd += '<li> Nombre de cas total :'+listJsonData.active+'</li>';
                    listPuceAdd += '<li> Nombre de cas total :'+listJsonData.cases+'</li>';
                    listPuceAdd += "<li> Nombre de cas(aujourd'hui) :"+listJsonData.todayCases+"</li>";
                    listPuceAdd += '<li> Nombre de cas décédé :'+listJsonData.deaths+'</li>';
                    listPuceAdd += '<li> Nombre de cas guéris :'+listJsonData.todayRecovered+'</li>';
                    listPuceAdd += '<li> Nombre de cas total :'+listJsonData.active+'</li>';

                    listPuceAdd += '<li>Pays</li>'
            // }
                listePuceDiv.innerHTML =  listPuceAdd;
                
                // table2.innerHTML = tableContext;
            //  dataCovidText += covidData.country;

         }else {
            console.log('not working well');
         }
     });
     request.send();
}
getInfectedCountries();