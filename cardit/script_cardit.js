
/* modal */
const bankLogo = document.getElementById('bankLogo')
const cardListModal = document.getElementById('cardListModal')
const navbarLogo = document.getElementById('navbarLogo')
const navbarAnimate = document.getElementById('navbarAnimate')
const saveBtn = document.getElementById('saveBtn')
let form = document.forms.modalForm
let ivalue;
let name = 'cardN';
let notWrong;
const bankLogoED = document.getElementById('bankLogoED')
const saveBtnED = document.getElementById('saveBtnED')
let formED = document.forms.modalFormED
let ivalueED;
let nameED = 'cardNED';
let notWrongED;

function openModal() {
 bgModal.style.display = 'flex'

} 
function nextinput(formName, iname , Ilength , iindex){
   let varForm = formName ; 
if(iname[iindex].value.length === Ilength) {
     ivalue = iname[iindex].value.slice(0 , Ilength)
    iname[iindex].value = `${ivalue}`;

    if (iindex === 6){
        ivalue = iname[iindex].value.slice(0 , 3)
        iname[iindex].value = `${ivalue}`;
    iname[iindex].focus()
    }else{
        iname[iindex+1].focus()
    }


}

switch (varForm.cardNumber[0].value ) {
    case '5892':
        bankLogo.setAttribute('src' , './banklogo//sepah.png' );
        bankLogoED.setAttribute('src' , './banklogo//sepah.png' );
        notWrong = true ;
        varForm.cardNumber[0].style.color = 'black'
        notWrongED = true ;
        break;
    case '6062':
        bankLogo.setAttribute('src' , './banklogo//melal.ico' );      
        bankLogoED.setAttribute('src' , './banklogo//melal.ico' );
        notWrong = true ;
        varForm.cardNumber[0].style.color = 'black'
        break;
    case '6393':
        bankLogo.setAttribute('src' , './banklogo//pasargad.png' );        
        bankLogo.sEDetAttribute('src' , './banklogo//pasargad.png' );
        notWrong = true ;
        varForm.cardNumber[0].style.color = 'black'
        break;
    case '5022':
        bankLogo.setAttribute('src' , './banklogo//pasargad.png' );        
        bankLogo.sEDetAttribute('src' , './banklogo//pasargad.png' );
        notWrong = true ;
        varForm.cardNumber[0].style.color = 'black'
        break;
    case '6221':
        bankLogo.setAttribute('src' , './banklogo//parsian.png' );        
        bankLogo.EDsetAttribute('src' , './banklogo//parsian.png' );
        notWrong = true ;
        varForm.cardNumber[0].style.color = 'black'
        break;
    case '6391':
        bankLogo.setAttribute('src' , './banklogo//parsian.png' );        
        bankLogo.EDsetAttribute('src' , './banklogo//parsian.png' );
        notWrong = true ;
        varForm.cardNumber[0].style.color = 'black'
        break;    
    case '6278':
        bankLogo.setAttribute('src' , './banklogo//parsian.png' );        
        bankLogo.EDsetAttribute('src' , './banklogo//parsian.png' );
        notWrong = true ;
        varForm.cardNumber[0].style.color = 'black'
        break;    
    case '6273':
        bankLogo.setAttribute('src' , './banklogo//tejarat.png' );        
        bankLogo.EDsetAttribute('src' , './banklogo//tejarat.png' );
        notWrong = true ;
        varForm.cardNumber[0].style.color = 'black'
        break;
    case '6362':
        bankLogo.setAttribute('src' , './banklogo//ayande.png' );       
         bankLogoED.setAttribute('src' , './banklogo//ayande.png' );
        notWrong = true ;
        varForm.cardNumber[0].style.color = 'black'
        break;
    case '5054':
    bankLogo.setAttribute('src' , './banklogo//gardeshgari.png' );    
    bankLogo.setAEDttribute('src' , './banklogo//gardeshgari.png' );
    notWrong = true ;
    varForm.cardNumber[0].style.color = 'black'
        break;
    case '6280':
        bankLogo.setAttribute('src' , './banklogo//maskan.png' );       
         bankLogoED.setAttribute('src' , './banklogo//maskan.png' );
        notWrong = true ;
    varForm.cardNumber[0].style.color = 'black'
        break;
    case '5057':
        bankLogo.setAttribute('src' , './banklogo//iranzamin.png' );        
        bankLogo.seEDtAttribute('src' , './banklogo//iranzamin.png' );
        notWrong = true ;
    varForm.cardNumber[0].style.color = 'black'
        break;
    case '6280':
        bankLogo.setAttribute('src' , './banklogo//mellat.png' );       
         bankLogoED.setAttribute('src' , './banklogo//mellat.png' );
        notWrong = true ;
    varForm.cardNumber[0].style.color = 'black'
        break;    
    case '6104':
        bankLogo.setAttribute('src' , './banklogo//mellat.png' );       
         bankLogoED.setAttribute('src' , './banklogo//mellat.png' );
        notWrong = true ;
    varForm.cardNumber[0].style.color = 'black'
        break;    
    case '6274':
        bankLogo.setAttribute('src' , './banklogo//novin.png' );      
          bankLogoED.setAttribute('src' , './banklogo//novin.png' );
        notWrong = true ;
    varForm.cardNumber[0].style.color = 'black'
        break;    
    case '5028':
        bankLogo.setAttribute('src' , './banklogo//shahr.png' );
        bankLogoED.setAttribute('src' , './banklogo//shahr.png' );
        notWrongED = true ;
        varForm.cardNumber[0].style.color = 'black'
        break;    
                                                                                                                                                   
    default:
    bankLogo.removeAttribute('src' ,'');
    notWrong = false
    varForm.cardNumber[0].style.color = 'red';
    bankLogoED.removeAttribute('src' ,'');
    notWrongED = false
        break;
}


for (let index = 0; index < form.cardNumber.length; index++) {
    if(form.cardNumber[index].value !=='' && notWrong === true ){
        saveBtn.classList.add('active')
        saveBtn.addEventListener('click', saveModal);
        window[name+index] = form.cardNumber[index].value ;
    }else{
        saveBtn.classList.remove('active')
        saveBtn.removeEventListener('click', saveModal);
    }

}
for (let index = 0; index < formED.cardNumber.length; index++) {
    if(formED.cardNumber[index].value !=='' && notWrong === true ){
        saveBtnED.addEventListener('click', saveModalED);
        saveBtnED.classList.add('active')
        window[nameED+index] = formED.cardNumber[index].value ;
    }else{
        saveBtnED.removeEventListener('click', saveModalED);
        saveBtnED.classList.remove('active')
    }

}

}



