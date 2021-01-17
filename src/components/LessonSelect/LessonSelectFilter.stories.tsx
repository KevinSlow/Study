import React, {useMemo, useState} from 'react';
import {Select} from "./LessonSelect"


export default {
    title: 'LessonSelect Story',
    component: Select,
}


export const WithFilterCity = () => {


    const arr = [
        {countryID: "+375", value: "1", title: "Minsk", country: "Belarus"},
        {countryID: "+375", value: "1", title: "Mogilev", country: "Belarus"},
        {countryID: "+380", value: "1", title: "Kiev", country: "Ukraine"},
        {countryID: "+380", value: "1", title: "Lugansk", country: "Ukraine"},
        {countryID: "+7", value: "1", title: "Moskow", country: "Russia"},
        {countryID: "+7", value: "1", title: "Rostow", country: "Russia"},
    ]
    const FilteredArrayByUkraine = useMemo(() => {
        const newArray = arr.filter(item => {
            return item.countryID.includes("380");
        })
        return newArray;
    }, [arr])

    const filteredArrayByBelarus = useMemo(() => {
        const newArray = arr.filter(item => {
            return item.countryID.includes("+375");
        })
        return newArray;
    }, [arr])

    const filteredArrayByRussia = useMemo(() => {
        const newArray = arr.filter(item => {
            return item.countryID.includes("+7");
        })
        return newArray;
    }, [arr])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState("1");

    return <>

        <Select
            onChange={setValue}
            value={value}
            items={FilteredArrayByUkraine}
        />

        <Select
            onChange={setValue}
            value={value}
            items={filteredArrayByBelarus}
        />

        <Select
            onChange={setValue}
            value={value}
            items={filteredArrayByRussia}
        />
    </>
}

const withValue = React.memo(WithFilterCity)
