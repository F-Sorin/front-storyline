import React from "react";
import {connect} from "react-redux";

function Profile() {
    return(
        <div>
            LA PAGE DE PROFIL
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        login : state.login
    }
};

export default connect(mapStateToProps)(Profile);
