import React from 'react';

// Partials
import FormInput from '../../common/formComponents/FormInput';

// Services
import categoriesService from '../../../services/categories/categoriesService';

// Notifications
import Notifications from '../../common/notifications/Notifications';
import ConfirmDialog from '../../common/notifications/ConfirmDialog';

// Utils
import Utils from '../../../utils/utils';

// Constants
import {
	CATEGORY_INPUTS,
	BUTTONS,
	NOTIFICATIONS,
	ADMIN_PAGES_TEXT,
	CONFIRM_DIALOG_MESSAGES
} from '../../../constants/constants';

class createEditCategory extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			name: {},
			loading: true
		};
	}

	categoryId = this.props.match.params.id;

	componentDidMount () {

		if (this.categoryId) {

			categoriesService
				.loadCategoryData(this.categoryId)
				.then(res => {

					this.setState({
						name: res.name,
						loading: false
					});
				})
				.catch(err => console.log(err));
		} else {
			this.setState({loading: false});
		}
	}


	handleMultiLangChange = (e) => {
		let lang = e.target.id.split('-')[1];   // get the language
		let key = e.target.name;                // get the state key
		let value = e.target.value;             // get new value

		let stateProp = Object.assign({}, this.state[key]);  // make state key copy

		stateProp[lang] = value; // add new value

		this.setState({[key]: stateProp});
	};

	clearData = () => {
		this.setState({
			name: {bg: '', en: ''},
		});
	};

	saveCategory = (e) => {

		e.preventDefault();

		// Edit category
		if (this.categoryId) {

			categoriesService
				.editCategory(this.categoryId, Utils.createStateCopy(this.state))
				.then(res => {
					this.notifications.showMessage(NOTIFICATIONS.bg.successEdit);
					setTimeout(() => this.props.history.go(-1), 2000);
				})
				.catch(err => {
					this.notifications.showMessage(err.responseJSON.description);
				});
			return;
		}


		// Create Category
		categoriesService
			.createCategory(Utils.createStateCopy(this.state))
			.then(res => {
				this.notifications.showMessage(NOTIFICATIONS.bg.categoryCreated);
				this.clearData();
				setTimeout(() => this.props.history.go(-1), 2000);
			})
			.catch(err => {
				this.notifications.showMessage(err.responseJSON.description);
			});
	};

	confirm = () => {
		this.notifications.showMessage(NOTIFICATIONS.bg.deleteForbidden);
		// this.confirmDialog.showMessage(CONFIRM_DIALOG_MESSAGES.bg.confirmDelete, this.deleteCategory);
	};

	deleteCategory = () => {
		this.notifications.showMessage(NOTIFICATIONS.bg.deleteForbidden);
	};

	cancel = (e) => {
		e.preventDefault();
		this.props.history.go(-1);
	};

	render () {


		let title = this.categoryId ? ADMIN_PAGES_TEXT.category.bg.editCategory : ADMIN_PAGES_TEXT.category.bg.createCategory;

		let buttonText = this.categoryId ? BUTTONS.bg.edit : BUTTONS.bg.create;

		if (this.state.loading) {
			return (<div className="lds-dual-ring"/>);
		}

		return (
			<div id="project-create" className="container">

				<Notifications onRef={ref => (this.notifications = ref)} language='bg'/>
				<ConfirmDialog onRef={ref => (this.confirmDialog = ref)} language='bg'/>

				<div className="admin-page-header">
					<h1 className="page-title">{title}</h1>

					{this.categoryId &&
					<button className="btn btn-default-light sm" onClick={this.confirm}>{BUTTONS.bg.delete}</button>
					}
				</div>


				{/*//FORM*/}
				<form method="post" onSubmit={this.saveCategory} id="create-category-form">


						{/*//NAME BG*/}
						<FormInput type='text'
						           name='name'
						           value={this.state.name.bg}
						           id='name-bg'
						           placeholder=''
						           label={CATEGORY_INPUTS.bg.name}
						           className='name-field'
						           required={true}
						           disabled={false}
						           onChange={this.handleMultiLangChange}/>

						{/*//NAME EN*/}
						<FormInput type='text'
						           name='name'
						           value={this.state.name.en}
						           id='name-en'
						           placeholder=''
						           label={CATEGORY_INPUTS.en.name}
						           className='name-field'
						           required={true}
						           disabled={false}
						           onChange={this.handleMultiLangChange}/>

					{/*//SUBMIT*/}
					<div className="buttons-container text-center">
						<button className="btn btn-default-light md" onClick={this.cancel}>
							<i className="fa fa-ban" aria-hidden="true"/>
						</button>
						<button className="btn btn-default md" type="submit">
							<i className="fa fa-check" aria-hidden="true"/>
							&nbsp; {buttonText}
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default createEditCategory;

