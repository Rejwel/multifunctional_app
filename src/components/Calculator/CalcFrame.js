import React from 'react'
import './CalcFrame.css'
import ReactHtmlParser from 'react-html-parser'

function Number(props) {
    const className = (props.numbers === 0 ? "finalNumber" : "number")
    return (
        <button className={className} onClick={props.onClick}>
            {props.numbers}
        </button>
    );
}

function Result(props) {
    let fun, savedResult;
    props.currentFunction === 0 ? fun = "" : fun = props.functions[props.currentFunction];
    props.savedResult === 0 ? savedResult = "" : savedResult = props.savedResult;
    return (
        <button className="result">
            <div className="result_inner_top">{savedResult} {fun}</div>
            <div className="result_inner_bottom">{props.result}</div>
        </button>
    );
}

function Calculation(props) {
    const fun = `x<sup>n</sup>`;
    return (
        <button className="number" onClick={props.onClickFunction}>
            {props.currentFunction === 8 ? ReactHtmlParser(fun) : props.functions}
        </button>
    );
}

class CalcFrame extends React.Component {

    renderNumber(i) {
        return(
            <Number
                numbers={this.props.numbers[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    renderResult() {
        return (
            <Result
                functions={this.props.functions}
                currentFunction={this.props.currentFunction}
                savedResult={this.props.savedResult}
                result={this.props.result}
                startNumber={this.props.startNumber}
            />
        )
    }

    renderFunction(i) {
        return (
            <Calculation
                currentFunction={i}
                functions={this.props.functions[i]}
                onClickFunction={() => this.props.onClickFunction(i)}
            />
        )
    }


    /* 
        0 - clear
        1 - add
        2 - sub
        3 - mult
        4 - div
        5 - return
        6 - dot
        7 - radical
        8 - pow
        9 - delNum
        10 - changeNum
    */
    
    render() {
        return(
            <div className="container">
                <div className="calculator">
                    <div className="row">
                        {this.renderResult()}
                    </div>
                    <div className="row">
                        {this.renderNumber(7)}
                        {this.renderNumber(8)}
                        {this.renderNumber(9)}
                        {this.renderFunction(8)}
                        {this.renderFunction(7)}
                        {this.renderFunction(9)}
                    </div>
                    <div className="row">
                        {this.renderNumber(4)}
                        {this.renderNumber(5)}
                        {this.renderNumber(6)}
                        {this.renderFunction(2)}
                        {this.renderFunction(1)}
                        {this.renderFunction(0)}
                    </div>
                    <div className="row">
                        {this.renderNumber(1)}
                        {this.renderNumber(2)}
                        {this.renderNumber(3)}
                        {this.renderFunction(3)}
                        {this.renderFunction(4)}
                        {this.renderFunction(10)}
                    </div>
                    <div className="row">
                        {this.renderNumber(0)}
                        {this.renderNumber(10)}
                        {this.renderFunction(6)}
                        {this.renderFunction(5)}
                    </div>
                </div>
            </div>
        )
    }
}

export default CalcFrame


