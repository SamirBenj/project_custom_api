
let hpCharacters =[];
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


const loadCharacters = async () => {
    try {
        const res = await fetch('https://corona.lmao.ninja/v2/countries');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};
function maFonctionRecherche(){
    console.log(document.getElementById('nomPays').value);
    const searchString = document.getElementById('nomPays').value;
    const filteredCharacters = hpCharacters.filter(character => {
        console.log(hpCharacters);
        return (
            character.country.includes(searchString)
        );
    });
    console.log(filteredCharacters);
    displayCharacters(filteredCharacters);
}

 charactersList = document.getElementById('allCovidData');

const displayCharacters = (characters) => {
    // console.log(characters);
    // console.log(characters.country);
    const htmlString = characters
        .map((character) => {
            return `
         <div class="Card">
            <h3> ${character.country} </h3>
            <div class="principalData">
            <img id="countryFlag" src='${character.countryInfo.flag}' + </img>
            
            <div class="detailsInfo">
                <div id="rowInfo">
                    <div id="confirmed">
                    <img src="./imageIcon/check.png" </img>
                    <p>CONFIRME</p>
                    <p>${character.cases}</p>
                    </div>
                </div>

                <div id="rowInfo">
                    <div id="recovered">
                    <img  src="./imageIcon/heart.png" </img>
                    <p>GUERIS</p>
                    <p>  ${character.recovered }</p>
                   </div>
                </div>
                
                <div id="rowInfo">
                    <div id="deaths">
                    <img  src="./imageIcon/death.png" </img>
                    <p>DECES</p>
                    <p> ${character.deaths}</p>
                    </div>
                </div>
                
            </div>
           </div>
            </div>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};
            // <li class="character">
            //     <h2>${character.country}</h2>
    
            // </li>
// getDataEachCountrie();

loadCharacters();
function envoyerMessage(){
    let emailInput = document.getElementById('formMailAdress');
    let usernamInput = document.getElementById('formMailAdress');
    let messageInput = document.getElementById('formMessage');
    var data = {
        service_id: 'service_uhiriw7',
        template_id: 'template_vfhno4w',
        user_id: 'user_RgWgV8UKpxFtbjbgABShp',
        template_params: {
            'username': emailInput,
            'to_name': emailInput,
            'from':'samirbenjalloul@gmail.com',
            'message': messageInput,

        }

    };
     
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
        
    }).done(function() {
        // alert('Your mail is sent!');
        Swal.fire({
            icon: "success",
            title: "Success...",
            text: "Mail bien envoyé !!",
          });

    }).fail(function(error) {
        // alert('Oops... ' + JSON.stringify(error));
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Erreur hmmmmm.... ???",
          });
    });
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