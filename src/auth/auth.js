import React from 'react';
import { AuthContext } from './context.js';
import Show from '../show/show';

class Auth extends React.Component {
    static contextType = AuthContext;
    render() {

        let okToRender = false;

        try {
            okToRender = this.context.loggedIn && this.context.isValidAction(this.props.action)

        } catch (e) {
            console.log(e)
        }
        return (
            <Show condition={okToRender}>
                {this.props.children}
            </Show>
        )
    }
}
export default Auth;