const tbody = document.getElementById('tbody');
function sendMessage() {

  let id = document.forms['message-form']['id'].value;
  let name = document.forms['message-form']['name'].value;
  let email = document.forms['message-form']['email'].value;
  let subject = document.forms['message-form']['subject'].value;
  let comment = document.forms['message-form']['comment'].value;

  // document.getElementById('name').innerText = name;
  // document.getElementById('email').innerText = email;
  // document.getElementById('subject').innerText = subject;
  // document.getElementById('comment').innerText = comment;



  // let jumlah = document.getElementsByTagName('tr').length;
  // // create element html
  // let tr = document.createElement('tr');
  // let tdName = document.createElement('td');
  // let tdEmail = document.createElement('td');
  // let tdSubject = document.createElement('td');
  // let tdComment = document.createElement('td');
  // let tdNomor = document.createElement('td');

  // tdNomor.innerText = jumlah + '.';
  // tdName.innerText = name;
  // tdEmail.innerText = email;
  // tdSubject.innerText = subject;
  // tdComment.innerText = comment;

  // tr.append(tdNomor, tdName, tdEmail, tdSubject, tdComment);
  // tbody.appendChild(tr);



  // local storage
  // current data -> menambahkan data dari form ke object
  let dataObject = {
    id: id,
    name: name,
    email: email,
    subject: subject,
    comment, comment
  }
  

  // add new data
  // menampilkan data pada localStorage dengan getItem()
  let updateData = JSON.parse(localStorage.getItem('datas'));

  // cek apakah data sudah ada atau belum? jika masih awal belum ada maka buat array kosong
  if(!updateData) {
    updateData = [];
  }

  // jika sudah ada array atau data maka tinggal menambahkan data baru dengan push()
  updateData.push(dataObject);

  // menyimpan data dengan setItem()
  localStorage.setItem('datas', JSON.stringify(updateData));

}


// buat data user array of object dari localStorage
let dataUser = JSON.parse(localStorage.getItem('datas'));
// console.log(dataUser);

// looping data user
for( let i = 0; i < dataUser.length; i++ ) {
  // console.log(dataUser[i].name);

  let jumlah = document.getElementsByTagName('tr').length;
  // create element html
  let tr = document.createElement('tr');
  let tdID = document.createElement('td');
  let tdName = document.createElement('td');
  let tdEmail = document.createElement('td');
  let tdSubject = document.createElement('td');
  let tdComment = document.createElement('td');
  let tdNomor = document.createElement('td');

  let tdButton = document.createElement('td');
  let button = document.createElement('button');

  // input data ke element html yg telah dibuat
  tdNomor.innerText = jumlah + '.';
  tdID.innerText = dataUser[i].id;
  tdName.innerText = dataUser[i].name;
  tdEmail.innerText = dataUser[i].email;
  tdSubject.innerText = dataUser[i].subject;
  tdComment.innerText = dataUser[i].comment;

  button.innerText = 'Delete';
  tdButton.appendChild(button);

  // memasukan element html yg ada value-nya ke tag parent nya
  tr.append(tdNomor, tdID, tdName, tdEmail, tdSubject, tdComment, tdButton);
  tbody.appendChild(tr);

}




let btn = document.querySelectorAll('table button');
for( let j = 0; j < btn.length; j++ ) {
  // console.log(btn[j]);

  btn[j].addEventListener('click', function() {
    // console.log('ok ' + j);

    // let btnIniLocalStorage = dataUser[j].id;
    // console.log(btnIniLocalStorage);

    // let aa = localStorage.removeItem('datas', btnIniLocalStorage);
    // console.log(aa);
    // localStorage.removeItem(btnIniLocalStorage);



    let btnIni = btn[j].parentElement.parentElement;
    btnIni.remove();

    // let index

    // dataUser.splice(1,1)
    localStorage.setItem('datas', JSON.stringify(dataUser));

    // localStorage.removeItem("datas");

  });
}
