export default class Card {
    constructor(cardElement){
        this._element = cardElement;
        this._likeButton = this._element.querySelector('.card__button-like');
        this._removeCard = this._element.querySelector('.card__button-remove');
        this._isLiked = false;

        this._setEventListeners();
    };
    _setEventListeners() {
        this._likeButton.addEventListener( 'click', ()=>{
            this._handleLike();
        });
        this._removeCard.addEventListener('click', ()=>{
            this._element.remove();
            this._element = null;
        })
    };

    _handleLike(){
        this._isLiked = !this._isLiked;
        this._likeButton.classList.toggle(
            'card__button-like_is-liked',this._isLiked
        )
    }
}