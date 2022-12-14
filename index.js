const Books = [];
function Library(books) {
  this.books = books;
  this.display = function (arg = null) {
    if (arg === null) {
      for (let i = 0; i < Books.length; i++) {
        document.getElementById('books').innerHTML += `
					<h3>${this.books[i].author}</h3>
					<p>${this.books[i].title}</p>
					<button id='remove' onClick='bi.remove(${i})'>Remove</button>
					<hr>
					`;
      }
    } else {
      document.getElementById('books').innerHTML = '';
      for (let i = 0; i < arg.length; i += 1) {
        document.getElementById('books').innerHTML += `
						<h3>${this.books[i].author}</h3>
						<p>${this.books[i].title}</p>
						<button id='remove' onClick='bi.remove(${i})'>Remove</button>
						<hr>
						`;
      }
    }
  };

  this.remove = function (ref) {
    this.books.splice(ref, 1);
    this.display(this.books);
  };

  this.add = function (author, title) {
    const hauteur = document.getElementById(author).value;
    const titre = document.getElementById(title).value;

    this.books.push({ author: hauteur, title: titre });
    this.display(this.books);
  };
}
const bi = new Library(Books);
bi.display();