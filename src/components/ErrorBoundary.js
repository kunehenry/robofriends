import React, {Component} from "react";

//error boundary is for not breaking a whole app when there's an error
//https://reactjs.org/docs/error-boundaries.html

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
        };
    };

    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    render() {
        if(this.state.hasError) {
            return <h1>That is not good</h1>
        }
        return this.props.children;
    };
};

export default ErrorBoundary;