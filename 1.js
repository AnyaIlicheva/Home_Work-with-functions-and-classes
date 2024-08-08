class Library {
    #books=[];
    
    constructor(books) {
        // Проверка на дубликаты в массиве книг
        let uniqueBooks = new Set(books);
        if (uniqueBooks.size !== books.length) {
          throw new Error("Массив книг содержит дубликаты!");
        }
    
        // Создание массива из уникальных книг
        this.#books = Array.from(uniqueBooks);
      }
   
//позволяет добавлять книгу в список.
    addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error("Книга с таким названием уже есть в библиотеке");
    }
    this.#books.push(title);
    return this.#books;
  }
// позволит удалять книгу из списка по названию. 
  removeBook(titleToRemove) {
    if (!this.#books.includes(titleToRemove)) {
        throw new Error("Книги с таким названием нет в библиотеке");
      } 
    
      const index = this.#books.indexOf(titleToRemove); // Получаем индекс книги
    if (index !== -1) {
      this.#books.splice(index, 1); // Удаляем по индексу
    }
}
// будет проверять наличие книги в библиотеке
hasBook(title) {
    if (this.#books.includes(title)) {
        console.log(`Книга "${title}" есть в библиотеке`);
    } else {
        console.log(`Книги "${title}" нет в библиотеке`);
    }
}
// возвращает текущий список книг.
get allBooks() {
    return this.#books;
}

}
    //Проверка

    // const books0 = [  "Игра престолов", "Гарри Поттер", "Гарри Поттер", "Властелин колец"]; // Дубликат
    // const library0 = new Library(books0); //Ошибка: Массив книг содержит дубликаты!
    
    const books1 = [  "Игра престолов", "Гарри Поттер", "Властелин колец"]; 
    const library1 = new Library(books1);
    console.log(library1.allBooks); // ['Игра престолов', 'Гарри Поттер', 'Властелин колец']
    
    library1.addBook("Преступление и наказание");
    console.log(library1.allBooks); // ['Игра престолов', 'Гарри Поттер', 'Властелин колец', 'Преступление и наказание']

    // library1.addBook("Преступление и наказание");
    // console.log(library1.allBooks); // Ошибка: Книга с таким названием уже есть в библиотеке


    library1.removeBook("Гарри Поттер");
    console.log(library1.allBooks); // ['Игра престолов', 'Властелин колец', 'Преступление и наказание'] 

    // library1.removeBook("Гарри Поттер");
    // console.log(library1.allBooks); // Ошибка: Книги с таким названием нет в библиотеке

    library1.hasBook("Преступление и наказание");