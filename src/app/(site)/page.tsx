import { BOOKS } from "@/data/books-data";

// components
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import BookCard from "@/components/custom/book-card";

export default function Home() {
  return (
    <div className=" h-ful px-[var(--px)] sm:px-[var(--sm-px)] flex flex-col " >
      <Navbar />

      <div className="h-[50vh] rounded-lg flex flex-col justify-center items-center">
        <p className="text-center">One stop for all hindu religious books. </p>
        <p className="text-center">We have a collection of books on various topics like Ramayan, Mahabharat, Bhagwat Geeta, Vedas, Upanishads, Puranas, etc.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {BOOKS.map((book, index) => (<BookCard key={index} book={book} />))}
      </div>

      <div className="py-8">
        <Footer />
      </div>
    </div>
  );
}
