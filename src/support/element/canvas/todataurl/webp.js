;(function(definition, window, document, undefined) {
	'use strict';

	var namespace  = 'qoopido',
		name       = 'support/element/canvas/todataurl/webp',
		initialize = function initialize() {
			[].push.apply(arguments, [ window, document, undefined ]);

			window[namespace] = window[namespace] || { };

			return (window[namespace][name] = definition.apply(null, arguments));
		};

	if(typeof define === 'function' && define.amd) {
		define([ 'qoopido/support', 'qoopido/support/element/canvas/todataurl' ], initialize);
	} else {
		initialize(window[namespace].support, window[namespace]['support/element/canvas/todataurl']);
	}
}(function(mSupport, mSupportElementCanvasTodataurl, window, document, undefined) {
	'use strict';

	mSupport.addTest('/element/canvas/todataurl/webp', function(deferred) {
		mSupportElementCanvasTodataurl()
			.then(function() {
				(mSupport.getElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0) ? deferred.resolve() : deferred.reject();
			})
			.fail(function() {
				deferred.reject();
			});
	});

	return mSupport.test['/element/canvas/todataurl/webp'];
}, window, document));