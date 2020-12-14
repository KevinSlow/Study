import React, { useState } from "react";


type ItemType = {
    title: string,
    value: any
}

type SelectPropsType = {
    value: any,
    onChange: (value: any) => void
    items: ItemType[]
}

export class Select extends React.Component<any,any> {

    constructor(props:any) {
        super(props);

        this.state = { isOpen: false };
        // @ts-ignore
        this.timeOutId = null;
        this.onItemClick = this.onItemClick.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
    }

    onClickHandler() {
        this.setState((currentState: { isOpen: any; }) => ({
            isOpen: !currentState.isOpen
        }));
    }

    onItemClick = (i: any) => {
        this.props.onChange(i)
        console.log(i)
    }

    // Мы закрываем выпадающий список по таймеру setTimeout.
    // Это нужно чтобы для дочерних элементов событие выделения
    // происходило перед событием получения фокуса.
    onBlurHandler() {
        // @ts-ignore
        this.timeOutId = setTimeout(() => {
            this.setState({
                isOpen: false,
            });
        });
    }
    // Не закрывать выпадающий список при получении фокуса дочерним элементом.
    onFocusHandler() {
        // @ts-ignore
        clearTimeout(this.timeOutId);
    }
    render() {

        // React помогает нам благодаря всплытию потери фокуса и
        // фокусировке событий на родителе.

        const selectedItem = this.props.items.find((i:any) => i.value === this.props.value);

        // @ts-ignore
        return (
            <div onBlur={this.onBlurHandler}
                 onFocus={this.onFocusHandler}
                 tabIndex={0}
            >
                <button onClick={this.onClickHandler}
                        aria-haspopup="true"
                        aria-expanded={this.state.isOpen}>
                    {selectedItem && selectedItem.title || "select"}

                </button>
                {this.state.isOpen && (
                    <ul>
                        {this.props.items.map((i:any, id:any) => (
                            <li key={id} onClick={() => this.onItemClick(id+1)} >{i.value}:{i.title}</li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}


