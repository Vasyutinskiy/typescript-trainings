// import {ReferenceItem} from "./classes";
import {Category} from "./enums";
import {getBooksByCategory, getBooksByCategoryPromise, logSearchResults} from "./functions";
import {UniversityLibrarian} from "./classes";

// showHello("greeting", "TypeScript");
//
// function showHello(divName: string, name: string) {
//   const elt = document.getElementById(divName);
//   elt.innerText = `Hello from ${name}`;
// }



// Task 02.01
// logFirstAvailable(getAllBooks());

// const titles = getBookTitlesByCategory(Category.JavaScript);
// logBookTitles(titles);

// const result = getBookAuthorByIndex(2);
// console.log(typeof result);
// console.log(result);

// const result = calcTotalPages();
// console.log(result);

// const titles = getBookTitlesByCategory(Category.JavaScript);
// titles.forEach(title => console.log(title));

// console.log(getBookByID(1));

// 03.02
// let myID = createCustomerID('Ann', 10);
// console.log(myID);

// set function TYPE and assign it to new function
// const idGenerator: (name: string, id: number) => string =
// let idGenerator: (name: string, id: number) => string =
//             (name: string, id: number) => `${id} - ${name}`;
//
// idGenerator = createCustomerID;
// myID = idGenerator('Boris', 20);
// console.log(myID);

//=============
// 03.03

// createCustomer('Ihor');
// createCustomer('Ihor', 35);
// createCustomer('Ihor', 35, 'Kiyv');

// console.log(getBookTitlesByCategory());
// console.log(logFirstAvailable());


// const myBooks: string[] = сheckoutBooks('Ann', 1, 2, 4);
// same but with REST array
// const myBooks: string[] = сheckoutBooks('Ann', ...[1, 2, 4]);
// console.log(myBooks);

// 03.04
// const checkedOutBooks  = getTitles(false);
// console.log(checkedOutBooks);


// Task 03.05
// Assertion functions (функции утверждения)
// console.log(bookTitleTransform('Title'));
// console.log(bookTitleTransform(100));

// ====================================

// 04.01
// Interfaces
// const myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   pages: 200,
//   markDamaged: (reason) => console.log(`Damaged: ${reason}`)
// };

// printBook(myBook);
// myBook.markDamaged('missing back cover');


//const logDamage: DamageLogger = (reason) => console.log(`Damaged: ${reason}`);
// const logDamage: Logger = (reason) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// Task 04.03
// const favoriteAuthor: Author = {
//   name: 'Ihor',
//   email: 'Ihor@gmail.com',
//   numBooksPublished: 10
// };
// const favoriteLibrarian: Librarian = {
//   name: 'Ihor',
//   email: 'Ihor@gmail.com',
//   department: 'Liturature',
//   assistCustomer: (custName: string) => console.log(custName)
// };


// Task 04.04
// const offer: any = {
//   book: {
//     title: 'Essential TypeScript'
//   }
// };
//
// console.log(offer.magazine?.a());

// Task 04.05
// console.log(getBookProp(getAllBooks()[0], 'title'));
// console.log(getBookProp(getAllBooks()[0], 'markDamaged'));
// //isbn нельзя задать т.к. в BookProperties нет такого через проверку keyof
// console.log(getBookProp(getAllBooks()[0], 'isbn'));

// Classes
// task 05/01
// const ref = new ReferenceItem('It is Title', 2020);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'Our Random string';
// console.log(ref.publisher);

//Task 05.02
// const refBook = new Encyclopedia('Title', 2020, 10);
// const refBook = new RefBook('Title', 2020, 10);
// console.log(refBook);
// refBook.printItem();

// Task 05.03
// const refBook = new Encyclopedia('Title', 2020, 10);
// refBook.printCitation();

// Task 05.04
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');

// const personBook: PersonBook = {
//   name: 'Anna',
//   email: 'anna@gmail.com',
//   id: 1,
//   title: 'Book Title',
//   author: 'Book Author',
//   available: false,
//   category: Category.CSS
// };
//
// console.log(personBook);

// Task 06.05

//PROMISE!!! - dynamic import!!!
// import ('./classes').then(module => {
//   const reader = new module.Reader();
//   console.log(reader);
// });

// Task 07.01(GENERICS)!!!!

const inventory = [
  { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
  { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
  { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
  { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];
//
// const result = purge<Book>(inventory);
// console.log(result);

// Same but with number Array - Generic not required
// const result = purge([1, 2, 3]);
// console.log(result);

// Task 07.02
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
//
// const firstBook = bookShelf.getFirst();
// console.log(firstBook);


// const magazines: Array<Magazine> = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));

// const firstMag = magazineShelf.getFirst();
// console.log(firstMag);

// Task 07.03
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));


//Task 07.04

// const Book: BookRequiredFields = {
//     id: 1,
//     title: 'Book Title',
//     author: 'Book Author',
//     available: false,
//     category: Category.HTML,
//     markDamaged: null,
//     pages: 1000
// };
//
// const updatedBook: UpdatedBook = {
//   id: 1,
//   available: true
// };

// const params: Parameters<СreateCustomerFunctionType > = ['Anna'];
// // createCustomer(params);
// createCustomer(...params);


// Task 08.01
// const universiryLibrarian = new UniversityLibrarian();
// console.log(universiryLibrarian);

//Task 08.02
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// fLibrarian['printLibrarian']();

//Task 08.03
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.assistFaculty = null;
// fLibrarian.techCommunity = null;


//Task 08.04
// const enc = new RefBook('Enc Title', 2020, 3);
// enc.printItem();


//Task 08.05
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// fLibrarian.assistCustomer('Boris');
// console.log(fLibrarian);


//Task 08.06
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// console.log(fLibrarian.name);


//Task 08.07
// const enc = new RefBook('Enc book', 2020, 10);
// enc.copies = 5;
// console.log(enc);

// Asynchronous patterns in TS!!!

// Task 09.01
// console.log('Start');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// Task 09.02 PROMISES
// console.log('Start');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//       console.log(titles);
//       return titles.length;
//     })
//     // линейная цепочка then(если несколько ассинхронных операций)
//     .then(numberOfBooks => console.log(numberOfBooks))
//     .catch(reason => console.log(reason))
//     .finally(() => console.log('Complete'));
//
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(reason => console.log(reason))
//     .finally(() => console.log('Complete'));
// console.log('End');

//Async/Await
// Task 09.03
console.log('Start');
logSearchResults (Category.JavaScript)
    .then(console.log)
    .catch(console.log);
console.log('End');
