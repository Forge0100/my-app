$(function() {
	// id главного блока, где размещаються все ответы
	var block_id = '#result';


	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


	// Инициализация переменной, что будет принимать ответ обработки среднего арефметического функции generate_answer()
	var gen_res;
	
	// Генерация соответствующего ответа
	generate_answer = function(answ1, answ2, answ3) {
		// Инициализация переменной средней оценки пройденого теста
		var r;
		// Сумма всех ответов по психологии
		var s = 0;

		// Суммируем все ответы
		for(var i=start_position;i<=end_position;i++) 
			s +=  parseInt(window.localStorage.getItem('r' + i));

		// Возращаем среднее арефметическое которое округляеться до большего если остаток 4 и более
		r = Math.round(s / ((end_position - start_position) + 1));

		// Если большинство ответов 0 то...
		if(r == 0) return answ1;
		// Если большинство ответов 1 то...
		else if(r == 1) return answ2;
		// Если большинство ответов 3 то...
		else if(r == 2) return answ3;
	}

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

			// Проверка на то что ответ для данного вопроса существует в массиве data
			if(data[i][3][res] != null) {
				// Списки ответов
				list += '<li style="margin: 10px;">'+
							'<h3 style="white-space: normal;">'+ data[i][0] +'</h3>'+
							'<p style="white-space: normal;">'+ data[i][3][res] +'</p>'
						'</li>';  
			}
		}

		// Генерация второго блока
		list_2 = '<li style="margin: 10px;">'+
					'<h3 style="white-space: normal;">Среднее психологическое состояние</h3>'+
					'<p style="white-space: normal;">'+ gen_res +'</p>'
				'</li>';  

		// Общий блок в который помещается списки ответов
	    block += 	'<h3>Результат</h3>'+
		    		'<ol data-role="listview">'+
					    list+
						list_2+
					'</ol>';

		// Вывод сгенерированого блока в тег с id result
		$(block_id).html(block);
	}

	// Функция инициализации
	init = function() {
		// Присвоение функции генерации ответа на Психологический тест в переменную gen_res
		gen_res = generate_answer(a_1, a_2, a_3);
		// Вызов функции генерации списка ответов
		result();
		// Переобразование и добавление стилей к списку
		$('[data-role="listview"]').listview().listview('refresh');
		// $(block_id).trigger("create");
	}

	// Вызов функции инициализации
	init();
});