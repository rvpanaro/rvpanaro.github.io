// Buttons
var createRegisterButton = document.getElementById('createRegisterButton');

// Inputs
var nameInput = document.getElementById('nameInput');
var emailInput = document.getElementById('emailInput');

// Displays
var displayName = document.getElementById('displayName');

// Ao clicar no botão
createRegisterButton.addEventListener('click', function () {
    create(nameInput.value, emailInput.value);
});

// Função para validar e-mail
function emailIsValid (email) {
  return /\S+@\S+\.\S+/.test(email);
}

// Função para criar um registro no Firebase
function create(name, email) {
    if (name === "" ) {
    alert("O campo Nome é obrigatório!");
    return false;
  }
    if (email === "") {
    alert("O campo E-mail é obrigatório!");
    return false;
  } 
  if(!emailIsValid(email)){
       alert("E-mail inválido!");
       return false;
  }
  // Função que tenta criar um novo registro somente se o email não está cadastrado.
//  var fb = new Firebase('https://console.firebase.google.com/u/1/project/rn00bs2019/database/data');
  
  var data = {
        name: name,
        email: email
  };

     displayName.innerText = "Bem-vind@ " + nameInput.value + "!!!\nEntraremos em contato em breve.";
     alert("Cadastro realizado com sucesso!");
    
  //  return claimEmail(name, email,firebase.database().ref().child('users').push(data));
  return firebase.database().ref().child('users').push(data);
}

//function escapeEmail(email) {
//   return email.replace('.', ',');
//}

//function claimEmail(name, email, next) {
//   fb.child('users').child(escapeEmail(email)).set(name, //function(err) {
//      if( err ) { alert('email already taken'); }
//      next();
//   });
//}

firebase.database().ref('users').on('value', function (snapshot) {
    usersList.innerHTML = '';
    snapshot.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().name + ': ' + item.val().age));
        usersList.appendChild(li);
    });
});