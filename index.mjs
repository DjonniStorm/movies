const urlString =
    'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=50&selectFields=id&selectFields=name&selectFields=description&selectFields=shortDescription&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=genres&selectFields=poster&notNullFields=id&notNullFields=name&notNullFields=description&notNullFields=shortDescription&notNullFields=type&notNullFields=year&notNullFields=ageRating&notNullFields=genres.name&notNullFields=poster.url&type=movie';
// 'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=50&selectFields=id&selectFields=name&selectFields=description&selectFields=shortDescription&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=genres&selectFields=poster&selectFields=logo&notNullFields=id&notNullFields=name&notNullFields=description&notNullFields=shortDescription&notNullFields=type&notNullFields=year&notNullFields=ageRating&notNullFields=genres.name&notNullFields=poster.url&notNullFields=logo.url&type=movie';
// 'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&selectFields=id&selectFields=name&selectFields=description&selectFields=shortDescription&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=genres&selectFields=poster&selectFields=logo&selectFields=persons&notNullFields=id&notNullFields=name&notNullFields=description&notNullFields=shortDescription&notNullFields=type&notNullFields=year&notNullFields=ageRating&notNullFields=genres.name&notNullFields=poster.url&notNullFields=logo.url&notNullFields=persons.id&notNullFields=persons.name&type=movie';
// "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=50&selectFields=id&selectFields=name&selectFields=enName&selectFields=description&selectFields=shortDescription&selectFields=type&selectFields=isSeries&selectFields=status&selectFields=year&selectFields=releaseYears&selectFields=rating&selectFields=ageRating&selectFields=poster&selectFields=logo&notNullFields=id&notNullFields=name&notNullFields=enName&notNullFields=description&notNullFields=shortDescription&notNullFields=typeNumber&notNullFields=isSeries&notNullFields=status&notNullFields=year&notNullFields=ageRating&notNullFields=poster.url&notNullFields=logo.url"
// "https://api.kinopoisk.dev/v1.4/studio?page=1&limit=50&selectFields=type&selectFields=movies&selectFields=updatedAt&selectFields=createdAt&notNullFields=id&notNullFields=subType&notNullFields=title&notNullFields=type&notNullFields=movies.id&notNullFields=updatedAt&notNullFields=createdAt"
// "https://api.kinopoisk.dev/v1.4/"
// "https://api.jikan.moe/v4/genres/anime"
// "https://api.jikan.moe/v4/"
// "https://anime-facts-rest-api.herokuapp.com/api/v1"
// "https://dog-api.kinduff.com/api/facts?number=5";
// "/v1.4/movie/random"

async function tryFetch(url) {
    const res = await fetch(url, {
        headers: {
            'X-API-KEY': 'BYB6VFC-HMN4MZG-Q8VZA0Q-PPSSA3Y',
        },
    });
    //   const res = await fetch(url, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    if (!res.ok) {
        console.log('пизда', res.status);
    }
    console.log('res', res);

    const data = await res.json();

    return data;
}

async function getMovies() {
    const data = await tryFetch(urlString);
    if (!data) return;

    // Берем массив фильмов из поля docs
    const movies = data.docs;

    // console.log('movies array:', movies);
    console.log('first movie:', movies);
    // const { id, year, rating, poster, genres } = movies[0];
    // console.log('id:', id, typeof id);
    // console.log('year:', year, typeof year);
    // console.log('rating:', rating);
    // console.log('poster:', poster);
    // console.log('genres:', genres);

    return movies;
}

getMovies();
