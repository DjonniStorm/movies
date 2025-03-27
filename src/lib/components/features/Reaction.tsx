'use client';

import { useState, type JSX } from 'react';
import { useMoviesStore } from '@/lib/store/moviesStore';
import { DislikeReaction, LikeReaction } from './Reactions';

type ReactionProps = {
    id: string;
};

export const Reaction = ({ id }: ReactionProps): JSX.Element => {
    const { reactItem } = useMoviesStore();
    const [like, setLike] = useState<boolean>(false);

    const handleLike = () => {
        reactItem(id, 'like');
        if (like) {
            setLike(false);
            return;
        }
        setLike(true);
    };

    const handleDislike = () => {
        reactItem(id, 'dislike');
    };

    return (
        <div className="flex justify-around items-center">
            <LikeReaction
                onClick={handleLike}
                width={30}
                height={30}
                bg={like ? 'like' : 'none'}
            />
            <DislikeReaction onClick={handleDislike} width={30} height={30} />
        </div>
    );
};
