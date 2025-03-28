import { Movie, MoviesArraySchema } from '@/lib/components/movieSchema';

export const getMovies = async (): Promise<Array<Movie> | Error> => {
    // return new Promise((resolve) => {
    //     const data = [
    //         {
    //             id: '1',
    //             name: 'Темный рыцарь',
    //             year: 2008,
    //             description:
    //                 'Бэтмен сталкивается с Джокером, который сеет хаос в Готэме. Эпичная битва добра и зла с потрясающими спецэффектами.',
    //             shortDescription:
    //                 'Бэтмен против Джокера в мрачной борьбе за Готэм.',

    //             ageRating: 16,
    //             poster: {
    //                 url: 'https://image.openmoviedb.com/kinopoisk-images/10953618/5f4ebe51-29a9-4faf-bc24-e098ab7e8885/orig',
    //                 previewUrl:
    //                     'https://image.openmoviedb.com/kinopoisk-images/12345/dark-knight-preview.jpg',
    //             },
    //         },
    //         {
    //             id: '2',
    //             name: 'Начало',
    //             year: 2010,
    //             description:
    //                 'Вор, специализирующийся на краже секретов из снов, получает необычное задание — внедрить идею в подсознание.',
    //             shortDescription: 'Головоломка о снах внутри снов.',

    //             ageRating: 12,
    //             poster: {
    //                 url: 'https://image.openmoviedb.com/kinopoisk-images/10953618/5f4ebe51-29a9-4faf-bc24-e098ab7e8885/orig',
    //                 previewUrl:
    //                     'https://image.openmoviedb.com/kinopoisk-images/67890/inception-preview.jpg',
    //             },
    //         },
    //         {
    //             id: '3',
    //             name: 'Планета Земля',
    //             type: 'movie',
    //             year: 2006,
    //             description:
    //                 'Удивительное путешествие по самым красивым и диким уголкам нашей планеты, снятое с невероятной детализацией.',
    //             shortDescription: 'Визуально потрясающий док о природе.',

    //             ageRating: 0,
    //             poster: {
    //                 url: 'https://image.openmoviedb.com/kinopoisk-images/10953618/5f4ebe51-29a9-4faf-bc24-e098ab7e8885/orig',
    //                 previewUrl:
    //                     'https://image.openmoviedb.com/kinopoisk-images/45678/planet-earth-preview.jpg',
    //             },
    //         },
    //         {
    //             id: '4',
    //             name: 'Планета Земля',
    //             type: 'movie',
    //             year: 2006,
    //             description:
    //                 'Удивительное путешествие по самым красивым и диким уголкам нашей планеты, снятое с невероятной детализацией.',
    //             shortDescription: 'Визуально потрясающий док о природе.',

    //             ageRating: 0,
    //             poster: {
    //                 url: '',
    //                 previewUrl:
    //                     'https://image.openmoviedb.com/kinopoisk-images/45678/planet-earth-preview.jpg',
    //             },
    //         },
    //     ] as Array<Movie>;
    //     setTimeout(() => {
    //         resolve(data);
    //     }, 2000);
    // });

    // throw new Error('Failed to fetch movies');
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL!, {
            method: 'GET',
            headers: {
                'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY!,
            },
            next: {
                revalidate: 1000,
            },
        });
        if (!res.ok) {
            throw new Error('Failed to fetch movies');
        }
        const data = await res.json();

        const result = MoviesArraySchema.safeParse(data.docs);
        if (!result.success) {
            console.warn(result.error?.issues);
            throw new Error(
                `Failed to parse movies schema: ${JSON.stringify(result.error?.issues)}`,
            );
        }

        console.log(data.docs);
        return data.docs;
    } catch (e: unknown) {
        console.warn(e);
        if (e instanceof Error) {
            throw new Error(e.message);
        }
        throw new Error('хз что');
    }
};
