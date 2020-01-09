$(document).ready(function(){
    
    // Т.к. это задание на WEB 10, а нужно еще сделать WEB 12, то весь
    // код закомментирован, дабы избежать конфликта
    
    /*
    
    // ### Работа с формой, AJAX запрос серверу с помощью XMLHttpRequest ###
    // 1. параметр FormID = "myform",
    // id тэга <form> для нужной нам формы
    // 2. параметр Submit Button ID = "myform-sumbit",
    // id кнопки отправки нужной формы
    // 3. параметр Method, не менять!
    // Вызываем AJAX функцию с нашими параметрами формы
    AJAXform("myform", "myform-sumbit", "post");
    AJAXform("modal-myform", "modal-myform-sumbit", "post");

    // Сама функция, которую мы вызываем
    function AJAXform(formID, buttonID, formMethod = "post") {
        // Находим форму по ID.
        var selectForm = document.getElementById(formID);
        // Находим кнопку формы по ID.
        var selectButton = document.getElementById(buttonID);
        // Получаем ссылку на formcarry из action.
        var formAction = document.getElementById(formID).getAttribute("action");
        // Получем данные из input-ов формы.
        var formInputs = document.getElementById(formID).querySelectorAll("input");
        // Получаем данные из textarea формы.
        var formTextAreas = document.getElementById(formID).querySelectorAll("textarea");

        // Функция для отправки данных на сервер
        function XMLhttp() {

            // Создаем пустой запрос
            var httpRequest = new XMLHttpRequest();
            // Создаем объект данных формы
            var formData = new FormData();

            // Заполняем объект данных формы
            for (var i = 0; i < formInputs.length; i++) {
                // Добавляем все инпуты в formData().
                formData.append(formInputs[i].name, formInputs[i].value);
            }
            for (var i = 0; i < formTextAreas.length; i++) {
                // Добавляем все textareas в formData().
                formData.append(formTextAreas[i].name, formTextAreas[i].value);
            }

            // Формируем запрос
            httpRequest.open(formMethod, formAction);
            // Устанавливаем заголовок для получения в ответ JSON файла
            httpRequest.setRequestHeader("Accept", "application/json");
            // Отправляем запрос
            httpRequest.send(formData);
            // Получаем ответ
            httpRequest.onreadystatechange = function () {
                // Когда post прошел успешно
                if (this.readyState == 4 && this.status == 200) {
                    // получить объект ответа
                    var response = JSON.parse(this.response);
                    
                    if(!$("#modal").hasClass("dn")) history.back();
                    alert("Успешно отправлено!");
                    
                    console.log(response);
                    console.log(this);

                }
            };
        }

        // При нажатии на кнопку
        selectButton.onclick = function () {
            // Вызываем функцию, прописанную выше, для отправки данных на сервер
            XMLhttp();
            // Очищаем LocaleStorage
            localStorage.clear();
        }

        // Запрещаем обновление страницы
        selectForm.onsubmit = function () {
            return false;
        }
    }
    
    */
    
});