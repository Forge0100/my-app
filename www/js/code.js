$(function() {
		// Достаем с куков Фамилию
	var surname = $.cookie('surname'),
		// Достаем с куков Табельный номер
		tid		= $.cookie('tid');

	// Функция проверки и перенаправлений
	redirect = function() {
		// Проверка на отсутствие куков Фамилии и Табельного номера, а также что сейчас не находимся на странице Регистрации
		if((surname == null) && (tid == null) && location.pathname != '/register.html') {
			// Перенаправление на страницу Регистрации
			location = 'register.html';
		// Проверка на то, что куки Фамилии и Табельного номера у нас не пустые,
		// а также что мы находимся на странице Регистрации
		} else if((surname != null) && (tid != null) && location.pathname == '/register.html') {
			// Перенаправление на страницу тестов
			location = 'index.html';
		}
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
			if($.cookie('r' + i) == null)
				a = true;

		if(a)
			for(var i=0;i<=data.length;i++)
				// Удаление текущего кука
				$.removeCookie('r'+i);

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