import React from "react";
import {connect} from "react-redux";

function Registration() {
    return(
        <div>
            LA PAGE D'INSCRIPTION
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        login : state.login
    }
};

export default connect(mapStateToProps)(Registration);
