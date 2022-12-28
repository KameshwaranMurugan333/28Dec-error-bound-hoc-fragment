import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false,
            message: ""
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('errorInfo:', errorInfo)
        console.log('error:', error)
        this.setState({ isError: true });
    }

    render() {
        if (this.state.isError) {
            return <h5>Opps! Something went wrong</h5>
        }

        return this.props.children
    }
}

export default ErrorBoundary