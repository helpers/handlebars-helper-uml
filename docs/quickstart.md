To install the module, run the following in the command line:

```bash
npm i {%= name %} --save
```

Use within your application with the following line of JavaScript:

```js
var {%= safename %} = require('{%= name %}');
```

### Register the helper

```javascript
grunt.initConfig({
	assemble: {
		options: {
			helpers: ['{%= name %}']
		}
	}
});
```

### Usage

```handlebars
{{#uml}}
  me->tacos: make
  tacos-->me: happiness
{{/uml}}
```