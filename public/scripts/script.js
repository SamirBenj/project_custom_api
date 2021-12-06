
let listCountries =[];
let listGallerie = [];

//afficher les pays et leurs données
const getCountries = async () => {
    try {
        const res = await fetch('https://corona.lmao.ninja/v2/countries');
        listCountries = await res.json();
        displayCountries(listCountries);
    } catch (err) {
        console.error(err);
    }
};

//la focntion prend la valuer du pays recherche puis les affchera dans avec la fonction displayCountry
function maFonctionRecherche(){
    // console.log(document.getElementById('nomPays').value);
    const searchString = document.getElementById('nomPays').value.toLowerCase();
    const filteredCountries = listCountries.filter(character => {
        return (
            character.country.toLowerCase().includes(searchString)
        );
    });
    // console.log(filteredCountries);
    displayCountries(filteredCountries);
}

//afficher les resultat de la focntion recherche
const displayCountries = (characters) => {
    var countrieList = document.getElementById('allCovidData');
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
        countrieList.innerHTML = htmlString;
};


function sendMail(){
    let emailInput = document.getElementById('formMailAdress').value;
    let usernamInput = document.getElementById('formMailAdress').value;
    let messageInput = document.getElementById('formMessage').value;
    console.log(emailInput);

    var data = {
        service_id: 'service_uhiriw7',
        template_id: 'template_vfhno4w',
        user_id: 'user_RgWgV8UKpxFtbjbgABShp',
        template_params: {
            'username': usernamInput,
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
          }).then((succe)=>{
            window.location.href= '../index.html';
          });


    }).fail(function(error) {
        // alert('Oops... ' + JSON.stringify(error));
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.responseText,
          });
    });
}
//Galerie d'images
const getGallerie = async () => {
    try {
        const res = await fetch('https://corona.lmao.ninja/v2/countries');
        listGallerie = await res.json();
        displayGallerie(listGallerie);
        console.log(listGallerie);
    } catch (err) {
        console.error(err);
    }
};

displayGallerie = (countryBody) => {
    var galerieDiv = document.getElementById("galerieDiv");

    const divTest = countryBody
    .map((countryBody) =>{
         return `<div class="cardGallerie"><img src="${countryBody.countryInfo.flag}"></img></div>`;
           

        //  console.log(countryBody.countryInfo.flag);
     }).join('');
     galerieDiv.innerHTML = divTest;
}

getGallerie();

getCountries();
