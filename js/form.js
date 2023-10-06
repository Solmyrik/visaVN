const form = document.querySelector('.popup-form__form');

form.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(e) {
  e.preventDefault();
  const name = e.target[0].value;
  const email = e.target[1].value;
  const phone = e.target[2].value;
  const country = e.target[3].value;
  const purpose = e.target[4].value;

  const citizenship = document.getElementById('citizenship');
  if (citizenship.value == 'Гражданство не РФ') {
    sorryPopup();
    return;
  }
  if (name.length > 1 && phone.length > 17) {
    let formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('country', country);
    formData.append('purpose', purpose);
    formData.append('id', getRandomInt(1000));
    let responce = await fetch('sendmail.php', {
      method: 'POST',
      body: formData,
    });
    let res = await fetch(
      `https://visavezde.bitrix24.ru/rest/3393/9ytprkahlqj4zgjg/crm.lead.add.json?FIELDS[TITLE]=Заявка-с-сайта&FIELDS[NAME]=${name}&FIELDS[PHONE][0][VALUE]=${phone}&FIELDS[EMAIL][0][VALUE]=${email}&FIELDS[UF_CRM_1695199854067]=${purpose}&FIELDS[UF_CRM_1695199813464]=${country}`,
    );
    console.log(res);
    thanksPopup();
  } else {
    alert('Введите своё имя и номер телефона');
  }
  alert('lol');

  console.log(name, email, phone, country, purpose);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const thanksBlock = document.querySelector('.thanks');
const closePop = document.querySelector('.popup-form__close');

function thanksPopup() {
  thanksBlock.style.display = 'block';
  closePop.click();
  setTimeout(() => {
    thanksBlock.style.display = 'none';
  }, 5000);
}

const sorryBlock = document.querySelector('.sorry');

function sorryPopup() {
  sorryBlock.style.display = 'block';
  closePop.click();
  setTimeout(() => {
    sorryBlock.style.display = 'none';
  }, 5000);
}
