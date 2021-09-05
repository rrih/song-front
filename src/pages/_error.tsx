import React from "react";

export default class Error extends React.Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode }
    }
    
    render() {
        return (
            <p>
                エラーです
                {/* TODO: this.props.statusCode を表示させる */}
            </p>
        )
    }
}