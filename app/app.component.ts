import {Component} from 'angular2/core';
import {ParallaxHeaderComponent} from './components/parallax-header/parallax-header.component';

@Component({
    selector:   'b-and-moj',
    template:   '<parallax-header></parallax-header>' +
                '<main></main>',
    styleUrls:  ['app/app.css'],
    directives: [ParallaxHeaderComponent]
})

export class AppComponent { }