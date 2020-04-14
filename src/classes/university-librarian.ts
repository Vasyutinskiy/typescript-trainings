import * as Interfaces from "../interfaces";
import {sealed, logger, writable, format, logMethod, logParameter} from "../decorators";

// @sealed('UniversityLibrarian')
// @logger
export class UniversityLibrarian implements Interfaces.Librarian {
    @format() name: string;
    email: string;
    department: string;

    @logMethod
    assistCustomer(@logParameter custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }

    // @writable(true)
    assistFaculty() {
        console.log('Assist faculty');
    }

    // @writable(false)
    techCommunity() {
        console.log('Teaching community');
    }
}