function exitModal() {
    bgModal.style.display = 'none'
}

function  saveModal(){
    bgModal.style.display = 'none'
    navbarAnimate.classList.add('active')
     navbarLogo.addEventListener('click', cardListOpener)
    createCard(bankLogo.getAttribute('src'), form.name.value , cardN0 , cardN1 ,cardN2 ,cardN3 ,cardN4 ,cardN5 ,cardN6 ,form.cardNumber[7] );
}
function  saveModalED(){
    let test = String(saveBtnED.classList);
    numid = test.replace(/[^0-9]/g,'');
    bgModal3.style.display = 'none'
    cardEditor(bankLogoED.getAttribute('src'), numid , formED.name.value , cardNED0 , cardNED1 ,cardNED2 ,cardNED3 ,cardNED4 ,cardNED5 ,cardNED6 ,formED.cardNumber[7] );
}





/*create card*/

let idIndex = 0 ;  
let numid ;
function createCard(blogo , name , v1 , v2 , v3 ,v4 , v5 , v6 ,v7   ){


    const section = document.createElement('section');
    const navbar = document.createElement('nav');
    const h3 = document.createElement('h3')
    const img = document.createElement('img')
    const main = document.createElement('main')
    const spanMA = document.createElement('span')
    const spanMB = document.createElement('span')
    const spanMC = document.createElement('span')
    const spanMD = document.createElement('span')
    const footer = document.createElement('footer')
    const spanFA = document.createElement('span')
    const i = document.createElement('i')
    const sectionF = document.createElement('section')
    const spanFB =document.createElement('span') 
    const spanFC =document.createElement('span') 
    const sectionS = document.createElement('section');
    const iSA = document.createElement('i')
    const iSB = document.createElement('i')
    const iSC = document.createElement('i')
    const iSD = document.createElement('i')

    section.classList.add('card')
    if (themeIndex === 1){
        section.classList.add('dark_mode_modal')
    }
    section.id=`card${idIndex}`

    navbar.classList.add('card--navbar')
    navbar.id=`nav${idIndex}`

    h3.classList.add('card--navbar-card_name')
    h3.id=`h3${idIndex}`

    img.classList.add('card--navbar-logo')
    img.id=`img${idIndex}`

    main.classList.add('card--main')
    main.id=`main${idIndex}`

    spanMA.classList.add('card--main-card_number')
    spanMA.id=`spanMA${idIndex}`

    spanMB.classList.add('card--main-card_number')
    spanMB.id=`spanMB${idIndex}`

    spanMC.classList.add('card--main-card_number')
    spanMC.id=`spanMC${idIndex}`

    spanMD.classList.add('card--main-card_number')
    spanMD.id=`spanMD${idIndex}`

    footer.classList.add('card--footer')
    footer.id=`footer${idIndex}`

    spanFA.classList.add('card--footer--card_cvv')
    spanFA.id=`spanFA${idIndex}`

    i.classList.add('fa' , 'fa-angle-down' , 'card--footer-icondown')
    i.id=`controlOpener${idIndex}`
    i.setAttribute('onclick' , `controlOpener(${i.id})`)

    sectionF.classList.add('card--footer--sec');
    sectionF.id=`secF${idIndex}`;

    spanFB.classList.add('card--footer--sec-card_date')
    spanFB.id=`spanFB${idIndex}`

    spanFC.classList.add('card--footer--sec-card_date')
    spanFC.id=`spanFC${idIndex}`

    sectionS.classList.add('card--contol_bar');
    sectionS.id=`secS${idIndex}`;

    iSA.classList.add('fa' , 'fa-files-o' , 'card--contol_bar-saver1')
    iSA.id=`iSA${idIndex}`
    iSA.setAttribute('onclick' , `cardCopyType1(${iSA.id})`)

    iSB.classList.add('fa' , 'fa-files-o' , 'card--contol_bar-saver2')
    iSB.id=`iSB${idIndex}`
    iSB.setAttribute('onclick' , `cardCopyType2(${iSB.id})`)

    iSC.classList.add('fa' , 'fa-trash-o' , 'card--contol_bar-delete')
    iSC.id=`iSC${idIndex}`
    iSC.setAttribute('onclick' , `cardDeleter(${iSC.id})`)

    iSD.classList.add('fa' , 'fa-pencil-square-o' , 'card--contol_bar-edit')
    iSD.id=`iSD${idIndex}`
    iSD.setAttribute('onclick' , `openModalED(${iSD.id})`)

    h3.innerText = name ;

    img.setAttribute('src' , blogo )

    spanMA.innerText = v4 ;

    spanMB.innerText = v3 ;

    spanMC.innerText = v2 ;

    spanMD.innerText = v1 ;

    spanFA.innerText = v7 ;

    spanFB.innerText = v6;

    spanFC.innerText = v5 ;

    cardListModal.appendChild(section);

    section.appendChild(navbar)

    navbar.appendChild(h3)

    navbar.appendChild(img)

    section.appendChild(main)
    
    main.appendChild(spanMA)

    main.appendChild(spanMB)

    main.appendChild(spanMC)

    main.appendChild(spanMD)

    section.appendChild(footer)

    footer.appendChild(spanFA)

    footer.appendChild(i)

    footer.appendChild(sectionF)

    sectionF.appendChild(spanFB)

    sectionF.appendChild(spanFC)

    section.appendChild(sectionS)

    sectionS.appendChild(iSA)

    sectionS.appendChild(iSB)

    sectionS.appendChild(iSC)

    sectionS.appendChild(iSD)

idIndex++;
}





