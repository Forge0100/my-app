$(function() {
	// Событие по нажитию на кнопку Вход
	$('button').click(function() {
			// Достает из куков Фамилию
		var surname = $('#surname').val(),
			// Достает из куков Табельный номер
			tid 	= $('#tid').val();

		// Проверка на то, что Фамилия и Табельный номер не пустые
		if((surname != null) && (tid != null)) {
			// Добавление переданой в тектовом поле Фамилии 
			window.localStorage.setItem("surname", surname);
			// Добавление переданой в тектовом поле Табельного номера
			window.localStorage.setItem("tid", tid);
			
			// Перенаправление на главную страницу
			location = 'main.html';
		}
	});
});