import React from 'react';
import CalcFrame from './CalcFrame'


class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            typed: false,
            result: 0,
            savedResult: 0,
            numbers: [0,1,2,3,4,5,6,7,8,9,'00'],
            functions: ['C','+','-','*','/', '=', '.', '√', 'x^n', '◄', '+/-'],
            currentFunction: 0,
            startNumber: true,
        };
    }

    Add = (i) => {
        this.setState({typed: true});
        if(this.state.result.length < 50 || this.state.result.length === undefined) {
            this.state.startNumber ? 
            this.setState({result: this.state.numbers[i], startNumber: false}) : 
            this.setState({result: this.state.result +  '' + this.state.numbers[i]});
        }
    }

    AnimateElement = (element) => {
        element.animate([
            {
                transform: 'translateY(15px)',
                opacity: 0
            },
            {
                transform: 'translateY(0)',
                opacity: 0.6
            }
        ], 250);
    }

    Calculate = (i, a, b) => {
        if(i === 1) return (parseFloat(a) + parseFloat(b));
        if(i === 2) return (parseFloat(a) - parseFloat(b));
        if(i === 3) return (parseFloat(a) * parseFloat(b));
        if(i === 4 && b !== 0) return (parseFloat(a) / parseFloat(b)).toFixed(5);
        if(i === 7) return (Math.sqrt(parseFloat(b))).toFixed(5);
        if(i === 8) return (Math.pow(parseFloat(a), parseInt(b))).toFixed(5);
        return 0;
    }

    ReturnResult = (i) => {
        this.AnimateElement(document.querySelector('.result_inner_top'));
        this.state.result !== 0 && this.state.savedResult !==0 ?
                this.setState({
                    savedResult: this.Calculate(this.state.currentFunction, this.state.savedResult, this.state.result),
                    currentFunction: i,
                    result: 0,
                    startNumber: true,
                    typed: false,
                }) :
                this.state.typed ?
                this.setState({
                    currentFunction: i,
                    savedResult: this.state.result,
                    result: 0,
                    startNumber: true,
                    typed: false,
                }) :
                this.setState({
                    currentFunction: i,
                });
    }

    Option = (i) => {
        switch (i) {
            // clearing function
            case 0:
                this.state.startNumber && this.setState({savedResult: 0, currentFunction: 0, typed: false});
                this.setState({startNumber: true, result: 0, typed: false});
                break;

            // add
            case 1:
                this.ReturnResult(i);
                break;

            // sub
            case 2:
                this.ReturnResult(i);
                break;

            // mult
            case 3:
                this.ReturnResult(i);
                break;

            // div
            case 4:
                this.ReturnResult(i);
                break;

                
            // dot
            case 6:
                !this.state.result.toString().includes('.') && this.setState({result: this.state.result + "."});
                break;

            // sqrt
            case 7:
                this.setState({
                    result: parseFloat(this.Calculate(i, this.state.savedResult, this.state.result))
                });
                break;

            // pow
            case 8:
                this.ReturnResult(i);
                break;
            
            // delNum
            case 9:
                this.state.result.toString().slice(0, -1) === '-' ?
                this.setState({
                    result:  -this.state.result,
                },
                () => {this.setState({result: 0})}) :
                this.state.result > 0 && this.state.result.toString().slice(0, -1) !== '' ?
                this.setState({
                    result: this.state.result.toString().slice(0, -1),
                }) : this.state.result < 0 && this.state.result.toString().slice(0, -1) !== '' ?
                this.setState({
                    result: this.state.result.toString().slice(0, -1),
                }) :
                this.setState({
                    startNumber: true,
                    result: 0,
                });
                break;

            // changeNum
            case 10:
                this.setState({ result: -this.state.result });
                break;

            case 5:
                    switch (this.state.currentFunction) {
                        case 1:
                            this.setState({
                                result: parseFloat(this.Calculate(this.state.currentFunction, this.state.savedResult, this.state.result)),
                                savedResult: 0,
                                currentFunction: 0
                            });
                            break;

                        case 2:
                            this.setState({
                                result: parseFloat(this.Calculate(this.state.currentFunction, this.state.savedResult, this.state.result)),
                                savedResult: 0,
                                currentFunction: 0
                            });
                            break;

                        case 3:
                            this.setState({
                                result: parseFloat(this.Calculate(this.state.currentFunction, this.state.savedResult, this.state.result)),
                                savedResult: 0,
                                currentFunction: 0
                            });
                            break;

                        case 4:
                            this.setState({
                                result: parseFloat(this.Calculate(this.state.currentFunction, this.state.savedResult, this.state.result)),
                                savedResult: 0,
                                currentFunction: 0
                            });
                            break;

                        case 7:
                            this.setState({
                                result: parseFloat(this.Calculate(this.state.currentFunction, this.state.savedResult, this.state.result)),
                                savedResult: 0,
                                currentFunction: 0
                            });
                            break;

                        case 8:
                            this.setState({
                                result: parseFloat(this.Calculate(this.state.currentFunction, this.state.savedResult, this.state.result)),
                                savedResult: 0,
                                currentFunction: 0
                            });
                            break;

                        default:
                            break;
                    }
                break;

            default:
                break;
        }
    }

    render()
    {
        return(
            <CalcFrame 
                typed={this.state.typed}
                currentFunction={this.state.currentFunction}
                savedResult={this.state.savedResult}
                result={this.state.result}
                onClick={(i) => this.Add(i)}
                onClickFunction={(i) => this.Option(i)}
                numbers={this.state.numbers}
                startNumber={this.state.startNumber}
                functions={this.state.functions}
            />
        );
    }   
}

export default Calculator