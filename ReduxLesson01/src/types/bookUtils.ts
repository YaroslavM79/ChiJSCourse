import { Book } from './Book';

export const generateRandomBook = (): Book => ({
  id: Math.floor(Math.random() * 10000),
  title: `Book Title ${Math.floor(Math.random() * 100)}`,
  author: `Author ${Math.floor(Math.random() * 100)}`,
  rating: +(Math.random() * 5).toFixed(1),
  genre: ['Fiction', 'Non-fiction', 'Science Fiction', 'Fantasy'][Math.floor(Math.random() * 4)],
  description: 'This is a randomly generated book description.',
  imageUrl: "https://www.lactame.com/github/image-js/image-js/3073b80c7d626196cb669f9d617f491a8338ca66/test/img/taxi/original.jpeg"
});
