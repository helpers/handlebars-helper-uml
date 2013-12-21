/**
 * Assemble
 *
 * Assemble <http://assemble.io>
 * Created and maintained by Jon Schlinkert and Brian Woodward
 *
 * Copyright (c) 2013 Upstage.
 * Licensed under the MIT License (MIT).
 */

module.exports.register = function (Handlebars, options, params) {
	'use strict';

	var html = [
		'<div class=wsd wsd_style="default"><pre>',
		'',
		'{{code}}',
		''
		'</pre></div><script type="text/javascript" src="http://www.websequencediagrams.com/service.js"></script>'
	];

	var tmpl = Handlebars.compile(html.join('\n'));

	Handlebars.registerHelper('uml', function(opts) {
		return new Handlebars.SafeString(tmpl({code: opts.fn()}));
	});
};