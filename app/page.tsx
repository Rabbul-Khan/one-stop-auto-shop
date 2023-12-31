import { Hero, SearchBar, CustomFilter, CarCard } from '@/components';
import { fetchCars } from '@/utils';

export default async function Home() {
  const allCars = await fetchCars();
  //console.log(allCars);
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

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
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Ooops no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
