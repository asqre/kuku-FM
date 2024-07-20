import Audiobook from "../models/audiobookModel.js";
import { faker } from "@faker-js/faker";

export const addFakerAudioBooks = async (req, res) => {
  const { count } = req.body.counts;

  try {
    const audiobooks = [];

    for (let i = 0; i < count; i++) {
      const audiobook = new Audiobook({
        title: faker.lorem.words(3),
        author: faker.internet.userName(),
        genre: faker.helpers.arrayElement([
          "Fiction",
          "Non-fiction",
          "Mystery",
          "Fantasy",
        ]),
        description: faker.lorem.paragraph(),
        coverImage: faker.image.avatar(),
        rating: faker.seed.random.number(5),
      });

      audiobooks.push(audiobook);
    }

    await Audiobook.insertMany(audiobooks);

    res.status(201).send({
      success: true,
      message: `${count} audiobooks added successfully`,
      audiobooks: audiobooks,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const addSampleAudioBooks = async (req, res) => {
  try {
    const audiobooks = [
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        coverImage: "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg",
        genre: "Fiction",
        description: "Set in the Depression-era Southern United States, the story follows a young girl and her father, a lawyer defending a black man accused of a crime.",
        rating: 4.8
      },
      {
        title: "1984",
        author: "George Orwell",
        coverImage: "https://m.media-amazon.com/images/I/519zR2oIlmL._AC_UF1000,1000_QL80_.jpg",
        genre: "Science Fiction",
        description: "A dystopian novel set in a totalitarian society, exploring themes of mass surveillance and control.",
        rating: 4.6
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        coverImage: "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
        genre: "Fiction",
        description: "A tale of the American Dream set in the Roaring Twenties, exploring themes of wealth, love, and social status.",
        rating: 4.5
      },
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        coverImage: "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
        genre: "Romance",
        description: "A classic novel of manners, following the romantic entanglements of the Bennet sisters in Georgian England.",
        rating: 4.7
      },
      {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        coverImage: "https://m.media-amazon.com/images/I/81XSN3hA5gL._AC_UF1000,1000_QL80_.jpg",
        genre: "Science Fiction",
        description: "A comedic science fiction series following the misadventures of Arthur Dent, last surviving human, through space.",
        rating: 4.5
      },
      {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        coverImage: "https://m.media-amazon.com/images/I/81iqZ2HHD-L._AC_UF1000,1000_QL80_.jpg",
        genre: "Fantasy",
        description: "The first book in the Harry Potter series, introducing the young wizard and his magical world.",
        rating: 4.9
      },
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        coverImage: "https://m.media-amazon.com/images/I/91HPG31dTwL._AC_UF1000,1000_QL80_.jpg",
        genre: "Fiction",
        description: "A classic coming-of-age story following the experiences of Holden Caulfield in New York City.",
        rating: 4.3
      },
      {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        coverImage: "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
        genre: "Fantasy",
        description: "A fantasy novel about the quest of home-loving hobbit Bilbo Baggins to win a share of the treasure guarded by a dragon.",
        rating: 4.7
      },
      {
        title: "Dune",
        author: "Frank Herbert",
        coverImage: "https://m.media-amazon.com/images/I/81ilt4oWUwL._AC_UF1000,1000_QL80_.jpg",
        genre: "Science Fiction",
        description: "An epic science fiction novel set in a distant future amidst a feudal interstellar society.",
        rating: 4.6
      },
      {
        title: "The Alchemist",
        author: "Paulo Coelho",
        coverImage: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg",
        genre: "Fiction",
        description: "A philosophical novel about a young Andalusian shepherd's journey to find his destiny.",
        rating: 4.7
      }
    ];

    const existingAudioBooks = await Audiobook.find({
      title: { $in: audiobooks.map((book) => book.title) },
    });

    if(existingAudioBooks.length > 0) {
      return res.status(400).send({
        success: false,
        message: "Sample audiobooks already exist",
        audiobooks: existingAudioBooks,
      });
    }

    const result = await Audiobook.insertMany(audiobooks);

    res.status(201).send({
      success: true,
      message: "Sample audiobooks added successfully",
      audiobooks: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getAdudiobooks = async (req, res) => {
  try {
    const audioBooks = await Audiobook.find();

    res.status(200).send({
      success: true,
      message: "Audiobooks fetched successfully",
      audiobooks: audioBooks,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};