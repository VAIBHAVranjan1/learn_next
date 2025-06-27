import Search from "@/components/Search";
export default async function Home({searchParams}: {searchParams: Promise<{query?: string }>}) {
  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, <br />Connect with, Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Votes On Pitches, and Get Noticed in Virtual Competetions.
        </p>
        <Search query ={query}/>
      </section>
    </>
  );
}
