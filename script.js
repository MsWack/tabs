window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    //ПЕРЕКЛЮЧЕНИЕ ТАБОВ (ВКЛАДОК)
    //получаем сами табы (кнопки)
    let tab = document.querySelectorAll(".info-header-tab"),
        //получаем родительский элемент табов
        info = document.querySelector(".info-header"),
        //получаем контент, который должен отображаться при нажатии на табы
        tabContent = document.querySelectorAll(".info-tabcontent");

    //функция, сркывающая весь контент, соответствующий табам
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }
    //аргументу a задаем значение = 1, чтобы при обнолении страницы контент, соответствубщий первому табу, показывался на странице
    hideTabContent(1);

    //функция, показывающая весь контент, соответствующий табам
    function showTabContent(b) {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        }
    }

    info.addEventListener("click", function (event) {
        let target = event.target;
        //если при клике нажали на элемент с классом info-header-tab..
        if (target && target.classList.contains("info-header-tab")) {
            //..создаем цикл, который нужен для того, чтобы определить соответствие табов опреденному контенту
            for (let i = 0; i < tab.length; i++) {
                //если нажали на таб с соответствубщим индексом..
                if (target == tab[i]) {
                    //..то скрываем весь контент..
                    hideTabContent(0);
                    //.. и показываем только тот, который соответствует индексу таба
                    showTabContent(i);
                    break;
                }
            }
        }
    });
	
});
