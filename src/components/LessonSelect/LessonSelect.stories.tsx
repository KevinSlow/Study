import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Select} from "./LessonSelect"


export default {
    title: 'LessonSelect Story',
    component: Select,
}


export const withoutValue = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(null);
   return <>
        <Select
            onChange={setValue}
            items={[{value: "1", title: "Minsk"},
                {value: "2", title: "Kiev"},
                {value: "3", title: "Moscow"}
            ]}
            value={value}
        />
    </>
}

export const withValue = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState("1");

    return <>
        <Select
            onChange={setValue}
            value={value}
            items={[{value: "1", title: "Minsk"},
                {value: "2", title: "Kiev"},
                {value: "3", title: "Moscow"}
            ]}
        />
    </>
}