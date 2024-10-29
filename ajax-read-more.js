jQuery(function() { 
	var content = jQuery('#content');
	if (!content.length) content = jQuery('body');
	content
		.delegate('', 'onupdate.ajaxReadMore', function(e) {
			jQuery('.post', e.target).AJAXReadMore(
				jQuery.extend(
					{
						ajaxData: {
							'ajax-read-more-mode':'2.0.2'
						},
						contentElSelector: ".entry-part",
						errorMessage: "������ �������� ����������� ������.<br/>���������� �������.",
						moreElSelector: ".more-link",
						scrollToSelector: ".entry-header"
					},
					(typeof AJAXReadMoreConfig == "undefined") ? {} : AJAXReadMoreConfig
				)
			);
		})
		.trigger('onupdate.ajaxReadMore');
});