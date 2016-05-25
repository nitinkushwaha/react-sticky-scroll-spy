import React, {Component} from 'react';
import './dev-app.css';
import ReactStickyScrollSpy from './react-sticky-scroll-spy';

class DevApp extends Component{
  render() {
    return (
		<div>
			<div className="openSpace">
			</div>
			<ReactStickyScrollSpy>
				<ul id="topMenu">
					<li className="active">
						<a href="#">Top</a>
					</li>
					<li>
						<a href="#foo">Foo</a>
					</li>
					<li>
						<a href="#bar">Bar</a>
					</li>
					<li>
						<a href="#baz">Baz</a>
					</li>
				</ul>
			</ReactStickyScrollSpy>
			<a id="foo" className="foo">Foo</a>
			<a id="bar" className="bar">Bar</a>
			<a id="baz" className="baz">Baz</a>
		</div>
    );
  }
}

export default DevApp
