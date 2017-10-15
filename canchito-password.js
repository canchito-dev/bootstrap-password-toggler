/**
 * This content is released under the MIT License (MIT)
 *
 * Copyright (c) 2016, canchito-dev
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
 * @copyright	Copyright (c) 2017, canchito-dev (http://www.canchito-dev.com)
 * @license		http://opensource.org/licenses/MIT	MIT License
 * @link		https://github.com/canchito-dev/bootstrap-password-toggler
 **/
(function( $ ) {
	var Password = {
			defaults: {
		        append: 'right',				// can be left or right
		        iconPrefix: 'fa',		
		        iconShow: 'fa-eye',
		        iconHide: 'fa-eye-slash',
		        tooltip: 'Show/Hide password',
		        debug: true
		    },
			init: function(element, options) {
				this.$element = $(element);
				$.extend(Password.defaults, options);
				this.isVisible = false;
				this.$element.attr('type', 'password');
				
				this.$element.wrap('<div class="input-group"></div>');
				
				this.$icon = $(['<span class="input-group-addon" title="' + this.defaults.tooltip + '"><i class="' 
					+ this.defaults.iconPrefix + ' ' 
					+ this.defaults.iconHide + '" aria-hidden="true"></i></span>'].join('')).css('cursor', 'pointer');
				
				if(this.defaults.append == 'left')
					this.$icon.insertBefore(this.$element);
				else
					this.$icon.insertAfter(this.$element);
				
				this.bindEvents();
				
				this.$icon.off('click').on('click', $.proxy(function() {
		            this.toggle();
		        }, this));
			},
			toggle: function() {
				var preEvent = this.isVisible ? 'hide' : 'show';
				var postEvent = this.isVisible ? 'hidden' : 'shown';

				this.$element.trigger(preEvent + '.bs.password');
				
				if(!this.isVisible) {
					this.$element.attr('type', 'text');
					this.$icon.find('i')
		            	.removeClass(Password.defaults.iconShow)
		            	.addClass(Password.defaults.iconHide);
				} else {
					this.$element.attr('type', 'password');
					this.$icon.find('i')
		            	.removeClass(Password.defaults.iconHide)
		            	.addClass(Password.defaults.iconShow);
				}
				
				this.$element.trigger(postEvent + '.bs.password');
				
				this.isVisible = this.isVisible ? false : true;
			},
			bindEvents: function() {
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
			}
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
			Password.init($this, $this.data());
		});
		
		return this;
	};
	
	$(function () {
        $('[data-toggle="password"]').password();
    });
}( jQuery ));