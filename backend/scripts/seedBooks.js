// import mongoose from 'mongoose';
// import { Book } from '../models/bookModel.js';
// import { mongoDBURL } from '../config.js'; // Import mongoDBURL from config.js

// mongoose.connect(mongoDBURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
  

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// const seedBooks = async () => {
//   try {
//     await Book.deleteMany({}); // Clear existing books
    
//     const books = [
//       {
//         title: 'To Kill a Mockingbird',
//         author: 'Harper Lee',
//         publishYear: 1960,
//       },
//       {
//         title: '1984',
//         author: 'George Orwell',
//         publishYear: 1949,
//       },
//       {
//         title: 'The Catcher in the Rye',
//         author: 'J.D. Salinger',
//         publishYear: 1951,
//       },
//       {
//         title: 'Pride and Prejudice',
//         author: 'Jane Austen',
//         publishYear: 1813,
//       },
//       {
//         title: 'The Hobbit',
//         author: 'J.R.R. Tolkien',
//         publishYear: 1937,
//       },
//       {
//         title: 'To the Lighthouse',
//         author: 'Virginia Woolf',
//         publishYear: 1927,
//       },
//       {
//         title: 'Moby Dick',
//         author: 'Herman Melville',
//         publishYear: 1851,
//       },
//       {
//         title: 'The Grapes of Wrath',
//         author: 'John Steinbeck',
//         publishYear: 1939,
//       },
//       {
//         title: 'Slaughterhouse-Five',
//         author: 'Kurt Vonnegut',
//         publishYear: 1969,
//       },
//       {
//         title: 'The Lord of the Rings',
//         author: 'J.R.R. Tolkien',
//         publishYear: 1954,
//       },
//       {
//         title: 'Brave New World',
//         author: 'Aldous Huxley',
//         publishYear: 1932,
//       },
//       {
//         title: 'The Great Gatsby',
//         author: 'F. Scott Fitzgerald',
//         publishYear: 1925,
//       },
//       {
//         title: 'The Brothers Karamazov',
//         author: 'Fyodor Dostoevsky',
//         publishYear: 1880,
//       },
//       {
//         title: 'One Hundred Years of Solitude',
//         author: 'Gabriel García Márquez',
//         publishYear: 1967,
//       },
//       {
//         title: 'The Stranger',
//         author: 'Albert Camus',
//         publishYear: 1942,
//       },
//     ];

//     await Book.insertMany(books);
//     console.log('Books seeded successfully!');
//     mongoose.connection.close();
//   } catch (err) {
//     console.error('Error seeding books:', err.message);
//     mongoose.connection.close();
//   }
// };

// seedBooks();
