import {Component, View, bootstrap} from 'angular2/angular2';

@Component({ selector: 'my-app' })
@View({
	template:'<h1>Hello {{ name }}</h1>'
})

export class MyAppComponent {
	name:string;
	constructor() {
		this.name = 'Oscar';
	}
}

bootstrap(MyAppComponent);