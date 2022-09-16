function Like(x,y){
    x.classList.toggle('Off');
    y.classList.toggle('Off');
}

function alterUser(){
    let userName = document.getElementById('userName');
    let userImg = document.getElementById('userImg');

    const newUserName = prompt('Digite o novo nome de usuário');
    const newUserImg = prompt('Digite a url da nova imagem de perfil');

    userName.textContent = newUserName;
    userImg.innerHTML = `<img src="${newUserImg}" alt=""/>`;
}

function savePost(nonSaved, saved){
    nonSaved.classList.toggle('Off');
    saved.classList.toggle('Off');
}