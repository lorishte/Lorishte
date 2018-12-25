import React from 'react';
import PropTypes from 'prop-types';


class ConfirmDialog extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			visible: false,
			message: '',
			function: ''
		};
	}

	componentDidMount () {
		this.props.onRef(this);
	}

	componentWillUnmount () {
		this.props.onRef(undefined);
	}


	showMessage = (message, callback) => {
		this.setState({
			visible: true,
			message: message,
			function: callback
		});
	};

	confirm = () => {
		this.state.function()
	};

	hideMessage = () => {
		this.setState({
			visible: false,
			message: ''
		});
	};


	render () {

		let isVisible = this.state.visible;

		return (
			<div id="confirm-dialog"
			     className={isVisible ? 'visible' : ''}
			     onClick={this.hideMessage}>
				<div className="message">
					<p className="message-text">{this.state.message}</p>

					<button className="btn btn-primary" onClick={this.hideMessage}>Cancel</button>
					<button className="btn btn-danger" onClick={this.confirm}>OK</button>
				</div>

			</div>
		);
	}
}

export default ConfirmDialog;
