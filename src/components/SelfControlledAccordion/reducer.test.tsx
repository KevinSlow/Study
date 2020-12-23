import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test("reducer should throw an error because action type is incorrect", () => {
    //data
    const state:StateType = {
        collapsed: true
    }
    //action
    expect(() => reducer(state,
        {type: "FAKE"}))
        .toThrowError()
    //expectation
    expect(newState.collapsed).toBe(false)
})

