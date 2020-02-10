import React from "react";
import {connect} from "react-redux";

function Home() {
    return(
        <div>
            LA PAGE D'ACCUEIL
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        login : state.login
    }
};

export default connect(mapStateToProps)(Home);
