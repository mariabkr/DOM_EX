let quantities = [0, 0, 0]; // Les quantites des articles 
const prices = [200, 400, 140]; //les prix


function increaseQuantity(index) {
    quantities[index]++;
    updateTotal();
}


function decreaseQuantity(index) {
    if (quantities[index] > 1) {
        quantities[index]--;
        updateTotal();
    }
}

function toggleLike(index) {
    const likeBtn = document.querySelectorAll('.like-btn')[index];
    likeBtn.classList.toggle('liked');
}


// update total price
function updateTotal() {
    let total = 0;
    for (let i = 0; i < quantities.length; i++) {
        total += quantities[i] * prices[i];
    }
    document.getElementById('total-price').innerHTML = total;
}
