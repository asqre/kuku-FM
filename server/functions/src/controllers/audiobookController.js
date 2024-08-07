import Audiobook from "../models/audiobookModel.js";
import Review from "../models/reviewModel.js";

export const addSampleAudioBooks = async (req, res) => {
  try {
    const audiobooks = [
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        coverImage: "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg",
        genre: "Fiction",
        description: "Set in the Depression-era Southern United States, the story follows a young girl and her father, a lawyer defending a black man accused of a crime.",
        rating: 0.0
      },
      {
        title: "1984",
        author: "George Orwell",
        coverImage: "https://m.media-amazon.com/images/I/519zR2oIlmL._AC_UF1000,1000_QL80_.jpg",
        genre: "Non-Fiction",
        description: "A dystopian novel set in a totalitarian society, exploring themes of mass surveillance and control.",
        rating: 0.0
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        coverImage: "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
        genre: "Fiction",
        description: "A tale of the American Dream set in the Roaring Twenties, exploring themes of wealth, love, and social status.",
        rating: 0.0
      },
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        coverImage: "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
        genre: "Mystery",
        description: "A classic novel of manners, following the romantic entanglements of the Bennet sisters in Georgian England.",
        rating: 0.0
      },
      {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        coverImage: "https://m.media-amazon.com/images/I/81XSN3hA5gL._AC_UF1000,1000_QL80_.jpg",
        genre: "Non-Fiction",
        description: "A comedic science fiction series following the misadventures of Arthur Dent, last surviving human, through space.",
        rating: 0.0
      },
      {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        coverImage: "https://m.media-amazon.com/images/I/81iqZ2HHD-L._AC_UF1000,1000_QL80_.jpg",
        genre: "Fantasy",
        description: "The first book in the Harry Potter series, introducing the young wizard and his magical world.",
        rating: 0.0
      },
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        coverImage: "https://m.media-amazon.com/images/I/91HPG31dTwL._AC_UF1000,1000_QL80_.jpg",
        genre: "Fiction",
        description: "A classic coming-of-age story following the experiences of Holden Caulfield in New York City.",
        rating: 0.0
      },
      {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        coverImage: "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
        genre: "Fantasy",
        description: "A fantasy novel about the quest of home-loving hobbit Bilbo Baggins to win a share of the treasure guarded by a dragon.",
        rating: 0.0
      },
      {
        title: "Dune",
        author: "Frank Herbert",
        coverImage: "https://upload.wikimedia.org/wikipedia/en/d/de/Dune-Frank_Herbert_%281965%29_First_edition.jpg",
        genre: "Non-Fiction",
        description: "An epic science fiction novel set in a distant future amidst a feudal interstellar society.",
        rating: 0.0
      },
      {
        title: "The Alchemist",
        author: "Paulo Coelho",
        coverImage: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg",
        genre: "Fiction",
        description: "A philosophical novel about a young Andalusian shepherd's journey to find his destiny.",
        rating: 0.0
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

export const getAudioBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const audioBook = await Audiobook.findById(id);

    if (!audioBook) {
      return res.status(404).send({
        success: false,
        message: "Audiobook not found",
      });
    }

    const reviews = await Review.find({ audiobookId: id });
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0;

    audioBook.rating = Number(averageRating.toFixed(1));
    await audioBook.save();

    res.status(200).send({
      success: true,
      message: "Audiobook fetched successfully",
      audiobook: audioBook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
}