/**import React from "react";

function Profile() {
	return(
		<div>
			PROFIL
		</div>
	);
}

export default Profile;
*/
import React from 'react';
import axios from "axios";

const config = {
	headers: {
		'Content-Type': 'application/json',
		'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
	}
};

axios.get(
	"http://localhost:8000/api/info",
	config
).then((response) => {
	console.log(response.data)
}, (error) => {
	console.log(error);
});

class Profil extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				PROFIL
				Requete axios fait
			</div>
		);
	}
}

export default Profil;