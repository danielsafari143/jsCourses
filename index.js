const Books = [];
function Library(books) {
  this.books = books;
  this.display = function display(initialObj, arg) {
    if (arg === null && initialObj !== null) {
      for (let i = 0; i < initialObj.length; i += 1) {
        document.getElementById('books').innerHTML += `
            <h3>${initialObj[i].author}</h3>
            <p>${initialObj[i].title}</p>
            <button id='remove' onClick='bi.remove(${i})'>Remove</button>
            <hr>
            `;
      }
    } else if (arg === null) {
      localStorage.setItem('datas', JSON.stringify(this.books));
      document.getElementById('books').innerHTML = '';
      for (let i = 0; i < JSON.parse(localStorage.getItem('datas')).length; i += 1) {
        document.getElementById('books').innerHTML += `
            <h3>${JSON.parse(localStorage.getItem('datas'))[i].author}</h3>
            <p>${JSON.parse(localStorage.getItem('datas'))[i].title}</p>
            <button id='remove' onClick='bi.remove(${i})'>Remove</button>
            <hr>
            `;
      }
    } else {
      localStorage.setItem('datas', JSON.stringify(this.books));
      document.getElementById('books').innerHTML = '';
      for (let i = 0; i < arg.length; i += 1) {
        document.getElementById('books').innerHTML += `
            <h3>${arg[i].author}</h3>
            <p>${arg[i].title}</p>
            <button id='remove' onClick='bi.remove(${i})'>Remove</button>
            <hr>
            `;
      }
    }
  };

  this.remove = function remove(ref) {
    this.books = JSON.parse(localStorage.getItem('datas'));
    this.books.splice(ref, 1);
    localStorage.setItem('datas', JSON.stringify(this.books));
    this.display(null, JSON.parse(localStorage.getItem('datas')));
    this.books = JSON.parse(localStorage.getItem('datas'));
  };

  this.add = function add(author, title) {
    const hauteur = document.getElementById(author).value;
    const titre = document.getElementById(title).value;
    if (titre !== '' && hauteur !== '') {
      this.books = JSON.parse(localStorage.getItem('datas'));
      this.books.push({ author: hauteur, title: titre });
      localStorage.setItem('datas', JSON.stringify(this.books));
      document.getElementById(author).value = '';
      document.getElementById(title).value = '';
      this.display(null, JSON.parse(localStorage.getItem('datas')));
    }
  };
}
const bi = new Library(Books);
bi.display(JSON.parse(localStorage.getItem('datas')), null);
