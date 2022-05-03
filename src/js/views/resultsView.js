import View from './view.js';
import previewView from './previewView.js';
//import icons from '../img/icons.svg' //Parcel 1.x
import icons from 'url:../../img/icons.svg'; //Parcel 2.x

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `No recipes found. Please try another :)`;
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
