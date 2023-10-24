import { Hero, SearchBar, CustomFilter } from '@/components';

export default async function Home() {
  return (
    <main>
      <Hero />
      <div id="discover" className="mt-12 max-width padding-x padding-y">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore Cars</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="{fuel} " />
            <CustomFilter title="{gear}" />
          </div>
        </div>
      </div>
    </main>
  );
}
