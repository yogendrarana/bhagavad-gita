import { BOOKS } from "@/data/books-data";

// components
import Navbar from "@/components/layout/navbar";
import BookCard from "@/components/util/book-card";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="h-ful px-[var(--px)] flex flex-col">
      <Navbar />

      <div className="h-[50vh] rounded-lg flex flex-col justify-center items-center">
          <p> One stop for all hindu religious books. </p>
          <p>We have a collection of books on various topics like Ramayan, Mahabharat, Bhagwat Geeta, Vedas, Upanishads, Puranas, etc.</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {BOOKS.map((book, index) => (<BookCard key={index} book={book} />))}
      </div>

      <div className="border-t">
        <Footer />
      </div>
    </div>
  );
}
