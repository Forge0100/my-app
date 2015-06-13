$(function() {
	// Функция для очистки ответов на вопросы
	clear_question = function() {
		// Узнаем количество ответов которые у нас сохранены в куках
		for(var i=0; i<=data.length;i++)
			// Очистить текущий localstorage
			window.localStorage.removeItem('r' + i);
	}

	// Событие по нажитию кнопки "Выйти из учетки"
	$('#exit').click(function() {
		// Удаляем Фамилию из localstorage
		window.localStorage.removeItem("surname");
		// Удаляем Табельный номер из localstorage
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

	
	$('#server').click(function() {
		// Проверка на прохождение теста
		var check_test = window.localStorage.getItem("r0");

		// Переменная всех ответов на вопросы
		var all_test = '';

		// Проходимся по всем записям и добавляем в переменную all_test
		for(var i=0; i<data.length;i++)
				all_test += String(window.localStorage.getItem('r' + i));

		// Проверка на то, что мы выполнили тесты
		if(check_test) {
			// Отправляем GET запрос на сайт http://jquery-mobile-app.zz.mu/index.php
			$.get(
			  "http://jquery-mobile-app.zz.mu/index.php",
			  // Передаем данные на ету страницу
			  {
			    surname: window.localStorage.getItem("surname"),
			    tid: window.localStorage.getItem("tid"),
			    all_test: all_test
			  },
			  // Функция которая вызывается при успешной отправке, которая вовращает ответ от сервера
			  onAjaxSuccess
			);
			
			// Функция которая вызывается при успешной отправке, которая вовращает ответ от сервера
			function onAjaxSuccess(data)
			{
			  // Здесь мы получаем данные, отправленные сервером и выводим их на экран.
			  alert(data);
			}
		} else {
			alert('Вы еще не прошли тест!');
		}
	});
});