import React from 'react';
import {customElement, inject, bindable, noView} from 'aurelia-framework';
import keypress from 'dmauro/Keypress';

@noView()
@inject(Element)

export class HelloCustomElement {
    @bindable firstname
    @bindable lastname
    @bindable jobtitle

    constructor(element) {
        this.element = element
        var listener    = new keypress.Listener();

        listener.sequence_combo("up up down down left right left right b a space", ()=>{
            this.firstname  = "Detective John";
            this.lastname   =  "Kimble";
            this.jobtitle   = "Cop / Kindergarten Teacher"
        }, true);
    }
    render() {React.render(<HelloTest firstname={this.firstname} lastname={this.lastname} jobtitle={this.jobtitle}/>, this.element)}
    bind() {this.render()}
    firstnameChanged() {this.render()}
    lastnameChanged() {this.render()}
    jobtitleChanged() {this.render()}
    attached(){this.render()}

    easterCop(){this.render()}
}

var HelloTest = React.createClass({
    render() {
        return (<div><h2>{this.props.firstname} {this.props.lastname} </h2> <h3> {this.props.jobtitle}</h3></div>);
    }
});
