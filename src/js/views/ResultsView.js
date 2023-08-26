import View from './View';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _generateMarkup() {
    return this._data
      .map(
        r => `<li class="preview">
    <a class="preview__link preview__link--active" href="#${r.id}">
      <figure class="preview__fig">
        <img src="${r.image}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${r.title}</h4>
        <p class="preview__publisher">${r.publisher}</p>
        <div class="preview__user-generated">
          <svg>
            <use href="src/img/icons.svg#icon-user"></use>
          </svg>
        </div>
      </div>
    </a>
  </li>`
      )
      .join('');
  }
}

export default new ResultsView();
