/**
 * This content is released under the MIT License (MIT)
 *
 * Copyright (c) 2018, canchito-dev
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 * @author 		Jose Carlos Mendoza Prego
 * @copyright	Copyright (c) 2018, canchito-dev (http://www.canchito-dev.com)
 * @license		http://opensource.org/licenses/MIT	MIT License
 * @link		https://github.com/canchito-dev/bootstrap-password-toggler
 * @link		http://canchito-dev/projects/bpt
 **/
(function( $ ) {

    'use strict';
    
    var Password = function(element, options) {
		this.$element = $(element);
		this.options = $.extend(Password.defaults, options);
		this.isVisible = false;
		
        this.init(element, options);
    };
    
    Password.defaults = {
        append: 'right',				// can be left or right
        iconPrefix: 'fa',		
        iconShow: 'fa-eye',
        iconHide: 'fa-eye-slash',
        tooltip: 'Show/Hide password',
        version: '1.0.1',
        debug: false
    };
    
	Password.prototype.init = function(element, options) {
				this.$element.attr('type', 'password');
				
				this.$element.wrap('<div class="input-group"></div>');
				
				this.$icon = $(['<span class="input-group-text" title="' + this.options.tooltip + '"><i class="' 
					+ this.options.iconPrefix + ' ' 
					+ this.options.iconShow + '" aria-hidden="true"></i></span>'].join('')).css('cursor', 'pointer');
				
				this.$icon.wrap('<div class="input-group-' +
						(this.options.append == 'left') ? 'prepend' : 'append'
						+ '"></div>');
				
				this.$icon.insertAfter(this.$element);
				
				this.bindEvents();
				
				this.$icon.off('click').on('click', $.proxy(function() {
		            this.toggle();
		        }, this));
			};
			
	Password.prototype.toggle = function() {
				var preEvent = this.isVisible ? 'hide' : 'show';
				var postEvent = this.isVisible ? 'hidden' : 'shown';

				this.$element.trigger(preEvent + '.bs.password');
				
				if(!this.isVisible) {
					this.$element.attr('type', 'text');
					this.$icon.find('i')
		            	.removeClass(Password.defaults.iconShow)
		            	.addClass(Password.defaults.iconHide);
					// Support for Font Awesome v5
					this.$icon.find('svg')
		            	.removeClass(Password.defaults.iconShow)
		            	.addClass(Password.defaults.iconHide);
				} else {
					this.$element.attr('type', 'password');
					this.$icon.find('i')
		            	.removeClass(Password.defaults.iconHide)
		            	.addClass(Password.defaults.iconShow);
					// Support for Font Awesome v5
					this.$icon.find('svg')
		            	.removeClass(Password.defaults.iconHide)
		            	.addClass(Password.defaults.iconShow);
				}
				
				this.$element.trigger(postEvent + '.bs.password');
				
				this.isVisible = this.isVisible ? false : true;
			};
			
	Password.prototype.bindEvents = function() {
				this.$element.on({
					'show.bs.password': function(event) {
						debug(event);
				    },
				    'shown.bs.password': function(event) {
				    	debug(event);
				    },
				    'hide.bs.password': function(event) {
				    	debug(event);
				    },
				    'hidden.bs.password': function(event) {
				    	debug(event);
				    }
				});
			};
	
	// Private function for debugging.
    function debug(event) {
    	if(!Password.defaults.debug) return;
    	
        if (window.console && window.console.log) {
            window.console.log(event.type + '.' + event.namespace + ': ', event);
        }
    };
	
	$.fn.password = function(options) {
		
		this.each(function() {
			var $this = $(this);
			var settings = $.extend($this.data(), options);
			$this.data('bs.password', new Password($this, settings));
		});
		
		return this;
	};
	
	$(function () {
        $('[data-toggle="password"]').password();
    });
}( jQuery ));