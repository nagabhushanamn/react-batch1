
import React, { Component } from 'react'
import store from '../store'

export function connect(InputComponent, callback) {

    class ContainerComponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                data: []
            }
        }
        componentDidMount() {
            let data = callback(store);
            this.setState({ data })
        }
        componentWillUnmount() {
        }
        commonHandleLogic() {
        }
        render() {
            let { data } = this.state;
            return (
                <div>
                    <InputComponent data={data} />
                </div>
            );
        }

    }

    ContainerComponent.displayName = `Container => <${InputComponent.displayName || InputComponent.name}>`

    return ContainerComponent;

}