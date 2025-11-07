let basketCount = 0;
function addToBasket(){
  basketCount++;
  document.querySelectorAll("#basketCount").forEach(span => {
    span.textContent = basketCount;
  });
}
