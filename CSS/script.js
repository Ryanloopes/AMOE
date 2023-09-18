var amoepoints = 0;

// Função para atualizar o total de moedas na tela
function updateCoinCount() {
    var coinCountElement = document.getElementById('coinCount');
    coinCountElement.textContent = amoepoints;
}

// Função para ganhar 1 amoepoint por clique no logista
var logistaElement = document.querySelector('.perfil');
logistaElement.addEventListener('click', function () {
    amoepoints += 1; // Ganhe 1 amoepoint por clique
    updateCoinCount();
});

// Função para comprar um item
function buyItem(itemName, itemPrice) {
    if (amoepoints >= itemPrice) {
        amoepoints -= itemPrice;
        updateCoinCount();

        // Personalizar o link de e-mail com o título da mercadoria
        var emailSubject = 'Compra de ' + itemName;
        var emailRecipient = 'ryanloopes25@gmail.com'; // Substitua pelo seu endereço de e-mail
        var emailBody = 'Olá, gostaria de confirmar a compra do item: ' + itemName;

        var emailLink = 'mailto:' + emailRecipient + '?subject=' + encodeURIComponent(emailSubject) + '&body=' + encodeURIComponent(emailBody);
        var emailElement = document.createElement('a');
        emailElement.setAttribute('href', emailLink);
        emailElement.style.display = 'none';
        document.body.appendChild(emailElement);

        // Clicar automaticamente no link para abrir o cliente de e-mail
        emailElement.click();
        document.body.removeChild(emailElement);

        // Mostrar modal de sucesso de compra
        showSuccessModal();
    } else {
        // Mostrar modal de "Saldo Insuficiente"
        var modal = document.getElementById('insufficientModal');
        modal.style.display = 'block';
        setTimeout(function () {
            modal.style.display = 'none';
        }, 2000); // Ocultar o modal após 2 segundos
    }
}

// Função para mostrar o modal de sucesso de compra
function showSuccessModal() {
    var successModal = document.getElementById('successModal');
    successModal.style.display = 'block';
    setTimeout(function () {
        successModal.style.display = 'none';
    }, 2000); // Ocultar o modal após 2 segundos
}
