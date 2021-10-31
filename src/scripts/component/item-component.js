class ItemElement extends HTMLElement {
  set food(food) {
    this._food = food;
    this.render();
  }

  render() {
    this.innerHTML = `
        <img class="img_item" src="${this._food.pictureId}" alt="Restaurant ${this._food.name}">
            <p class="rating_item">${this._food.rating} <span><i class="fas fa-star"></i></span></p>
            <div class="item_body">
                <h4 class="item_title">${this._food.name}</h4>
                <p class="item_city">Kota ${this._food.city}</p>
                <p class="item_description">${this._food.description}</p>
            </div>
        `;
  }
}

customElements.define('item-element', ItemElement);
