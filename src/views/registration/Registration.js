import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Registration extends React.Component {
	constructor(props) {
    super(props);
		this.state = {
			pseudo: '',
			email: '',
			password: '',
			c_password: ''
		};
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
		console.log(this.state);
		event.preventDefault();
		// suite logique d'appel axios ici
	}

	
	render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
				<small>* : champs requis</small>
				<TextField id="pseudo" name="pseudo" label="Votre pseudo" required 
					value={this.state.pseudo} 
					onChange={e => this.setState({pseudo: e.target.value})}
				/>

				<TextField type="email" id="email" name="email" label="Votre email" required 
					value={this.state.email} 
					onChange={e => this.setState({email: e.target.value})}
				/>

				<TextField id="password" name="password" label="Mot de passe" required 
					value={this.state.password} 
					onChange={e => this.setState({password: e.target.value})}
				/>

				<TextField id="c_password" name="c_password" label="Confirmation" required 
					value={this.state.c_password} 
					onChange={e => this.setState({c_password: e.target.value})}
				/>

				<Button variant="contained" color="primary" type="submit" value="Submit" onClick={e => this.handleFormSubmit(e)}>S'inscrire</Button>
      </form>
    );
  }
}
export default Registration;