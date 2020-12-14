import React from "react";
import "./Select.css"

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

        this.onClickHandler = this.onClickHandler.bind(this);
        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
    }

    onClickHandler() {
        this.setState((currentState: { isOpen: any; }) => ({
            isOpen: !currentState.isOpen
        }));
    }



    // Мы закрываем выпадающий список по таймеру setTimeout.
    // Это нужно чтобы для дочерних элементов событие выделения
    // происходило перед событием получения фокуса.
    onBlurHandler() {
        // @ts-ignore
        this.timeOutId = setTimeout(() => {
            this.setState({
                isOpen: false,
                onChange: this.props.onChange(1)
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

        const selectedItem = this.props.items.find((i:any) => console.log(i.value) === this.props.value);
        console.log(this.props.value)
        return (
            <div onBlur={this.onBlurHandler}
                 onFocus={this.onFocusHandler}>
                <button onClick={this.onClickHandler}
                        aria-haspopup="true"
                        aria-expanded={this.state.isOpen}>

                    Select an Item
                </button>
                {this.state.isOpen && (
                    <ul>
                        {this.props.items.map((item: { title: React.ReactNode; }) => (
                            <li onClick={(value)=> this.props.onChange(value)} value={this.props.value}>{item.title}</li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}


