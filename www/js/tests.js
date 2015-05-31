$(function() {
	// id главного блока, где размещаються все поля вопросов
	var block_id = '#question';

	// Счетчик кликов на кнопку, для фиксации номера вопроса
	var c;

	// Функция добавляющая значения из переменной data в поля формы для ответа
	questions = function() {
		// Присваивание текста из переменной data в поле формы в div с индексом question и с тегом h3
		$(block_id + ' h3').text(data[c][0]);

		// Присваивает всем вариантам ответа значения из переменной data которые находяться
		// в div с индексом question и label с for="radio[номер_ответа]" 
		for(var i=0;i<=data[c][1].length;i++)
			$(block_id + ' label[for="radio-'+ i +'"]').text(data[c][1][i]);
	}

	// Функция для очистки всех добавленых куков
	clear_cookie = function() {
		for(var i=0;i<=data.length;i++)
			// Удаление текущего кука
			// $.removeCookie('r'+i);
			window.localStorage.removeItem('r' + i);
	}

	// Функция очищающая все поля label в вариантах ответов
	clear_fields = function() {
		for(var i=0;i<=data[c][1].length+1;i++)
			// Очистка текущего label
			$(block_id + ' label[for="radio-'+ i +'"]').text('');
	}

	// Функция отслеживает поля label на наличие или отсутствие текста,
	// в случае отсутствия скрывает вариант ответа,
	// а в случае наличия показывает вариант ответа
	controle_radio = function() {
		for(var i=0;i<=data[c][1].length+1;i++)
		{
				// Переменная всех label значений в вопросе
			var label 		= block_id + ' label[for="radio-'+ i +'"]',
				// Переменная всех radio в вопросе
				radio_input = block_id + ' input[id="radio-'+ i +'"]';

			// Проверка на не отсутствие текста в label
			if($(label).text() !== ''){
				// Показать текущий label
				$(label).show();
			} else{
				// Скрыть текущий radio
				$(radio_input).hide();
				// Скрыть текйщий label
				$(label).hide();
			}
		}
	}

	// Функция для отслеживания наличия ссылки на изображение в массиве data
	controle_image = function() {
		var selector = block_id + ' #img-';

		for(var i=0;i<=data[c][2].length+1;i++)
			// Проверка на то что в массиве data присутствует ссылка на нашу картинку
			if(data[c][2][i] != null)
				// Добавляет ссылку к тегу картинки и показывает его
				$(selector + i).attr('src', 'img/' + data[c][2][i]).show();
			else
				// Удаляет содержимое ссылки в теге картинки и скрывает его
				$(selector + i).attr('src', '').hide();
	}

	// Функция для подтверждения на перепрохождение теста
	confirm_test = function() {
		// Проверка на не существование первого ответа на вопрос в куках
		// "Все не проверяю, так-как смысла нету... если одного нету,
		// то и всех остальных автоматически"
		if(/*$.cookie('r0')*/window.localStorage.getItem("r0") == null)
			// Прерывание выполнения дальнейших действий этой функции
			return;

		// Подтверждение на перепрохождение теста
		if(confirm("Вы действительно хотите перепройти тест?"))
			// Очистить куки ответов
			clear_cookie();
		else
			// Перенаправить нас на страницу Результатов
			location = 'result.html';
	}

	// restore_postition_radio = function() {
	// 	if($('input[id="radio-0"]:checked').length == 0) {

	// 		$('input[type="radio"]').attr('checked', false).checkboxradio("refresh");

	// 		$('input[id="radio-0"]').attr('checked', true).checkboxradio("refresh");

	// 		console.log('Не на первой позиции');
	// 	} else {
	// 		console.log('На первой позиции');
	// 	}
	// }

	// Функция обновления (содержимое обновляеться каждый раз при нажатии кнопки Далее)
	update = function() {
		// Переменная которая принимает выбраный пользователем вариант ответа
		var result = $(block_id + ' input[name=radio]:checked').val();

		// Добавляет в куки значение варианта ответа с именем r[текущий вопрос]
		// $.cookie('r'+c, result);
		window.localStorage.setItem('r'+c, result);

		// Прибавляет одиницу для перехода на следующий вопрос
		c++;

		// Очистить поля после обновления и перехода на следующий вопрос
		clear_fields();

		// Отслеживание наличия картинки, для того чтобы в момент отсутствия скрывать ее,
		// а в момент наличия показывать
		controle_image();

		// Обновляет переменные вопросов на текущей странице
		questions();

		// Проверка на наличие или отсутствие текста в вариантах ответов
		controle_radio();

		// restore_postition_radio();
	}

	// Функиця инициализации (содержимое включаеться в начале и после уже не обновляеться)
	init = function() {
		// Присвоение счетчику первого нажатия
		c = 0;

		// Функция для подтверждения на перепрохождение теста
		confirm_test();

		// Проверка наличия картинки, для того чтобы в момент отсутствия скрывать ее,
		// а в момент наличия показывать
		controle_image();

		// Обновляет переменные вопросов на текущей странице
		questions();

		// Проверка на наличие или отсутствие текста в вариантах ответов
		controle_radio();
	}

	// Событие которое происходит по нажатию кнопки
	$('button').click(function() {
		// Проверка на то, что мы не перевысили лимит вопросов
		// которые у нас существуют в переменной data
		if(c < data.length){
			// Инициализация
			update();
			console.log(c);
			if(c == data.length)
				$(block_id).hide();
		} else {
			// Переадресация на страницу с выводом результатов
			location = 'result.html';
			// $(block_id).append('<a href="result.html" rel="external">Multi-page link</a>');
		}
	});

	// Инициализация скрипта (Запуск)
	init();

});