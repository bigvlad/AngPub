//import at the top
import {Label} from './labelInterface'
//casting
var t:Boolean=true; //nerecomandat, folositi boolean
(<any>window).isReady=true;

//null checking and"I am sure operator"/if
let s:number|null=null;
var ter:number=s!+4;

//interfata on the go
function printLabel(labelledObj: Label) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

//classes and interfaces
interface Vietate{
    name:string;
}
interface Miscatoare{
    move:()=>void;
}
 class Animal implements Vietate,Miscatoare{
    name:string;
    constructor( nume:string){
        this.name=nume;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

let greeter = new Animal("Dani"); //error if Animal is abstract


class Dog extends Animal {
    constructor(){ //mandatory or make parameter in super constructor nullable
        super("Crivei");
    }
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

//generic types
class Movie { title: string; }

function getAsync<T>(url: string): Promise<T[]> {
    return fetch(url)
        .then((response: Response) => response.json());
}

getAsync<Movie>("/movies")
  .then(movies => {
    movies.forEach(movie => {
      console.log(movie.title);
    });
  });