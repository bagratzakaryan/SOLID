// interface segregation

// interface ILibraryItem {
//   libraryId: string;
//   title: string;
//   author: string;
//   borrowDate: Date;
//   borrower: string;
//   checkoutDurationsInDays: number;
//   pages: number;
//   checkIn(): void;
//   checkout(borrower: string): void;
//   getDueDate(): Date;
// }

// class ReferenceBook implements ILibraryItem {
//   libraryId: string;
//   title: string;
//   author: string;
//   borrowDate: Date;
//   borrower: string;
//   checkoutDurationsInDays = 0;
//   pages: number;
//   checkIn(): void {
//     throw Error("no implemented");
//   }
//   checkout(borrower: string): void {
//     throw Error("no implemented");
//   }
//   getDueDate(): Date {
//     throw Error("no implemented");
//   }
// }

// class Book implements ILibraryItem {
//   libraryId: string;
//   title: string;
//   author: string;
//   borrowDate: Date;
//   borrower: string;
//   checkoutDurationsInDays = 14;
//   pages: number;

//   checkIn(): void {
//     this.borrower = "";
//   }
//   checkout(borrower: string): void {
//     this.borrower = borrower;
//     this.borrowDate = new Date();
//   }
//   getDueDate(): Date {
//     return new Date(
//       this.borrowDate.getTime() + this.checkoutDurationsInDays * 24 * 60
//     );
//   }
// }

// class AudioBook implements ILibraryItem {
//   libraryId: string;
//   title: string;
//   author: string;
//   borrowDate: Date;
//   borrower: string;
//   checkoutDurationsInDays = 14;
//   pages: number = -1;
//   runtimeInMinutes: number;

//   checkIn(): void {
//     this.borrower = "";
//   }
//   checkout(borrower: string): void {
//     this.borrower = borrower;
//     this.borrowDate = new Date();
//   }
//   getDueDate(): Date {
//     return new Date(
//       this.borrowDate.getTime() + this.checkoutDurationsInDays * 24 * 60
//     );
//   }
// }

// class DVD implements ILibraryItem {
//   libraryId: string;
//   title: string;
//   author: string;
//   borrowDate: Date;
//   borrower: string;
//   checkoutDurationsInDays = 14;
//   pages: number = -1;
//   runtimeInMinutes: number;

//   checkIn(): void {
//     this.borrower = "";
//   }
//   checkout(borrower: string): void {
//     this.borrower = borrower;
//     this.borrowDate = new Date();
//   }
//   getDueDate(): Date {
//     return new Date(
//       this.borrowDate.getTime() + this.checkoutDurationsInDays * 24 * 60
//     );
//   }
// }

interface ILibraryItem {
  libraryId: string;
  title: string;
}

interface IBook extends ILibraryItem {
  author: string;
  pages: number;
}

interface IAudioBook extends ILibraryItem {
  runtimeInMinutes: number;
}

interface IBorrowableAudioBook extends IAudioBook, IBorrowable {}

interface IBorrowable extends ILibraryItem {
  borrowDate: Date;
  borrower: string;
  checkoutDurationsInDays: number;
  checkIn(): void;
  checkout(borrower: string): void;
  getDueDate(): Date;
}

interface IBorrowableBook extends IBorrowable, IBook {
  borrowDate: Date;
  borrower: string;
  checkoutDurationsInDays: number;
  checkIn(): void;
  checkout(borrower: string): void;
  getDueDate(): Date;
}

interface IDVD {
  actors: string[];
  runtimeInMinutes: number;
}

interface IBorrowableDVD extends IDVD, IBorrowable {}

class ReferenceBook implements IBook {
  libraryId: string;
  title: string;
  author: string;
  pages: number;
}

class Book implements IBorrowableBook {
  libraryId: string;
  title: string;
  author: string;
  borrowDate: Date;
  borrower: string;
  checkoutDurationsInDays = 14;
  pages: number;

  checkIn(): void {
    this.borrower = "";
  }
  checkout(borrower: string): void {
    this.borrower = borrower;
    this.borrowDate = new Date();
  }
  getDueDate(): Date {
    return new Date(
      this.borrowDate.getTime() + this.checkoutDurationsInDays * 24 * 60
    );
  }
}

class AudioBook implements IBorrowableAudioBook {
  libraryId: string;
  title: string;
  author: string;
  borrowDate: Date;
  borrower: string;
  checkoutDurationsInDays = 14;
  runtimeInMinutes: number;

  checkIn(): void {
    this.borrower = "";
  }
  checkout(borrower: string): void {
    this.borrower = borrower;
    this.borrowDate = new Date();
  }
  getDueDate(): Date {
    return new Date(
      this.borrowDate.getTime() + this.checkoutDurationsInDays * 24 * 60
    );
  }
}

class DVD implements IBorrowableDVD {
  libraryId: string;
  title: string;
  borrowDate: Date;
  borrower: string;
  checkoutDurationsInDays = 14;
  actors: string[];
  runtimeInMinutes: number;

  checkIn(): void {
    this.borrower = "";
  }
  checkout(borrower: string): void {
    this.borrower = borrower;
    this.borrowDate = new Date();
  }
  getDueDate(): Date {
    return new Date(
      this.borrowDate.getTime() + this.checkoutDurationsInDays * 24 * 60
    );
  }
}
