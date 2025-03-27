'use client';

import { Dislike } from '../ui/Reaction/Dislike';
import { Like } from '../ui/Reaction/Like';

type ReactionProps = {
    onClick: () => void;
    width: number;
    height: number;
    bg?: 'none' | 'like';
};

export const LikeReaction = ({
    width,
    height,
    bg = 'none',
    onClick,
}: ReactionProps) => (
    <div onClick={onClick}>
        <Like
            width={width}
            height={height}
            color={bg === 'none' ? '#000' : '#F00'}
        />
    </div>
);

export const DislikeReaction = ({
    width,
    height,
    bg = 'none',
    onClick,
}: ReactionProps) => (
    <div onClick={onClick}>
        <Dislike
            width={width}
            height={height}
            color={bg === 'none' ? '#000' : '#F00'}
        />
    </div>
);
