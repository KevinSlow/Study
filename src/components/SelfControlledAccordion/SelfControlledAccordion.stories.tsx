import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {SelfControlledAccordion} from "./SelfControlledAccordion";




export default {
    title: 'SelfControlledAccordion Story',
    component: SelfControlledAccordion,
}

export const ModeChanging = () => {
    return <SelfControlledAccordion titleValue={"Third"} />
};