const htmlElement = document.querySelector('html');
const popupOverlay = document.querySelector('.popup-overlay');
const pageBody = document.querySelector('body');

if (popupOverlay) {
  const loginPopup = popupOverlay.querySelector('.popup--login');
  const recoveryPopup = popupOverlay.querySelector('.popup--recovery');
  const recoveryBackButton = recoveryPopup.querySelector('#recovery-back-button');
  const forgotPasswordButton = popupOverlay.querySelector('.forgot');
  const popups = popupOverlay.querySelectorAll('.popup');
  
  const clearPopups = () => {
    popups.forEach((popup) => {
      popup.classList.remove('popup--show');
    });
  };
  
  const openPopup = () => {
    clearPopups();
    //htmlElement.classList.add('popup-show');
  };
  
  const closePopup = () => {
    clearPopups();
    htmlElement.classList.remove('popup--show');
  };

  const onRecoveryBackButtonClick = () => {
    recoveryPopup.classList.remove('popup--show');
    loginPopup.style.display = 'block';
    pageBody.style.height = 'auto';
  };
  
  const openRecoveryPopup = () => {
    loginPopup.style.display = 'none';
    recoveryPopup.classList.add('popup--show');
    pageBody.style.height = '100vh';
  };
  
  const onOpenRecoveryPopupButtonClick = () => {
    openPopup();
    openRecoveryPopup();
  };

  if (recoveryBackButton) {
    recoveryBackButton.addEventListener('click', onRecoveryBackButtonClick);
  }
  
  if (forgotPasswordButton) {
    forgotPasswordButton.addEventListener('click', onOpenRecoveryPopupButtonClick);
  }
  
}