function cardCopyType1 (element){
    numid = String(element.id.match(/\d+/)) ;
    const name = document.getElementById(`h3${numid}`).innerText;
    const cardN1 = document.getElementById(`spanMA${numid}`).innerText;
    const cardN2 = document.getElementById(`spanMB${numid}`).innerText;
    const cardN3 =  document.getElementById(`spanMC${numid}`).innerText;
    const cardN4 = document.getElementById(`spanMD${numid}`).innerText;
    const cardN5 =  document.getElementById(`spanFA${numid}`).innerText;
    const cardN6 = document.getElementById(`spanFB${numid}`).innerText;
    const cardN7 = document.getElementById(`spanFC${numid}`).innerText;

    var text = `
نام و نام خانوادگی : 
    ${name}
شماره کارت  : 
    ${cardN4}${cardN3}${cardN2}${cardN1}
تاریخ انقضا :
    ${cardN7}/${cardN6}
cvv2 : 
    ${cardN5}   
    `
    var textErea = document.createElement('textarea');
    document.body.appendChild(textErea);
    textErea.value = text;
    textErea.select();
    document.execCommand('copy');
    document.body.removeChild(textErea);
}
function cardCopyType2 (element){
    numid = String(element.id.match(/\d+/)) ;
    const name = document.getElementById(`h3${numid}`).innerText;
    const cardN1 = document.getElementById(`spanMA${numid}`).innerText;
    const cardN2 = document.getElementById(`spanMB${numid}`).innerText;
    const cardN3 =  document.getElementById(`spanMC${numid}`).innerText;
    const cardN4 = document.getElementById(`spanMD${numid}`).innerText;

    var text = `
نام و نام خانوادگی : 
    ${name}
شماره کارت  : 
    ${cardN4}${cardN3}${cardN2}${cardN1} 
    `
    var textErea = document.createElement('textarea');
    document.body.appendChild(textErea);
    textErea.value = text;
    textErea.select();
    document.execCommand('copy');
    document.body.removeChild(textErea);
}
function cardDeleter(element){
    numid = String(element.id.match(/\d+/)) ;
    document.getElementById(`card${numid}`).remove()
}

