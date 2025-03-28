import { cn } from '@/lib/utils';

type FilterProps = {
    width: number;
    height: number;
    color: string;
    className: string;
};

const Filter = ({ width, height, color, className }: FilterProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill={color}
        viewBox="0 -960 960 960"
        className={cn(className)}
    >
        <path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z" />
    </svg>
);
export { Filter };
