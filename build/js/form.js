"use strict";!function(){window.form={};var t=document.querySelector("#firstName"),e=document.querySelector(".review__submit"),o=document.querySelector(".form__review"),i=document.querySelector(".visitedPlaces"),d=o.querySelectorAll("fieldset");t.addEventListener("invalid",function(e){t.validity.tooShort?t.setCustomValidity("Имя должно состоять минимум из 2-х символов"):t.validity.tooLong?t.setCustomValidity("Имя не должно превышать 25-ти символов"):t.validity.valueMissing?t.setCustomValidity("Обязательное поле"):t.setCustomValidity("")});e.addEventListener("click",function(){var e=document.querySelectorAll('input[type="checkbox"]:checked');console.log("I work"),0===e.length?i.setCustomValidity("Укажите, пожалуйста, посещенные достопримечателености"):i.setCustomValidity(""),o.checkValidity()&&(window.backend.upload(new FormData(o),window.backend.onSuccessUpLoad),d.forEach(function(e){e.value=""}),formAdElement.reset(),window.form.setAddress(window.map.getCoordinateX(),window.map.getCoordinateY()))})}();