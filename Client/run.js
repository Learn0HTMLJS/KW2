const Dialog = document.getElementById('ModalDialog');
const Background = document.getElementById('Background');
const Button = document.getElementById('button');
const CloseButton = document.getElementById('CloseButton');
const Row = document.getElementById('flBtn');
const Submit = document.getElementById('BtnSb');
const Name = document.getElementById('InputName');
const Level = document.getElementById('InputLevel');
const Date = document.getElementById('InputDate');
const Radio = document.getElementsByClassName('form-check-input');
Dialog.addEventListener('click', NoUp);
Button.addEventListener('click', ShowModal);
CloseButton.addEventListener('click', CloseModal);
Background.addEventListener('click', CloseModal);
Submit.addEventListener('click', BlockSubmit);
//Name.addEventListener('blur', NameValidate);
//EMAIL.addEventListener('blur', EmailValidation);
for(let i = 0; i < Radio.length; i++)
{
    Radio[i].addEventListener('click', NewRadio);
}
//Radio.addEventListener('click', ()=>{console.log('dgddd')});

//Dialog.style.opacity = '0';
//Dialog.style.visibility = 'hidden';
Dialog.style.background = 'white';
Dialog.style.width = '60%';
//Dialog.style.position = 'fixed';
Dialog.style.top = '100px';
Dialog.style.left = '20%';

Background.style.opacity = '0';
Background.style.visibility = 'hidden';

Background.style.background = 'rgba(0, 0, 0, 0.3)';
Background.style.width = '100%';
Background.style.height = '100%';

//Background.style.position = 'fixed';
Background.style.top = '0px';
Background.style.left = '0px';

Row.style.display = 'flex';
Row.style.flexDirection = 'row-reverse';

CloseModal();

function ShowModal()
{
//    Dialog.style.opacity = '1';
//    Dialog.style.visibility = 'visible';

    Background.style.opacity = '1';
    Background.style.visibility = 'visible';
/*    Background.style.background = 'rgba(0, 0, 0, 0.3)';
    Background.style.width = '100%';
    Background.style.height = '100%';*/

    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}

function CloseModal()
{
//    Dialog.style.opacity = '0';
//    Dialog.style.visibility = 'hidden';
    Background.style.opacity = '0';
    Background.style.visibility = 'hidden';
    document.getElementsByTagName('body')[0].style.overflow = 'visible';

    //Event.stopPropagation();
}

function NoUp(Event)
{
    Event.stopPropagation();
}

function Send(Event)
{
    Event.preventDefault();
    let radioc;
    for(let i = 0; i < Radio.length; i++)
    {
        if(Radio[i].checked)
        {
            radioc = Radio[i];
            break;            
        }
    }
    let formData = new FormData();
    formData.append('Type', radioc.value);
    formData.append('Date', Date.value);
    formData.append('Name', Name.value);
    formData.append('Level', Level.value);
    console.log(formData);
    let header = new Headers();
    let dt =
    {
        'Type': radioc.value,
        'Date': Date.value,
        'Name': Name.value,
        'Level': Level.value  
    }

    header.append('Content-Type1', 'application/json1');
    fetch('http://localhost:5500', {
        method: 'POST',
        headers: {'Content-Type1': 'application/json1'},
        body: JSON.stringify(dt)
    })
    .then((res) => console.log(res))
    .catch((err) => {
        console.log(err);
        alert('Ошибкааааааааааааааа!');
    });
    CloseModal();
}


function BlockSubmit(Event)
{
    Event.preventDefault();
    if(!Date)
    {
        alert('err');
        return;
    }
    //console.table(document.getElementById('SUBMITION'));
    //Parsing();
    Send(Event);
    CloseModal();
    Event.stopPropagation();
}


/*function Parsing()
{
    let Sobj = {
        name: "",
        mail: "",
        value: -1
    };
    Sobj.name = Name.value;
    Sobj.mail = EMAIL.value;
    for(let i = 0; i < Radio.length; i++)
    {
        if(Radio[i].checked)
        Sobj.value = i;
    }
    console.table(Sobj);
}*/

function NewRadio()
{
    console.log('aaaaaaaaaaaaaaa');
    for(let i = 0; i < Radio.length; i++)
    {
        Radio[i].checked = false;
    }
    this.checked = true;
}