import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion Story',
    component: Accordion,
}

const callback = action("accordion mode change event fired")
const onChangeCallback = action("some item has been clicked")

export const CollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={false} onClick={callback} items={[]}
                                              onChange={callback}/>;
export const UnCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onClick={callback}
                                                items={[{title: "Dimich", value: 1}, {
                                                    title: "Sergey",
                                                    value: 2
                                                }, {title: "Artem", value: 3}]}
                                                onChange={onChangeCallback}

/>;

export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return <Accordion titleValue={"Menu"}
                      collapsed={collapsed}
                      onClick={() => setCollapsed(!collapsed)}
                      items={[{title: "Dimich", value: 1}, {title: "Sergey", value: 2}, {title: "Artem", value: 3}]}
                      onChange={() => {
                          return <p>This User is happy</p>
                      }}/>
};