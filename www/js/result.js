$(function() {
	// id главного блока, где размещаються все ответы
	var block_id = '#result';

	// Функция генерации списка ответов
	result = function() {
			// Список вопросов и соответствующей рекомендации на её
		var list = '',
			// Блок в который помещается список
			block = '';

		// Проверка первого варианта ответа на пустоту
		if(window.localStorage.getItem("r0") == null){
			// Сообщение которое выводится в случае отсутствия ответов в куках
			$(block_id).html('<h3 align="center">Результаты теста отсутствуют</h3>');
			// Прерывание дальнейшего выполнения этой функции
			return;
		}

		// Проходимся по всем записям из массива data и выводим их в сгенерированые блоки
		for(var i=0;i<data.length;i++) {
			var res = window.localStorage.getItem('r' + i);

			// Списки ответов
			list += '<li style="margin: 10px;">'+
						'<h3 style="white-space: normal;">'+ data[i][0] +'</h3>'+
						'<p style="white-space: normal;">'+ data[i][3][res] +'</p>'
					'</li>';  
		}

		// Общий блок в который помещается списки ответов
	    block += 	'<h3>Результат</h3>'+
		    		'<ol data-role="listview">'+
					    list+
					'</ol>';

		// Вывод сгенерированого блока в тег с id result
		$(block_id).html(block);
	}

	// Функция инициализации
	init = function() {
		// Вызов функции генерации списка ответов
		result();
		// Переобразование и добавление стилей к списку
		$('[data-role="listview"]').listview().listview('refresh');
		// $(block_id).trigger("create");
	}

	// Вызов функции инициализации
	init();
});