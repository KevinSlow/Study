import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {UncontrolledRating} from "./UncontrolledRating";






export default {
    title: 'UncontrolledRating Story',
    component: UncontrolledRating,
}

const callback = action("rating changed inside")

export const UncontrolledRating0 = () => <UncontrolledRating defaultValue={0} onChange={callback}/>;
export const UncontrolledRating1 = () => <UncontrolledRating defaultValue={1} onChange={callback}/>;
export const UncontrolledRating2 = () => <UncontrolledRating defaultValue={2} onChange={callback}/>;
export const UncontrolledRating3 = () => <UncontrolledRating defaultValue={3} onChange={callback}/>;
export const UncontrolledRating4 = () => <UncontrolledRating defaultValue={4} onChange={callback}/>;
export const UncontrolledRating5 = () => <UncontrolledRating defaultValue={5} onChange={callback}/>;
{
    //export const ModeChanging = () => {
    //     const [value, setValue] = useState<boolean>(true);
    //    return <UncontrolledRating />
    //};
}



