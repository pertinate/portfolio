import React, { Component, ReactNode } from 'react';

interface Props { }
interface State { }

class Bedrock extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {

        };
    }

    render(): ReactNode {
        return (
            <div>
                <p>Test</p>
                <p>Hello World</p>
            </div>
        );
    }
}

export default Bedrock;