function cardListOpener(){
    cardListModal.style.display = 'block'
}
function controlOpener(element){
    numid = String(element.id.match(/\d+/)) ;
    document.getElementById(`controlOpener${numid}`).classList.toggle('active')
    document.getElementById(`secS${numid}`).classList.toggle('active')
}
function cardListModalCloser(){
    cardListModal.style.display = 'none'
}


/* edit */
function openModalED(element) {
    cardListModal.style.display = 'none'
    numid = String(element.id.match(/\d+/)) ;
    saveBtnED.classList.add(`sBtnED${numid}`)
    bgModal3.style.display = 'flex'
    bankLogoED.getAttribute('src',`img${numid}`)
    formED.name.value = document.getElementById(`h3${numid}`).innerText
    formED.cardNumber[3].value = document.getElementById(`spanMA${numid}`).innerText
    formED.cardNumber[2].value = document.getElementById(`spanMB${numid}`).innerText
    formED.cardNumber[1].value = document.getElementById(`spanMC${numid}`).innerText
    formED.cardNumber[0].value = document.getElementById(`spanMD${numid}`).innerText
    formED.cardNumber[6].value = document.getElementById(`spanFA${numid}`).innerText
    formED.cardNumber[5].value = document.getElementById(`spanFB${numid}`).innerText    
    formED.cardNumber[4].value = document.getElementById(`spanFC${numid}`).innerText
} 



function cardEditor(blogoED , numid  , name , v1 , v2 , v3 ,v4 , v5 , v6 ,v7   ){
        bgModal3.style.display = 'none'
        document.getElementById(`spanMA${numid}`).innerText = v4
        document.getElementById(`spanMB${numid}`).innerText = v3
        document.getElementById(`spanMC${numid}`).innerText = v2
        document.getElementById(`spanMD${numid}`).innerText = v1
        document.getElementById(`spanFA${numid}`).innerText = v7
        document.getElementById(`spanFB${numid}`).innerText = v6
        document.getElementById(`spanFC${numid}`).innerText = v5
        document.getElementById(`img${numid}`).setAttribute('src' , blogoED)
        document.getElementById(`h3${numid}`).innerText = name
        saveBtnED.classList.remove(`sBtnED${numid}`)

}


/* toggler mode */
const switcher = document.getElementById("switcher")
const body = document.querySelector("body")
const navbar = document.querySelector(".navbar")
const maincontent = document.querySelector(".maincontent")
const btn = document.getElementById("btn_crt")
const btn2 =document.getElementById('btn_dlt')
const tooltip = document.getElementById("tooltip")
const bgModal = document.getElementById('bgModal')
const bgModal2 = document.getElementById('cardListModal')
const bgModal3 = document.getElementById('bgModalED')
const modalForm = document.getElementById('modalForm')
const modalFormED = document.getElementById('modalFormED')
const maintags =  [body,navbar,maincontent];
const input = document.querySelectorAll('input')
let themeIndex = 0 ;
function toggler_mode(){
    const card = document.querySelectorAll('.card')

    maintags.forEach(themeChanger);
    input.forEach(themeChanger2)

        function themeChanger (element){
            btn.classList.toggle('dark_mode_secondary_section');
            btn2.classList.toggle('dark_mode_secondary_section');
            tooltip.classList.toggle('dark_mode_secondary_section-r');
            bgModal.classList.toggle('dark_mode_bgModal')
            bgModal2.classList.toggle('dark_mode_bgModal')
            bgModal3.classList.toggle('dark_mode_bgModal')
            modalForm.classList.toggle('dark_mode_modal')
            modalFormED.classList.toggle('dark_mode_modal')
            document.body.classList.toggle('dark')
            element.classList.toggle('dark_mode_main_section');

        }
        function themeChanger2 (element){
            element.classList.toggle('dark_mode_input');
        }
        
    
}
