import React from 'react';
import {Redirect, Route} from 'react-router-dom'
import {useAuth} from "../contexts/AuthContext";

export default function PrivateRoute({component: Component, ...rest}) {

    const {currentUser} = useAuth()

    return (
        <Route
            {...rest}
            render={props => {
                if (props.location === "/login" || props.location === "/signin") {
                    if (currentUser) {
                        return <Redirect to={"/"} />
                    }
                }
                if (currentUser) {
                    return <Component {...props} />
                }
                else {
                    if (props.location !== "/login" || props.location !== "/signin") {
                        return <Redirect to={"/login"} />
                    }
                }

                // return currentUser ? <Component {...props} />: <Redirect to={"/login"} />
        }}
        />
    );
};
