// Функция находит число, которое повторяется большее количество раз в массиве arr
find_more_reapet = function(answ0, answ1, answ2) {
	var i,j,k,l;
	for(var i=5;i<=12;i++)
	{
		var r = window.localStorage.getItem('r' + i);
		if(r == 0) i++;
		else if(r == 1) j++;
		else if(r == 2) k++;
	}

	if((i > j) && (i > k))
		l = 0;
	else if((j > i) && (j > k))
		l = 1;
	else
		l = 2;

	if(l == 0)
		return answ0;
	else if(l == 1)
		return answ1;
	else
		return answ2;
}

$(function() {
		// Достаем с localstorage Фамилию
		var surname = window.localStorage.getItem("surname"),
		// Достаем с localstorage Табельный номер
			tid = window.localStorage.getItem("tid");

	// Функция проверки и перенаправлений
	redirect = function() {
		// Проверка на то, что мы находимся на странице Регистрации
		var check_page_register = location.pathname.indexOf('register.html') + 1 ? true : false;
		// Проверка на отсутствие куков Фамилии и Табельного номера, а также что сейчас не находимся на странице Регистрации
		if((surname == null) && (tid == null) && check_page_register == false) {
			// Перенаправление на страницу Регистрации
			location = 'register.html';
		// Проверка на то, что куки Фамилии и Табельного номера у нас не пустые,
		// а также что мы находимся на странице Регистрации
		} else if((surname != null) && (tid != null) && check_page_register == true) {
			// Перенаправление на страницу тестов
			location = 'index.html';
		}

		// alert(location.pathname.indexOf('register.html') + 1 ? true : false);
		// alert(location.pathname == '/register.html');
	}

	// Функция добавляющая Фамилию и Табельный номер в подвал сайта
	footer_information = function() {
		// Проверка на то, что куки Фамилии и Табельного номера не пусты
		if((surname != null) && (tid != null))
			// Присвоение h3 тегу в подвале нашего сайта значения Фамилии ~ Табельного номера
			$('div[data-role="footer"] h3').html(surname + ' ~ ' + tid);
	}

	// Функция Очищение не законченых тестов
	clear_not_full_question = function() {
		var a = false;
		for(var i=0;i<data.length;i++)
			if(window.localStorage.getItem('r' + i) == null)
				a = true;

		if(a)
			for(var i=0;i<=data.length;i++)
				// Удаление текущего localstorage
				window.localStorage.removeItem('r'+i);

	}

	init = function() {
		// Функция проверки и перенаправлений
		redirect();
		// Функция добавляющая Фамилию и Табельный номер в подвал сайта
		footer_information();
		// Функция Очищение не законченых тестов
		clear_not_full_question();
	}

	init();

});