import {Category} from "./enums";
import {Book, LibMgrCallback} from "./interfaces";
import {BookOrUndefined, BookProperties} from "./types";

export function getAllBooks(): readonly Book[] {
    const books = <const>[
        // const books: readonly object[] = <const>[
        {
            id: 1,
            title: "Refactoring JavaScript",
            author: "Evan Burchard",
            available: true,
            category: Category.JavaScript
        },
        {
            id: 2,
            title: "JavaScript Testing",
            author: "Liang Yuxian Eugene",
            available: false,
            category: Category.JavaScript
        },
        {
            id: 3,
            title: "CSS Secrets",
            author: "Lea Verou",
            available: true,
            category: Category.CSS
        },
        {
            id: 4,
            title: "Mastering JavaScript Object-Oriented Programming",
            author: "Andrea Chiarelli",
            available: true,
            category: Category.JavaScript
        }
    ];

    return books;
}

export function logFirstAvailable(books: readonly any[] = getAllBooks()): void {
    const numberOfBooks: number = books.length;
    let bookTitle = "";

    for (const book of books) {
        if (book.available) {
            bookTitle = book.title;
            break;
        }
        console.log(`Total number of books: ${numberOfBooks}`);
        console.log(`First available book: ${bookTitle}`);
    }
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
    const books: readonly any[] = getAllBooks();
    const titles: string[] = [];

    for (const book of books) {
        if (book.category === category) {
            titles.push(book.title);
        }
        return titles;
    }
}

export function logBookTitles(titles: string[]): void {
    for (const title of titles) {
        console.log(title);
    }
}

export function getBookAuthorByIndex(index: number): [string, string] {
    const books: readonly any[] = getAllBooks();
    const { title, author } = books[index];
    return [title, author];
}

// export function calcTotalPages(): bigint {
//   const data = <const>[
//     { lib: "libName1", books: 1_000_000_000, avgPagesPerBook: 250 },
//     { lib: "libName2", books: 5_000_000_000, avgPagesPerBook: 300 },
//     { lib: "libName3", books: 3_000_000_000, avgPagesPerBook: 280 }
//   ];
//
//   let result = data.reduce((acc: bigint, obj: any) => {
//     return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
//   }, 0n);
//
//   return result;
// }

export function getBookByID(id: number): BookOrUndefined {
    const books = getAllBooks();
    return books.find((book: any) => book.id === id);
}

export function createCustomerID(name: string, id: number): string {
    return `${id} - ${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer Name: ${name}`);

    if(age) {
        console.log(`Customer Age: ${age}`);
    }

    if(city) {
        console.log(`Customer City: ${city}`);
    }
}

export function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Checking out books for ${customer}`);

    const titles: string[] = [];

    for(const id of bookIDs) {
        const book = getBookByID(id);
        // if(book && book.available) {
        // Task 04.04 Optional chaining
        if(book?.available) {
            titles.push(book.title);
        }
    }
    return titles;
}

//function overloading
export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: any[]): string[] {
    const books: readonly any[] = getAllBooks();

    if(args.length === 0) {
        return [];
    }
    if(args.length === 1) {
        const arg = args[0];

        if(typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        }
        if(typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
        return [];
    }
    if(args.length === 2) {
        const [id, available] = args;

        if(typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.available === available && book.id === id).map(book => book.title);
        }
        return [];
    }

    return [];
}

// Assertion functions (функции утверждения)
export function assertStringValue(value: string): asserts value is string {
    if(typeof value !== 'string'){
        throw new Error("value should have been a string");
    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);

    return [...title].reverse().join('');
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

// 04/05
export function getBookProp(book: Book, prop: BookProperties): any {
    if(typeof book[prop] === 'function') {
        // return book[prop][name];
        return (book[prop] as Function).name;
    }
    return book[prop];
}

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.slice(2);
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);

            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }
        }
        catch (error) {
            callback(error, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log(`Error message: ${err.message}`);
    } else {
        console.log(titles);
    }
}

//Promises!!!!
export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
                const titles = getBookTitlesByCategory(category);

                if (titles.length > 0) {
                    resolve(titles);
                } else {
                    reject('No books found');
                }
        }, 2000);
    })
}

//Asynchronous functions(Async/Await) - всегда возвращает Promise
export async function logSearchResults (category: Category): Promise<string[]> {
    const titles = await getBooksByCategoryPromise(category);
    console.log(titles.length);
    return titles;
}
