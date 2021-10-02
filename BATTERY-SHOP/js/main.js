$( function() {

    var tab1 	 = $('.model-white__tab_1');
    	tab2 	 = $('.model-white__tab_2');
    	content1 = $('.model-white__form_1');
    	content2 = $('.model-white__calc');	
    	li		 = $('.model-white__seria li');
    	li2		 = $('.model-white__model li');

    	$(tab1).click(function () {
    		$(this).addClass('chosen-1');
    		$(tab2).removeClass('chosen-2');
    		$(content1).removeClass('d-nones');
    		$(content2).addClass('d-nones');
    	});
    	$(tab2).click(function () {
    		$(this).addClass('chosen-2');
    		$(tab1).removeClass('chosen-1');
    		$(content2).removeClass('d-nones');
    		$(content1).addClass('d-nones');
    	});

    	$(li).click(function () {
    		$(li).removeClass('chosen');
    		$(this).addClass('chosen');
            var liIs =  $(this).html();
            $('.form__input_selected_type').val(liIs);
            console.log($('.form__input_selected_type').val())
    	});
    	$(li2).click(function () {
    		$(li2).removeClass('chosen');
    		$(this).addClass('chosen');
             var li2Is =  $(this).html();
            $('.form__input_selected_model').val(li2Is);
            console.log($('.form__input_selected_model').val())
    	});



    

    	$('.tabBtn__1').click (function () {
    		$('.tabs .model').addClass('d-nones');
    		$('.menu-link').removeClass('grey');
    		$(this).addClass('grey');
    		$('.model-white__tab_2').addClass('chosen-2');$('.model-white__tab_1').removeClass('chosen-1');$(content2).removeClass('d-nones');
    		$(content1).addClass('d-nones');
    		$('.tabs-1').removeClass('d-nones');

    	});

    	$('.tabBtn__2').click (function () {
    		$('.menu-link').removeClass('grey');
    		$(this).addClass('grey');
    		$('.model-white__tab_2').addClass('chosen-2');$('.model-white__tab_1').removeClass('chosen-1');$(content2).removeClass('d-nones');
    		$(content1).addClass('d-nones');
    		$('.tabs .model').addClass('d-nones');
    		$('.tabs-2').removeClass('d-nones');
    	});
    	$('.tabBtn__3').click (function () {
    		$('.menu-link').removeClass('grey');
    		$(this).addClass('grey');
    		$('.model-white__tab_2').addClass('chosen-2');$('.model-white__tab_1').removeClass('chosen-1');$(content2).removeClass('d-nones');
    		$(content1).addClass('d-nones');
    		$('.tabs .model').addClass('d-nones');
    		$('.tabs-3').removeClass('d-nones');
    	});
    	$('.tabBtn__4').click (function () {
    		$('.menu-link').removeClass('grey');
    		$(this).addClass('grey');
    		$('.model-white__tab_2').addClass('chosen-2');$('.model-white__tab_1').removeClass('chosen-1');$(content2).removeClass('d-nones');
    		$(content1).addClass('d-nones');
    		$('.tabs .model').addClass('d-nones');
    		$('.tabs-4').removeClass('d-nones');
    	});
    	$('.tabBtn__5').click (function () {
    		$('.menu-link').removeClass('grey');
    		$(this).addClass('grey');
    		$('.model-white__tab_2').addClass('chosen-2');$('.model-white__tab_1').removeClass('chosen-1');$(content2).removeClass('d-nones');
    		$(content1).addClass('d-nones');
    		$('.tabs .model').addClass('d-nones');
    		$('.tabs-5').removeClass('d-nones');
    	});
    	$('.tabBtn__6').click (function () {
    		$('.menu-link').removeClass('grey');
    		$(this).addClass('grey');
    		$('.model-white__tab_2').addClass('chosen-2');$('.model-white__tab_1').removeClass('chosen-1');$(content2).removeClass('d-nones');
    		$(content1).addClass('d-nones');
    		$('.tabs .model').addClass('d-nones');
    		$('.tabs-6').removeClass('d-nones');
    	});
    	$('.tabBtn__7').click (function () {
    		$('.menu-link').removeClass('grey');
    		$(this).addClass('grey');
    		$('.model-white__tab_2').addClass('chosen-2');$('.model-white__tab_1').removeClass('chosen-1');$(content2).removeClass('d-nones');
    		$(content1).addClass('d-nones');
    		$('.tabs .model').addClass('d-nones');
    		$('.tabs-7').removeClass('d-nones');
    	});
    	$('.tabBtn__8').click (function () {
    		$('.menu-link').removeClass('grey');
    		$(this).addClass('grey');
    		$('.model-white__tab_2').addClass('chosen-2');$('.model-white__tab_1').removeClass('chosen-1');$(content2).removeClass('d-nones');
    		$(content1).addClass('d-nones');
    		$('.tabs .model').addClass('d-nones');
    		$('.tabs-8').removeClass('d-nones');
    	});
    	$('.tabBtn__9').click (function () {
    		$('.menu-link').removeClass('grey');
    		$(this).addClass('grey');
    		$('.model-white__tab_2').addClass('chosen-2');$('.model-white__tab_1').removeClass('chosen-1');$(content2).removeClass('d-nones');
    		$(content1).addClass('d-nones');
    		$('.tabs .model').addClass('d-nones');
    		$('.tabs-9').removeClass('d-nones');
    	});
    	$('.tabBtn__10').click (function () {
    		$('.menu-link').removeClass('grey');
    		$(this).addClass('grey');
    		$('.model-white__tab_2').addClass('chosen-2');$('.model-white__tab_1').removeClass('chosen-1');$(content2).removeClass('d-nones');
    		$(content1).addClass('d-nones');
    		$('.tabs .model').addClass('d-nones');
    		$('.tabs-10').removeClass('d-nones');
    	});
    	$('.tabBtn__11').click (function () {
    		$('.menu-link').removeClass('grey');
    		$(this).addClass('grey');
    		$('.model-white__tab_2').addClass('chosen-2');$('.model-white__tab_1').removeClass('chosen-1');$(content2).removeClass('d-nones');
    		$(content1).addClass('d-nones');
    		$('.tabs .model').addClass('d-nones');
    		$('.tabs-11').removeClass('d-nones');
    	});
    	$('.tabBtn__12').click (function () {
    		$('.menu-link').removeClass('grey');
    		$(this).addClass('grey');
    		$('.model-white__tab_2').addClass('chosen-2');$('.model-white__tab_1').removeClass('chosen-1');$(content2).removeClass('d-nones');
    		$(content1).addClass('d-nones');
    		$('.tabs .model').addClass('d-nones');
    		$('.tabs-12').removeClass('d-nones');
    	});
    	$('.tabBtn__13').click (function () {
    		$('.menu-link').removeClass('grey');
    		$(this).addClass('grey');
    		$('.model-white__tab_2').addClass('chosen-2');$('.model-white__tab_1').removeClass('chosen-1');$(content2).removeClass('d-nones');
    		$(content1).addClass('d-nones');
    		$('.tabs .model').addClass('d-nones');
    		$('.tabs-13').removeClass('d-nones');
    	});
    	$('.tabBtn__14').click (function () {
    		$('.menu-link').removeClass('grey');
    		$(this).addClass('grey');
    		$('.model-white__tab_2').addClass('chosen-2');$('.model-white__tab_1').removeClass('chosen-1');$(content2).removeClass('d-nones');
    		$(content1).addClass('d-nones');
    		$('.tabs .model').addClass('d-nones');
    		$('.tabs-14').removeClass('d-nones');
    	});
    	$('.tabBtn__15').click (function () {
    		$('.menu-link').removeClass('grey');
    		$(this).addClass('grey');
    		$('.model-white__tab_2').addClass('chosen-2');$('.model-white__tab_1').removeClass('chosen-1');$(content2).removeClass('d-nones');
    		$(content1).addClass('d-nones');
    		$('.tabs .model').addClass('d-nones');
    		$('.tabs-15').removeClass('d-nones');
    	});
    	$('.tabBtn__16').click (function () {
    		$('.menu-link').removeClass('grey');
    		$(this).addClass('grey');
    		$('.model-white__tab_2').addClass('chosen-2');$('.model-white__tab_1').removeClass('chosen-1');$(content2).removeClass('d-nones');
    		$(content1).addClass('d-nones');
    		$('.tabs .model').addClass('d-nones');
    		$('.tabs-16').removeClass('d-nones');
    	});
    	$('.tabBtn__17').click (function () {
    		$('.menu-link').removeClass('grey');
    		$(this).addClass('grey');
    		$('.model-white__tab_2').addClass('chosen-2');$('.model-white__tab_1').removeClass('chosen-1');$(content2).removeClass('d-nones');
    		$(content1).addClass('d-nones');
    		$('.tabs .model').addClass('d-nones');
    		$('.tabs-17').removeClass('d-nones');
    	});
    	$('.tabBtn__18').click (function () {
    		$('.menu-link').removeClass('grey');
    		$(this).addClass('grey');
    		$('.model-white__tab_2').addClass('chosen-2');$('.model-white__tab_1').removeClass('chosen-1');$(content2).removeClass('d-nones');
    		$(content1).addClass('d-nones');
    		$('.tabs .model').addClass('d-nones');
    		$('.tabs-18').removeClass('d-nones');
    	});


    	$('.model-white__model-ul ul').addClass('d-nones');
		$('.model-white__model ul ul:nth-child(1)').addClass('chosen');
		$('.model-white__model-ul ul:nth-child(1)').removeClass('d-nones');




    	$('.model-white__seria ul li:nth-child(1)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(1)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(2)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(2)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(3)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(3)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(4)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(4)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(5)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(5)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(6)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(6)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(7)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(7)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(8)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(8)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(9)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(9)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(10)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(10)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(11)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(11)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(12)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(12)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(13)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(13)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(14)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(14)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(15)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(15)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(16)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(16)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(17)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(17)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(18)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(18)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(19)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(19)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(20)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(20)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(21)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(21)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(22)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(22)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(23)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(23)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(24)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(24)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(25)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(25)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(26)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(26)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(27)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(27)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(28)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(28)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(29)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(29)').removeClass('d-nones');
    	});
    	$('.model-white__seria ul li:nth-child(30)').click(function () {
    		$('.model-white__model-ul ul').addClass('d-nones');
    		$('.model-white__model-ul ul:nth-child(30)').removeClass('d-nones');
    	});

    	if ($(window).width() < 768) {
    		$('.white__tab').html('Выберите модель ноутбука')
    	} ;
    	
    	$( "#accordion" ).accordion({
	      collapsible: true
	    });

    	$('.accordion_1').click(function () {
    		$('.accordion_2 .accordion__plus span').html('+');
    		if ($('.accordion_1').hasClass('ui-accordion-header-active')) {
		    	$('.accordion_1 .accordion__plus span').html('-');
		    }else if ($('.accordion_1 .accordion__plus span').html('-')){
		    	$('.accordion_1 span span').html('+');
		    }
    	});

    	$('.accordion_2').click(function () {
    		$('.accordion_1 .accordion__plus span').html('+');
    		if ($('.accordion_2').hasClass('ui-accordion-header-active')) {
		    	$('.accordion_2 .accordion__plus span').html('-');
		    }else if ($('.accordion_2 .accordion__plus span').html('-')){
		    	$('.accordion_2 span span').html('+');
		    }
    	});


    	$('.slider').slick({
		  infinite: true,
		  slidesToShow: 2,
		  slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
          responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 650,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ]
		});
			    
        //form
            $('.form__field_name').bind('keyup blur',function(){ 
            var node = $(this);
            node.val(node.val().replace(/[^А-я ]/g,'') ); }
            );

            $(".form__input_phone").mask("+375(99) 999-99-99");

            document.querySelector(".form__input_phone").onkeypress= function(event){
                event= event || window.event;
                if (event.charCode && (event.charCode < 48 || event.charCode > 57))// проверка на event.charCode - чтобы пользователь мог нажать backspace, enter, стрелочку назад...
                return false;
            };

            document.querySelector(".form__input_phone_2").onkeypress= function(event){
                event= event || window.event;
                if (event.charCode && (event.charCode < 48 || event.charCode > 57))// проверка на event.charCode - чтобы пользователь мог нажать backspace, enter, стрелочку назад...
                return false;
            };

            $('.data-submit').click(function () {
                if ($('.form__field').val() !== '') {
                    $('.form__field').val('');
                };
            });

            $('.phone-error').html('Поле обязательно');
            //form end

            //form sending
            $('[data-submit]').on('click', function(e) {
                e.preventDefault();
                $(this).parent('form').submit();
                
            });
            

            $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Проверьте правильность заполнения."
    );

    // Функция валидации и вывода сообщений
    function valEl(el) {

        el.validate({
            rules: {
                tel: {
                    required: true,
                    regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
                },
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                tel: {
                    required: 'Поле обязательно для заполнения',
                    regex: 'Телефон может содержать символы + - ()'
                },
                name: {
                    required: 'Поле обязательно для заполнения',
                },
                email: {
                    required: 'Поле обязательно для заполнения',
                    email: 'Неверный формат E-mail'
                }
            },

            // Начинаем проверку id="" формы
            submitHandler: function(form) {
                $('#loader').fadeIn();
                var $form = $(form);
                var $formId = $(form).attr('id');
                switch ($formId) {
                    // Если у формы id="goToNewPage" - делаем:
                    case 'goToNewPage':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize(),
                            })
                            .always(function(response) {
                                //ссылка на страницу "спасибо" - редирект
                                location.href = 'https://wayup.in/lm/landing-page-marathon/success';
                                //отправка целей в Я.Метрику и Google Analytics
                                ga('send', 'event', 'masterklass7', 'register');
                                yaCounter27714603.reachGoal('lm17lead');
                            });
                        break;
                    // Если у формы id="popupResult" - делаем:
                    case 'popupResult':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize(),
                            })
                            .always(function(response) {
                                setTimeout(function() {
                                    $('#loader').fadeOut();
                                }, 800);
                                setTimeout(function() {
                                    $('#overlay').fadeIn();
                                    $form.trigger('reset');
                                    //строки для остлеживания целей в Я.Метрике и Google Analytics
                                }, 1100);
                                $('#overlay').on('click', function(e) {
                                    $(this).fadeOut();
                                });

                            });
                        break;
                }
                return false;
            }
        })
    }

    // Запускаем механизм валидации форм, если у них есть класс .js-form
    $('.js-form').each(function() {
        valEl($(this));
    });


     // Всплывающее окно

    $('.modal-btn').click(function (e) {
        e.preventDefault();
        $('#modal').arcticmodal();
    });


  } );