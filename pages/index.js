import Layout from "../components/Layout";
import Carousel, { loadCarousel } from "../components/Carousel";
import Movie, { loadMovie } from "../components/Movie";

export default function Home({ movie, carousel }) {
  return (
    <Layout>
      <Carousel data={carousel}></Carousel>
      <Movie title="电影" data={movie}></Movie>
    </Layout>
  );
}

export async function getStaticProps() {
  let { data: movie } = await loadMovie();
  let { data: carousel } = await loadCarousel();
  return {
    props: {
      movie,
      carousel,
    },
  };
}
