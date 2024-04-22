import View from './View';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _errorMessage = 'No recipes found. Please try another query!';

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', e => {
      console.log('Hey');
      const btn = e.target.closest('.btn--inline');
    });
    console.log('btn', btn);
    // const goToPage = btn.dataset.goto;
    // console.log('gotopage', goToPage);
    handler();
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const pageTotal = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log('pageTotal', pageTotal);
    // Page 1 + no other pages
    // Page 1 + other pages
    // Last page
    // Other pages
    if (currentPage === 1 && pageTotal > 1) {
      return `<button data-goto="${
        currentPage + 1
      }" class="btn--inline pagination__btn--next">
      <span>Page ${currentPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
    }
    if (currentPage === pageTotal && pageTotal) {
      return `<button data-goto="${
        currentPage - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href=${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${currentPage - 1}</span>
    </button>`;
    }
    if (1 < currentPage < pageTotal) {
      return `<button data-goto="${
        currentPage - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${currentPage - 1}</span>
    </button>
    <button data-goto="${
      currentPage + 1
    }" class="btn--inline pagination__btn--next">
      <span>Page ${currentPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
    }
    return '';
  }
}

export default new PaginationView();
