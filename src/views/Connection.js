import React from "react";
import {connect} from "react-redux";

function Connection() {
    return(
        <div>
            LA PAGE DE CONNEXION
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        login : state.login
    }
};

export default connect(mapStateToProps)(Connection);
