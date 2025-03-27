'use client';
import { v4 as uuidv4 } from 'uuid';
import { zodResolver } from '@hookform/resolvers/zod';
import type { JSX } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/Button/Button';
import { useMoviesStore } from '@/lib/store/moviesStore';
import { Movie } from '../movieSchema';

const formSchema = z.object({
    name: z.string({
        message: 'Необходимо название фильма',
    }),
    year: z
        .string()
        .refine((val) => Number.isFinite(+val), { message: 'Необходимо число' })
        .refine((val) => +val >= 1895, { message: 'Фильмы тогда не выпускали' })
        .refine((val) => +val <= 2077, { message: 'Многовато' }),
    description: z
        .string({
            message: 'ну не очень много написать надо',
        })
        .min(10, 'Интересный фильм )')
        .max(1000, 'Хорошая получилась история @Макс Лавров'),
    cover: z
        .string({
            message: 'нужна ссылка',
        })
        .url({
            message: 'это не url',
        }),
    shortDescription: z
        .string({
            message: 'Необходима аннотация',
        })
        .min(5, 'Ну немного хотя бы')
        .max(500, 'Переборщил'),
    ageRating: z
        .string()
        .refine((val) => Number.isFinite(+val), { message: 'Необходимо число' })
        .refine((val) => +val <= 21, { message: 'Слишком жёсткий для сервиса' })
        .refine((val) => +val >= 0, { message: 'По приколу' }),
});

type FormFields = z.infer<typeof formSchema>;

export const ProductForm = (): JSX.Element => {
    const { addItem } = useMoviesStore();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormFields>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormFields) => {
        if (Object.keys(errors).length) {
            console.warn(errors);
            return;
        }

        const newMovie: Movie = {
            name: data.name,
            year: +data.year,
            description: data.description,
            shortDescription: data.shortDescription,
            ageRating: +data.ageRating,
            id: uuidv4(),
            poster: {
                url: data.cover,
                previewUrl: data.cover,
            },
        };

        addItem(newMovie);

        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });

        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-11/12 md:w-5/12 bg-primary/10 border border-secondary rounded-xl p-2 md:p-10 gap-1 md:gap-5 items-center justify-center"
        >
            <label className="flex flex-col w-10/12">
                <span>Введите название</span>
                <input
                    className="border border-secondary rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-secondary placeholder:text-secondary"
                    type="text"
                    placeholder="название"
                    required
                    {...register('name')}
                />
                {errors.name && (
                    <span className="text-red-600 text-center">
                        {errors.name.message}
                    </span>
                )}
            </label>
            <label className="flex flex-col w-10/12">
                <span>Введите год выхода</span>
                <input
                    type="number"
                    {...register('year')}
                    placeholder="год выхода"
                    className="border border-secondary rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-secondary placeholder:text-secondary"
                />
                {errors.year && (
                    <span className="text-red-600 text-center">
                        {errors.year.message}
                    </span>
                )}
            </label>
            <label className="flex flex-col w-10/12">
                <span>Введите возрастной рейтинг</span>
                <input
                    type="number"
                    {...register('ageRating')}
                    placeholder="возрастной рейтинг"
                    className="border border-secondary rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-secondary placeholder:text-secondary"
                />
                {errors.ageRating && (
                    <span className="text-red-600 text-center">
                        {errors.ageRating.message}
                    </span>
                )}
            </label>
            <label className="flex flex-col w-10/12">
                <span>Введите ссылку на обложку</span>
                <input
                    type="url"
                    {...register('cover')}
                    placeholder="ссылка на картинку"
                    className="border border-secondary rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-secondary placeholder:text-secondary"
                />
                {errors.cover && (
                    <span className="text-red-600 text-center">
                        {errors.cover.message}
                    </span>
                )}
            </label>
            <label className="flex flex-col w-10/12">
                <span>Введите аннотацию</span>
                <textarea
                    {...register('shortDescription')}
                    placeholder="аннотация"
                    className="resize-none h-14 border border-secondary rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-secondary placeholder:text-secondary"
                />
                {errors.shortDescription && (
                    <span className="text-red-600 text-center">
                        {errors.shortDescription.message}
                    </span>
                )}
            </label>
            <label className="flex flex-col w-10/12">
                <span>Введите описание</span>
                <textarea
                    placeholder="описание"
                    {...register('description')}
                    className="resize-none h-20 border border-secondary rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-secondary placeholder:text-secondary"
                />
                {errors.description && (
                    <span className="text-red-600 text-center">
                        {errors.description.message}
                    </span>
                )}
            </label>
            <Button
                type="submit"
                disabled={isSubmitting}
                className="text-sm md:text-xl p-2 md:p-5"
            >
                {isSubmitting && <span>Добавляется...</span>}
                {!isSubmitting && <span>Добавить фильм</span>}
            </Button>
        </form>
    );
};
