import React from 'react';
import {customElement, inject, bindable, noView} from 'aurelia-framework';

@noView()
@inject(Element)
@bindable('foo')
export class HelloCustomElement {

    constructor(element) {this.element = element}
    render() {React.render(<HelloTest foo={this.foo} />, this.element)}
    bind() {this.render()}
    fooChanged() {this.render()}

}

var HelloTest = React.createClass({
    render: function () {
        return (<h1>{this.props.foo}</h1>);
    }
});