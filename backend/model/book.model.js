import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, default: 0 },
  category: { type: String, required: true },
  image: { type: String, default: 'https://picsum.photos/200/300?random=110' },
  title: { type: String, required: true },
  description: { type: String, default: 'No description available' },
});
const Book = mongoose.model("Book", bookSchema);

export default Book;
