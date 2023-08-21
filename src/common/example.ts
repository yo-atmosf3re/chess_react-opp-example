export { }

// getUser1.filterUserByAge('15')
// getUser2.filterUserByAge('15')

// class Database {
//   url?: number;
//   private static instance: Database;

//   constructor() {
//     if (Database.instance) {
//       return Database.instance
//     }
//     this.url = Math.random();
//     Database.instance = this;
//   }
// }

// const dbSummonFirst = new Database();
// const dbSummonSecond = new Database();

// // console.log(dbSummonFirst.url);
// // console.log(dbSummonSecond.url);

// class Rectangle {
//   width;
//   height;
//   constructor(w: number, h: number) {
//     this.width = w;
//     this.height = h;
//   }

//   calcArea() {
//     console.log(this.width * this.height);;
//     return this.width * this.height;
//   }

//   calcPerimeter() {
//     console.log((this.height + this.width) * 2);
//     return (this.height + this.width) * 2
//   }
// }

// const rect = new Rectangle(5, 10)
// rect.calcArea()
// rect.calcPerimeter()

// class User {

//   private _login: string;
//   private _password: string;
//   private _uid: string;

//   constructor(login: string, password: string) {
//     this._login = login;
//     this._password = password;
//     this._uid = (Math.random() * 10).toString().replace('.', '');
//     console.log(this._login, this._password, this._uid);
//   }

//   public get login() {
//     return this._login;
//   }

//   public set login(value) {
//     console.log(`the login has been changed to ${value}`)
//     this._login = value;
//   }

//   public get password() {
//     return this._password;
//   }

//   public set password(value) {
//     console.log(`the password has been changed to ${value}`)
//     this._password = value;
//   }

//   public get uid(): string {
//     console.log(`the uid has been recived to ${this._uid}`)
//     return this._uid;
//   }

// }

// const user = new User('Alex', 'qwerty')
// user.login = 'Jon';
// user.password = 'asdfg';

// const uid = user.uid;

// class Database {
//   private _url: string;
//   private _port: string;
//   private _username: string;
//   private _password: string;
//   private _tables: any;

//   constructor(url: string, port: string, username: string, password: string) {
//     this._url = url;
//     this._port = port;
//     this._username = username;
//     this._password = password;
//     this._tables = [];
//   }

//   public createNewTable(table: any) {
//     this._tables.push(table)
//   }

//   public clearTable() {
//     console.log('this tables has been cleared');
//     this._tables = []
//   }

//   get url() {
//     return this._url
//   }

//   get port() {
//     return this._port
//   }

//   get username() {
//     return this._username
//   }

//   get password() {
//     return this._password
//   }

//   get tables() {
//     return this._tables
//   }

// }

// const db = new Database('1', '2', 'Alex', 'qwerty')
// db.createNewTable({ user: 'Jon', password: 'asdfg' })
// console.log(db);
// db.clearTable()

// class Calculator {
//   add(a: number, b: number): number {
//     return a + b
//   }

//   addd(a: string, b: string): string {
//     return a + b
//   }
// }

// const newCompute = new Calculator()
// console.log(newCompute.add(5, 5));
// console.log(newCompute.addd('5', '5'));

// class Person {
//   private _firstname: string;
//   private _lastname: string;
//   private _age: number;

//   constructor(firstname: string, lastname: string, age: number) {
//     this._firstname = firstname;
//     this._lastname = lastname;
//     this._age = age;
//   }

//   public get fullName(): string {
//     return `Lastname - ${this._lastname}, firstname - ${this._firstname}`
//   }

//   public greeting() {
//     console.log(`Hello, i'm human, my name is ${this._firstname} ${this._lastname}!`);
//   }

//   public get firstname(): string {
//     return this._firstname;
//   }
//   public set firstname(value: string) {
//     this._firstname = value;
//   }

//   public get lastname(): string {
//     return this._lastname;
//   }
//   public set lastname(value: string) {
//     this._lastname = value;
//   }

//   public get age(): number {
//     return this._age;
//   }
//   public set age(value: number) {
//     if (value < 0) {
//       this._age = 0;
//     } else {
//       this._age = value;
//     }
//   }

// }

// const newPerson = new Person('Dave', 'Chrome', 32)
// // console.log(newPerson.fullName);

// class Employee extends Person {
//   private _inn: number;
//   private _number: number;
//   private _snils: number;

//   constructor(firstname: string, lastname: string, age: number,
//     inn: number, number: number, snils: number
//   ) {
//     super(firstname, lastname, age)
//     this._inn = inn;
//     this._number = number;
//     this._snils = snils;
//   }

//   public greeting() {
//     console.log(`Hello, i'm employee, my name is ${this.firstname} ${this.lastname}!`);
//   }

// }

// const newEmployee = new Employee('Alex', 'Jonson', 27, 111, 222, 333)
// // console.log(newEmployee.fullName);

// class Developer extends Employee {
//   private _level: string;

//   constructor(firstname: string, lastname: string, age: number,
//     inn: number, number: number, snils: number,
//     level: string
//   ) {
//     super(firstname, lastname, age, inn, number, snils);
//     this._level = level;
//   }

//   public greeting() {
//     console.log(`Hello, i'm developer, my name is ${this.firstname} ${this.lastname}!`);
//   }

// }

// const newDeveloper = new Developer('Mike', 'Pitterson', 24, 222, 333, 444, 'junior')
// console.log(newDeveloper.fullName);

// newPerson.greeting()
// newEmployee.greeting()
// newDeveloper.greeting()

// const personList: Person[] = [newPerson, newEmployee, newDeveloper]

// function massGreating(persons: Person[]) {
//   for (let index = 0; index < persons.length; index++) {
//     const person = persons[index];
//     person.greeting()
//   }
// }

