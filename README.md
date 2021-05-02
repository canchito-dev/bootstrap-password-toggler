[![Buy Me a Coffee](images/donate_with_crypto.PNG)](https://commerce.coinbase.com/checkout/faf64f90-2e80-46ee-aeba-0fde14cbeb46)
[![Buy Me a Coffee](https://www.paypalobjects.com/en_US/ES/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate?hosted_button_id=GTSXAJQEBZ7XG)

# bootstrap-password-toggler
**Bootstrap Password Toggler** is a very simple but effective jQuery plugin for showing/hiding password. It fully support Bootstrap v4.


## Download
Help us find bugs, add new features or simply just feel free to use it. Download **Bootstrap Password Toggler** from our [ GitHub](https://github.com/canchito-dev/bootstrap-password-toggler) site.


## License
The MIT License (MIT)  

Copyright (c) 2018, canchito-dev  

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Dear haters, trolls and everything-sucks-people...
This project started as a way of helping me understand and learn about jQuery plugin. It might not perfectly coded, but it was developed with all the good intensions at heart.

This is a totally unpaid and voluntary project, developed during my free-time and shared on GitHub. It can be used for private or commercially, without a cost. There is only one simple request, do not bash or complain. If you don't like it, don't use it.

If you find an issue, please fill free and open a ticket, we will try to solve it as soon as possible. If you would like to become an active contributor to this project, even better.


## Contribute Code
If you would like to become an active contributor to this project please follow theses simple steps:

1.  Fork it
2.  Create your feature branch
3.  Commit your changes
4.  Push to the branch
5.  Create new Pull Request


## User Guide
The plugin can be used with `input` elements. Typically password fields. There are two ways to initialize the plugin: (1) via attributes; (2) via JavaScript.
```html
<input class="form-control" id="password" name="password" placeholder="Password" data-toggle="password">
```

### Via Data Attributes
```html
<input data-toggle="password">
```

### Via JavaScript
```javascript
$('#password').password();
```

### Options
Options can be passed via data attributes or JavaScript.

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Attribute</th>
			<th>type</th>
			<th>default</th>
			<th>description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>-</td>
			<td>data-toggle</td>
			<td>String</td>
			<td>password</td>
			<td>Enables password plugin without writing JavaScript</td>
		</tr>
		<tr>
			<td>append</td>
			<td>data-append</td>
			<td>String</td>
			<td>append</td>
			<td>Appends the show/hide icon. Possible values are 'append' or 'prepend'</td>
		</tr>
		<tr>
			<td>tooltip</td>
			<td>data-tooltip</td>
			<td>String</td>
			<td>Show/Hide password</td>
			<td>The tooltip of show/hide icon</td>
		</tr>
		<tr>
			<td>iconPrefix</td>
			<td>data-icon-prefix</td>
			<td>String</td>
			<td>fa</td>
			<td>Base eye icon class</td>
		</tr>
		<tr>
			<td>iconShow</td>
			<td>data-icon-show</td>
			<td>String</td>
			<td>fa-eye</td>
			<td>Open eye icon</td>
		</tr>
		<tr>
			<td>iconHide</td>
			<td>data-icon-hide</td>
			<td>String</td>
			<td>fa-eye-slash</td>
			<td>Close eye icon</td>
		</tr>
		<tr>
			<td>debug</td>
			<td>data-debug</td>
			<td>Boolean</td>
			<td>false</td>
			<td>Enables/Disable debugging mode</td>
		</tr>
	</tbody>
</table>

By default, the icons used are from [Font Awesome](http://fontawesome.io/).

When the debug mode is enabled, the plugin will log in the console the event's related information.

### Events
Additionally, the plugin exposes some events.

<table>
	<thead>
		<tr>
			<th>Event Type</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>show.bs.password</td>
			<td>This event fires immediately when a request to show the password is sent</td>
		</tr>
		<tr>
			<td>shown.bs.password</td>
			<td>This event fires immediately after the password has been shown</td>
		</tr>
		<tr>
			<td>hide.bs.password</td>
			<td>This event is fired immediately when a request to hide the password is sent</td>
		</tr>
		<tr>
			<td>hidden.bs.password</td>
			<td>This event is fired immediately after the password has been hidden</td>
		</tr>
	</tbody>
</table>
