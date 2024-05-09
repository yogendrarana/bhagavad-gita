import { BOOKS } from "@/data/books-data";

// components
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Banner from "@/components/layout/banner";
import BookCard from "@/components/custom/book-card";

export default function HomePage() {
  return (
    <div className="flex flex-col pb-[var(--px)] sm:pb-[var(--px-sm)] md:pb-[var(--px-md)] lg:pb-[var(--px-lg)] ">
      <Navbar />
      
      <Banner />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {BOOKS.map((book, index) => (<BookCard key={index} book={book} />))}
      </div>

      <div className="mt-4 rounded-lg">
        <Footer />
      </div>
    </div>
  );
}