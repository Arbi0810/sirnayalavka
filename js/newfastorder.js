function quickorder_confirm() {
$('#product_url').val(window.location.href);
		var success = 'false';
		$.ajax({
			url: 'index.php?route=module/newfastorder',
			type: 'post',
			data: $('#fastorder_data').serialize() + '&action=send',
			dataType: 'json',
			beforeSend: function() {
				$('#fastorder_data').addClass('maskPopupQuickorder');
				$('#fastorder_data').after('<span class="loading_quick_order"><i class="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i></span>');
			},
			success: function(json) {
				$('.loading_quick_order').remove();
				$('#fastorder_data').removeClass('maskPopupQuickorder');
				$('#contact-name').removeClass('error_input');
				$('#contact-phone').removeClass('error_input');
				$('#contact-comment').removeClass('error_input');
			    $('#contact-email').removeClass('error_input');
					if (json['warning']) {
					if (json['warning']['name_fastorder']) {
						$('#contact-name').attr('placeholder',json['warning']['name_fastorder']);
						$('#contact-name').addClass('error_input');
					}
					if (json['warning']['phone']) {
						$('#contact-phone').attr('placeholder',json['warning']['phone']);
						$('#contact-phone').addClass('error_input');
					}
					if (json['warning']['comment_buyer']) {
						$('#contact-comment').attr('placeholder',json['warning']['comment_buyer']);
						$('#contact-comment').addClass('error_input');
					}
					if (json['warning']['email_error']) {
						$('#contact-email').attr('placeholder',json['warning']['email_error']);
						$('#contact-email').addClass('error_input');
					}
					if (json['warning']['error']) {
							for (i in json['warning']['error']['option']) {
								$('.option-error-' + i).html(json['warning']['error']['option'][i]);
							}
					}
				}

				if (json['success']){
					$.magnificPopup.close();
					var html_success  = '<div id="popup-success-quick"><i class="fa fa-check-circle fa-fw"></i>' + json['success'] + '</div>';
					$.magnificPopup.open({
						tLoading: '<span><i style="font-size:50px;" class="fa fa-spinner fa-pulse"></i></span>',
						items: {
						  src: html_success,
						  type: 'inline'
						}
					});
                                        ym(26020257,'reachGoal','one_submit');
										dataLayer.push({'event': 'oneclick_submit'});
				}
			}

		});
};
function quickorder_confirm_checkout() {
$('#quickorder_url').val(window.location.href);
		var success = 'false';
		$.ajax({
			url: 'index.php?route=module/newfastordercart',
			type: 'post',
			data: $('#fastorder_data').serialize() + '&action=send',
			dataType: 'json',
			beforeSend: function() {
				$('#fastorder_data').addClass('maskPopupQuickorder');
				$('#fastorder_data').after('<span class="loading_quick_order"><i class="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i></span>');
			},
			success: function(json) {
				$('.loading_quick_order').remove();
				$('#fastorder_data').removeClass('maskPopupQuickorder');
				$('#contact-name').removeClass('error_input');
				$('#contact-phone').removeClass('error_input');
				$('#contact-comment').removeClass('error_input');
			    $('#contact-email').removeClass('error_input');
					if (json['warning']) {
					if (json['warning']['name_fastorder']) {
						$('#contact-name').attr('placeholder',json['warning']['name_fastorder']);
						$('#contact-name').addClass('error_input');
					}
					if (json['warning']['phone']) {
						$('#contact-phone').attr('placeholder',json['warning']['phone']);
						$('#contact-phone').addClass('error_input');
					}
					if (json['warning']['comment_buyer']) {
						$('#contact-comment').attr('placeholder',json['warning']['comment_buyer']);
						$('#contact-comment').addClass('error_input');
					}
					if (json['warning']['email_error']) {
						$('#contact-email').attr('placeholder',json['warning']['email_error']);
						$('#contact-email').addClass('error_input');
					}
					if (json['warning']['error']) {
							for (i in json['warning']['error']['option']) {
								$('.option-error-' + i).html(json['warning']['error']['option'][i]);
							}
					}
				}
				if (json['success']){
					$('#cart').load('index.php?route=module/cart #cart > *');
					$.magnificPopup.close();
					var html_success  = '<div id="popup-success-quick"><i class="fa fa-check-circle fa-fw"></i>' + json['success'] + '</div>';
					$.magnificPopup.open({
						tLoading: '<span><i style="font-size:50px;" class="fa fa-spinner fa-pulse"></i></span>',
						items: {
						  src: html_success,
						  type: 'inline'
						}
					});
                                        ym(26020257,'reachGoal','one_submit');
										dataLayer.push({'event': 'oneclick_submit'});
				}
			}

		});
};