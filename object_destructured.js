// object initialised by using either {} or Object()
const book = {
    title : `manusia hebat`,
    author : `apep`,
    pages : 200,
    publisher : {
        fullName : `Gajah Besar`,
        address : `Yogyakarta`
    }
}
console.log(book);

// // destructuring? we break into smaller parts
// // remember calling one by one? book.title? no need anymore!
// const {title, author, pages, publisher:{fullName, address}} = book
// console.log(title,author,pages,fullName,address);

// using strap operator
const {pages, ...others} = book;
console.log(pages);
console.log(others);
