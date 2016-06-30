import React from 'react';

class ReactStickyScrollSpy extends React.Component{
	constructor (props) {
		super(props);
		this.easingEffects = {
	        linear: function(t) {
	            return t
	        },
	        easeInQuad: function(t) {
	            return t * t
	        },
	        easeOutQuad: function(t) {
	            return -1 * t * (t - 2)
	        },
	        easeInOutQuad: function(t) {
	            return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
	        },
	        easeInCubic: function(t) {
	            return t * t * t
	        },
	        easeOutCubic: function(t) {
	            return 1 * ((t = t / 1 - 1) * t * t + 1)
	        },
	        easeInOutCubic: function(t) {
	            return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
	        },
	        easeInQuart: function(t) {
	            return t * t * t * t
	        },
	        easeOutQuart: function(t) {
	            return -1 * ((t = t / 1 - 1) * t * t * t - 1)
	        },
	        easeInOutQuart: function(t) {
	            return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
	        },
	        easeInQuint: function(t) {
	            return 1 * (t /= 1) * t * t * t * t
	        },
	        easeOutQuint: function(t) {
	            return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
	        },
	        easeInOutQuint: function(t) {
	            return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
	        },
	        easeInSine: function(t) {
	            return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
	        },
	        easeOutSine: function(t) {
	            return 1 * Math.sin(t / 1 * (Math.PI / 2))
	        },
	        easeInOutSine: function(t) {
	            return -.5 * (Math.cos(Math.PI * t / 1) - 1)
	        },
	        easeInExpo: function(t) {
	            return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
	        },
	        easeOutExpo: function(t) {
	            return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
	        },
	        easeInOutExpo: function(t) {
	            return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
	        },
	        easeInCirc: function(t) {
	            return 1 > t ? -1 * (Math.sqrt(1 - (t /= 1) * t) - 1) : t
	        },
	        easeOutCirc: function(t) {
	            return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
	        },
	        easeInOutCirc: function(t) {
	            return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
	        },
	        easeInElastic: function(t) {
	            var e = 1.70158,
	                n = 0,
	                i = 1;
	            return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / n)))
	        },
	        easeOutElastic: function(t) {
	            var e = 1.70158,
	                n = 0,
	                i = 1;
	            return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin(2 * (1 * t - e) * Math.PI / n) + 1)
	        },
	        easeInOutElastic: function(t) {
	            var e = 1.70158,
	                n = 0,
	                i = 1;
	            return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .3 * 1.5), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), 1 > t ? -.5 * i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / n) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / n) * .5 + 1)
	        },
	        easeInBack: function(t) {
	            var e = 1.70158;
	            return 1 * (t /= 1) * t * ((e + 1) * t - e)
	        },
	        easeOutBack: function(t) {
	            var e = 1.70158;
	            return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
	        },
	        easeInOutBack: function(t) {
	            var e = 1.70158;
	            return (t /= .5) < 1 ? .5 * t * t * (((e *= 1.525) + 1) * t - e) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
	        },
	        easeInBounce: function(t) {
	            return 1 - easingEffects.easeOutBounce(1 - t)
	        },
	        easeOutBounce: function(t) {
	            return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
	        },
	        easeInOutBounce: function(t) {
	            return .5 > t ? .5 * easingEffects.easeInBounce(2 * t) : .5 * easingEffects.easeOutBounce(2 * t - 1) + .5
	        }
    	};
    	this.scrollFunction = this.scrollEvent.bind(this, this);
    	this.linkFunction = this.linkClick.bind(this, this);
	}
	componentDidMount () {
		window.addEventListener('scroll', this.scrollFunction);
		this.renderAgain();
	}
	renderAgain () {
		if (this.validaTags && this.validaTags.length) {
			for(var i = 0; i < this.validaTags.length; i++) {
	    		let item = this.validaTags[i];
	    		item.removeEventListener('click', this.linkFunction);
    		}
		}

		this.aTags = this.refs.sticky.getElementsByTagName('a');
		this.validaTags = [];
		this.validIdTags = [];
		for(var i = 0; i < this.aTags.length; i++) {
			let item = this.aTags[i];
			let id = item.getAttribute('href');
			if (id.length && id.slice(0,1) === '#') {
				this.validIdTags.push(id);
				this.validaTags.push(item);
				item.addEventListener('click', this.linkFunction);
			}
		}
	}
	componentWillUnmount () {
    	window.removeEventListener('scroll', this.scrollFunction);
	}
	componentDidUpdate () {
		this.renderAgain();
	}
	render() {
    	return (
			<div ref="sticky">
				<div>
					{this.props.children}
				</div>
			</div>
    	);
  	}
  	scrollEvent (_self, event) {
  		//this.validaTags
  		let cur = [];
  		let currentScroll = event.srcElement.body.scrollTop;
  		let elementHeightTop = _self.refs.sticky.getBoundingClientRect().top;

  		for (let i = 0; i < _self.validIdTags.length; i++) {
  			let href = _self.validIdTags[i];
  			if (href != '#') {
  				let elementOffsetTop = document.getElementById(href.slice(1)).offsetTop;
  				if (elementOffsetTop < currentScroll + _self.refs.sticky.childNodes[0].offsetHeight) //#######
					cur.push(href);
  			} else {
  				cur.push('#');
  			}
  		}
		cur = cur[cur.length-1];
		for (let i = 0; i < _self.aTags.length; i++) {
			if (cur == _self.aTags[i].getAttribute('href')) {
				_self.aTags[i].parentNode.classList.add('active');
			} else {
				_self.aTags[i].parentNode.classList.remove('active');
			}
		}

  		if (elementHeightTop < 0) {
  			if (!_self.isFixed) {
  				let elementHeight = _self.refs.sticky.childNodes[0].offsetHeight;
				_self.refs.sticky.style.height = elementHeight + 'px';

  				let childElement =  _self.refs.sticky.childNodes[0].style;
				childElement.position = 'fixed';
				childElement.top = '0px';
				childElement.width = '100%';
				childElement.zIndex = 99999;
  				_self.isFixed = true;
  				if(typeof(_self.props.onFixedChange)==='function') {
                	_self.props.onFixedChange(true);
             	}
  			}
  		} else {
  			if (_self.isFixed) {
  				_self.refs.sticky.style.height = 'auto';
  				let childElement =  _self.refs.sticky.childNodes[0].style;
				childElement.position = 'relative';
				childElement.top = 'auto';
				childElement.width = 'auto';
				childElement.zIndex = 'auto';
  				_self.isFixed = false;
  				if(typeof(_self.props.onFixedChange)==='function') {
                	_self.props.onFixedChange(false);
             	}
  			}
  		}
  	}
  	linkClick (_self, event) {
  		event.preventDefault();
  		let element = event.target;
  		let href = element.getAttribute('href');
  		let offsetTop = (href === "#") ? 0 : document.getElementById(href.slice(1)).offsetTop - _self.refs.sticky.childNodes[0].offsetHeight+1;
  		_self.scrollToY(offsetTop);
  	}
  	scrollToY (scrollHeight) {
  		let _self = this;
	    let scrollStep = 600/15;
	    let currentScrollStep = 1;

	    requestAnimationFrame(step);
	    function step () {
	        setTimeout(function() {
	            if ( scrollStep >= currentScrollStep ) {
	                requestAnimationFrame(step);
	                let currentStep = (100/scrollStep)*currentScrollStep;
	                currentScrollStep++;
	                let scrollRatio = _self.easingEffects.easeInQuart(currentStep/100);
	                let yPosScroll = (window.scrollY - scrollHeight) * scrollRatio;
	                window.scrollTo( 0, ( window.scrollY - yPosScroll ));
	            }
	        }, 15 );
	    }
	}
}
ReactStickyScrollSpy.defaultProps = { 
	onFixedChange: ()=>{} 
};

export default ReactStickyScrollSpy