// massGreating(personList)

// class Engine {
//   start() {
//     console.log("Двигатель запущен");
//   }
// }

// class Car {
//   engine: Engine;

//   constructor() {
//     this.engine = new Engine(); // агрегация: объект Car содержит ссылку на объект Engine
//   }

//   startEngine() {
//     this.engine.start(); // вызываем метод start() у объекта Engine
//   }
// }

// let myCar = new Car();
// myCar.startEngine(); // Вывод: Двигатель запущен

// interface Client {
//   connect(url: string): void;
//   read(): string;
//   write(data: string): void;
// }

// class User implements Client {
//   connect(url: string): void {

//   }
//   read(): string {
//     return 'The reading has been successful'
//   }
//   write(data: string): void {

//   }
// }

// abstract class Shape {
//   protected color: string;

//   constructor(color: string) {
//     this.color = color;
//   }

//   abstract getArea(): number;

//   abstract getPerimeter(): number;

//   displayColor(): void {
//     console.log(`Color: ${this.color}`);
//   }
// }

// class Rectangle extends Shape {
//   private height: number;
//   private width: number;

//   constructor(color: string, height: number, width: number) {
//     super(color)
//     this.height = height;
//     this.width = width;
//   }

//   getArea(): number {
//     return this.height * this.width
//   }

//   getPerimeter(): number {
//     return (this.height * this.width) * 2
//   }
// }

// class Circle extends Shape {
//   private radius: number;

//   constructor(color: string, radius: number) {
//     super(color)
//     this.radius = radius;
//   }

//   getArea(): number {
//     return Math.PI * this.radius ** 2;
//   }

//   getPerimeter(): number {
//     return 2 * Math.PI * this.radius
//   }
// }

// const rectangle = new Rectangle("red", 5, 3);
// console.log(rectangle.getArea(), 'rectangle area');
// console.log(rectangle.getPerimeter(), 'rectangle perimeter');
// rectangle.displayColor();

// const circle = new Circle("blue", 20);
// console.log(circle.getArea(), 'circle area');
// console.log(circle.getPerimeter(), 'circle perimeter');
// circle.displayColor();

// type User = {
//   username: string
//   age: number
// }
// interface Repository<T> {
//   create: (obj: T) => T;
//   get: () => T;
//   delete: (obj: T) => T;
//   update: (obj: T) => T;
// }

// class UserRepo implements Repository<User> {
//   create(obj: User) {
//     return { username: 'Clara', age: 18 }
//   }

//   get() {
//     return { username: 'Getsby', age: 28 }
//   }

//   delete(obj: User) {
//     return { username: 'Dave', age: 15 }
//   }

//   update(obj: User) {
//     return { username: 'Ulbi', age: 27 }
//   }
// }

// interface UserRepo {
//   getUser: () => User[]
// }

// class UserMDBRepo implements UserRepo {
//   getUser(): User[] {
//     console.log('Some work!')
//     return [{ age: 15, username: 'Users from Mongo DB!' }]
//   }

//   get(): { username: string; age: number; } {
//       return
//   }
// }
// class UserPostgresRepo implements UserRepo {
//   getUser(): User[] {
//     console.log('Some work!')
//     return [{ age: 15, username: 'Users from Postgres!' }]
//   }
// }

// class UserService {
//   userRepo: UserRepo;

//   constructor(userRepo: UserRepo) {
//     this.userRepo = userRepo;
//   }

//   filterUserByAge(age: string) {
//     const users = this.userRepo.getUser()
//     console.log(users)
//   }
// }

// // const getUser1 = new UserService(new UserMDBRepo())
// // const getUser2 = new UserService(new UserPostgresRepo())

// interface User {
//   username: string
//   age: number
// }

// interface UserRepo {
//   getUser: () => User[]
// }

// class UserMongoDBRepo implements UserRepo {
//   getUser(): User[] {
//     console.log('Используем подключение к монго, получаем пользователей');
//     return [{ username: 'Mongo', age: 14 }]
//   }
// }

// class UserPostgresRepo implements UserRepo {
//   getUser(): User[] {
//     console.log('Используем подключение к постгрес, получаем пользователей');
//     return [{ username: 'Postgres', age: 21 }]
//   }
// }

// class UserService {
//   userRepo: UserRepo;
//   filterUserByAge(age: number) {
//     const users = this.userRepo.getUser();
//     console.log(users);
//   }

//   constructor(userRepo: UserRepo) {
//     this.userRepo = userRepo;
//   }

// }

// const userMongo = new UserService(new UserMongoDBRepo)
// const userPostgres = new UserService(new UserPostgresRepo)

// userMongo.filterUserByAge(12)
// userPostgres.filterUserByAge(14)

// class Singleton {
//   private static instance: Singleton;
//   private constructor() { }

//   public static getInstance(): Singleton {
//     if (!Singleton.instance) {
//       Singleton.instance = new Singleton();
//     }
//     return Singleton.instance;
//   }
// }

// const singletonInstance = Singleton.getInstance();

// class Database {
//    // @ts-ignore
//    url: string;
//    private static instance: Database;

//    constructor() {
//       if (Database.instance) {
//          return Database.instance;
//       }
//       this.url = (Math.random() * 10).toString().replace('.', '');
//       Database.instance = this;
//    }
// }

// const db1 = new Database()
// const db2 = new Database()

// console.log(db1.url);
// console.log(db2.url);

// class Person {
//   static human: number = 0;
//   age: number;
//   name: string;

//   constructor(age: number, name: string) {
//     this.name = name;
//     this.age = age;
//     Person.human++
//   }
// }

// const Alex = new Person(15, 'Alex')
// console.log(Person.human);
// const Dave = new Person(22, 'Dave')
// console.log(Person.human);
