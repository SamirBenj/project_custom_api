//Cette fonction affiche les pays et leur nombre avec l'api corona.lmao
const getDataEachCountrie = async() => {
    console.log('test');
    var request = new XMLHttpRequest();
     request.open('GET','https://corona.lmao.ninja/v2/countries');
     request.addEventListener('load',function(){
         if(request.status == 200){
             console.log("It's OK");
            hpCharacters = JSON.parse(this.response);
             let covidData = JSON.parse(this.response);
             console.log(covidData[1]['countryInfo'].flag);
             console.log(covidData);

             console.log(covidData[1].cases);
             let allDataCovidDiv = document.getElementById('allCovidData');
                let dataCovidText;
                for(let i =0; i< covidData.length;i++){
                // console.log(covidData[9].country);
                dataCovidText +='  <div class="Card">';
                dataCovidText += '<h3>' + covidData[i++].country + '</h3>';
                dataCovidText += '<div class="principalData">';
                dataCovidText += '<img id="countryFlag" src='+ covidData[i++]["countryInfo"].flag +' </img>'; 
                
                dataCovidText += '<div class="detailsInfo">';
                    dataCovidText += '<div id="rowInfo">';
                        dataCovidText += '<div id="confirmed">';
                        dataCovidText += '<img src="./imageIcon/check.png" </img>';
                        dataCovidText += '<p>CONFIRME</p>';
                        dataCovidText += '<p>' + covidData[i].cases+'</p>';
                        dataCovidText +='</div>';
                    dataCovidText += '</div>';

                    dataCovidText += '<div id="rowInfo">';
                        dataCovidText += '<div id="recovered">';
                        dataCovidText += '<img  src="./imageIcon/heart.png" </img>';
                        dataCovidText += '<p>GUERIS</p>';
                        dataCovidText += '<p>' + covidData[i++].recovered+'</p>';
                        dataCovidText +='</div>';
                    dataCovidText += '</div>';
                    
                    dataCovidText += '<div id="rowInfo">';
                        dataCovidText += '<div id="deaths">';
                        dataCovidText += '<img  src="./imageIcon/death.png" </img>';
                        dataCovidText += '<p>DECES</p>';
                        dataCovidText += '<p>' + covidData[i++].deaths+'</p>';
                        dataCovidText +='</div>';
                    dataCovidText += '</div>';
                    
                dataCovidText += '</div>'
                dataCovidText += '</div>';
                dataCovidText +='</div>';

                }
                allDataCovidDiv.innerHTML =  dataCovidText;

            //  dataCovidText += covidData.country;

         }else {
            console.log('not working well');
         }
     });
     request.send();
}



// function getDataEachCountrieJSON(){
//     fetch('https://corona.lmao.ninja/v2/countries')
//     .then(response => {
//         if(response.ok) {
            
//             console.log(response.json());
//             var covidData = JSON.parse(this.response.json());

//              console.log(covidData[0].country);
// }else {
//             response.text();
//         }
//     })
//     .then(
//         json =>console.log(json))
//     .catch(err => console.log(err));
    
// }
// (function() {
//         emailjs.init("user_RgWgV8UKpxFtbjbgABShp");
//         })();
    // emailjs.init("user_RgWgV8UKpxFtbjbgABShp");
    // var templateParams = {
    //     name: 'FirstTemplate',
    //     notes: 'Check this out!'
    // };


     
    // emailjs.send('service_uhiriw7', 'template_vfhno4w', templateParams)
    //     .then(function(response) {
    //        console.log('SUCCESS!', response.status, response.text);
    //     }, function(error) {
    //        console.log('FAILED...', error);
    //     });