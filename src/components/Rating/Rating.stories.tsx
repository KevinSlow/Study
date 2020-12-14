import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';
import {RaringValueType, Rating} from "./Rating";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Rating Story',
    component: Rating,
}

export const EmptyStars = () => <Rating value={0} onClick={a => a}/>;
export const Rating1 = () => <Rating value={1} onClick={a => a}/>;
export const Rating2 = () => <Rating value={2} onClick={a => a}/>;
export const Rating3 = () => <Rating value={3} onClick={a => a}/>;
export const Rating4 = () => <Rating value={4} onClick={a => a}/>;
export const Rating5 = () => <Rating value={5} onClick={a => a}/>;
export const RatingChanging = () => {
    const [rating, setRating] = useState<RaringValueType>(3);
    return <Rating value={rating} onClick={setRating}/>
};