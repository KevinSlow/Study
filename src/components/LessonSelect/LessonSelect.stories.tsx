import React, {useState} from 'react';
import {Select} from "./LessonSelect"


export default {
    title: 'LessonSelect Story',
    component: Select,
}


export const withoutValueMemo = () => {
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


export const withValueOne = () => {
    const arr = [{value: "1", title: "Minsk"},
        {value: "2", title: "Kiev"},
        {value: "3", title: "Moscow"}
    ]
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState("1");

    return <>
        <Select
            onChange={setValue}
            value={value}
            items={arr}
        />
    </>
}
const withoutValue = React.memo(withoutValueMemo)
const withValue = React.memo(withValueOne)
