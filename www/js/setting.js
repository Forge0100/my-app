$(function() {
	// Функция для очистки ответов на вопросы
	clear_question = function() {
		// Узнаем количество ответов которые у нас сохранены в куках
		for(var i=0; i<=data.length;i++)
			// Очистить текущий кук
			// $.removeCookie('r' + i);
			window.localStorage.removeItem('r' + i);
	}

	// Событие по нажитию кнопки "Выйти из учетки"
	$('#exit').click(function() {
		// Удаляем Фамилию из куков
		// $.removeCookie('surname');
		window.localStorage.removeItem("surname");
		// Удаляем Табельный номер из куков
		// $.removeCookie('tid');
		window.localStorage.removeItem("tid");
		// Очищаем ответы на вопросы
		clear_question();
		// Переходим на страницу Регистрации
		location = 'register.html';
	});

	// Событие по нажатию кнопки "Очистить результат тестов"
	$('#delete').click(function() {
		// Очищаем ответы на вопросы
		clear_question();
	});
});