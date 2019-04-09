import React from 'react';

// Partials
import FormInput from '../../../common/formComponents/FormInput';
import FormSelectField from '../../../common/formComponents/FormSelectField';
import Textarea from '../../../common/formComponents/TextArea';
import AddOnInput from '../../../common/formComponents/AddOnInput';
import SortableList from './partials/SortableList';
import SortableVideos from './partials/SortableVideos';
import MediaInfo from './partials/MediaInfo';
import TextSectionFrom from './partials/TextSectionForm';

// Services
import projectsService from '../../../../services/projects/projectsService';
import clientsService from '../../../../services/clients/clientsService';
import categoriesService from '../../../../services/categories/categoriesService';
import sectionsService from '../../../../services/projects/sectionsService';

// Notifications
import Notifications from '../../../common/Notifications';
import ConfirmDialog from '../../../common/ConfirmDialog';

// Utils
import Utils from '../../../../utils/utils';

// Constants
import {
	CREATE_PROJECT_INPUTS,
	BUTTONS,
	CONFIRM_DIALOG_MESSAGES,
	NOTIFICATIONS,
	ADMIN_PAGES_TEXT
} from '../../../../constants/constants';

class createProject extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			name: {},
			description: {},
			info: {},
			year: '',
			webPage: '',
			isStar: false,
			clientId: '',
			categoryIds: [],
			images: [],
			thumbnail: '',
			videos: [],

			projectLoaded: false,
			dataLoaded: false,

			allClients: [],
			allCategories: [],
			allInfoSectionIds: [],
		};

		this.imagesContainer = React.createRef();
	}

	projectId = this.props.match.params.id;

	componentDidMount () {

		this.loadInputsData();

		if (this.projectId) {

			projectsService
				.loadProjectData(this.projectId)
				.then(res => {

					let projectClientId = res.clientId;

					clientsService
						.loadClientData(projectClientId);

					this.setState({
						name: res.name,
						description: res.description,
						info: res.info || {},
						year: res.year,
						webPage: res.webPage,
						isStar: res.isStar,
						clientId: res.clientId,
						categoryIds: res.categoryIds,
						images: res.images,
						thumbnail: res.thumbnail,
						videos: res.videos,

						projectLoaded: true
					});
				})
				.catch(err => console.log(err));
		} else {
			this.setState({projectLoaded: true});
		}
	}

	loadInputsData = () => {
		clientsService
			.loadAllClients()
			.then(res => {

				this.setState({allClients: res});

				categoriesService
					.loadAllCategories()
					.then(res => {
						this.setState({
							allCategories: res
						});

						sectionsService
							.loadAllSections()
							.then(res => {
								this.setState({
									allInfoSectionIds: res,
									dataLoaded: true
								});
							})

							.catch(err => console.log(err));
					})
					.catch(err => console.log(err));
			})
			.catch(err => console.log(err));
	};

	handleInputChange = (e) => {

		this.setState({[e.target.name]: e.target.value});
	};

	handleCheckBoxChange = (e) => {

		e.preventDefault();

		this.setState({[e.target.name]: !this.state[e.target.name]});
	};

	loadTextSectionForm = (e) => {
		e.preventDefault();

		let stateProp = e.target.getAttribute('data-state-prop');
		let sectionId = e.target.name;

		if (stateProp === 'info') {
			if (!sectionId) {
				let data = {
					stateProp: stateProp,
					sections: this.state.allInfoSectionIds,
					sectionId: '',
					textBG: '',
					textEN: '',
				};

				this.textSectionForm.loadData(data);

			} else {

				let text = this.state[stateProp][sectionId];

				let data = {
					stateProp: stateProp,
					sections: this.state.allInfoSectionIds,
					sectionId: sectionId,
					textBG: text.bg,
					textEN: text.en,
				};

				this.textSectionForm.loadData(data);
			}
		} else {
			console.log(stateProp, sectionId);

			let media = this.state[stateProp].filter(e => e.url === sectionId)[0];

			console.log(media)
		}

	};

	removeInfoSection = (e) => {
		e.preventDefault();

		console.log(e.target.getAttribute('data-state-prop'));

		let stateProp = e.target.getAttribute('data-state-prop');

		let sectionId = e.target.name;

		if (stateProp === 'info') {
			this.confirmDialog
				.showMessage(CONFIRM_DIALOG_MESSAGES.bg.confirmDeleteSection, () => {
					let filtered = this.state[stateProp];
					delete filtered[sectionId];
					this.setState({[stateProp]: filtered});
				});
		}
	};

	addInfoSection = (data, stateProp) => {

		console.log(stateProp);

		this.setState(prevState => (
			{
				[stateProp]: {...prevState[stateProp], ...data},
				showInfoInputs: false
			}
		));
	};

	showMediaInfo = (e, input) => {
		e.preventDefault();

		let stateProp = e.target.getAttribute('data-state-prop');

		let data = {
			stateProp: stateProp,
			sections: this.state.allInfoSectionIds,
			id: input.url,
			info: input.info
		};

		this.mediaInfo.loadData(data);
	};

	handleMultiLangChange = (e) => {
		let lang = e.target.id.split('-')[1];   // get the language
		let key = e.target.name;                // get the state key
		let value = e.target.value;             // get new value

		let stateProp = Object.assign({}, this.state[key]);  // make state key copy

		stateProp[lang] = value; // add new value

		this.setState({[key]: stateProp});
	};

	handleArrChange = (e) => {

		e.preventDefault();

		if (this.state[e.target.name].includes(e.target.value)) {
			this.setState({[e.target.name]: this.state[e.target.name].filter(el => el !== e.target.value)});

		} else {
			this.setState({[e.target.name]: [...this.state[e.target.name], e.target.value]});
		}
	};

	addImageVideo = (e) => {

		e.preventDefault();

		let elementToAdd = {
			url: e.target.value,
			info: {}
		};

		this.setState({[e.target.name]: [...this.state[e.target.name], elementToAdd]});

	};

	removeImageVideo = (e) => {
		e.preventDefault();

		let arr = this.state[e.target.name];

		let filtered = arr.filter((el) => el.url !== e.target.value);

		this.setState({[e.target.name]: filtered});
	};

	handleNewOrder = (stateProp, reorderedElements) => {
		this.setState({[stateProp]: reorderedElements});
	};

	saveProject = (e) => {

		e.preventDefault();

		if (this.projectId) {

			projectsService
				.editProject(this.projectId, Utils.createStateCopy(this.state))
				.then(res => {

					this.notifications.showMessage(NOTIFICATIONS.bg.successEdit);
					setTimeout(() => this.props.history.go(-1), 2000);

				})
				.catch(err => {
					this.notifications.showMessage(err.responseJSON.description);
				});

			return;
		}

		projectsService
			.createProject(Utils.createStateCopy(this.state))
			.then(res => {

				this.notifications.showMessage(NOTIFICATIONS.bg.projectCreated);
				setTimeout(() => this.props.history.go(-1), 2000);

			})
			.catch(err => {
				this.notifications.showMessage(err.responseJSON.description);
			});
	};

	confirmDeleteProject = () => {
		// First give the massage, then the callback to be executed
		this.confirmDialog.showMessage(CONFIRM_DIALOG_MESSAGES.bg.confirmDeleteProject, this.deleteProject);
	};

	deleteProject = () => {

		projectsService
			.deleteProject(this.projectId)
			.then(res => {
				this.notifications.showMessage(NOTIFICATIONS.bg.projectDeleted);
				setTimeout(() => this.props.history.go(-1), 2000);
			})
			.catch(err => {
				this.notifications.showMessage(err.responseJSON.description);
			});
	};

	cancel = (e) => {
		e.preventDefault();
		this.props.history.go(-1);
	};

	render () {

		// Show loader until data is loaded
		if (!this.state.projectLoaded || !this.state.dataLoaded) {
			return (<div className="lds-dual-ring"/>);
		}

		let title = this.projectId
			? ADMIN_PAGES_TEXT.project.bg.editProject
			: ADMIN_PAGES_TEXT.project.bg.createProject;

		let buttonText = this.projectId
			? BUTTONS.bg.edit
			: BUTTONS.bg.create;

		let thumbnail = this.state.thumbnail !== ''
			? (<figure className="image">
					<img src={this.state.thumbnail} alt="project thumbnail" className="img-fit"/>
				</figure>
			)
			: null;

		let videos = (this.state.videos).map((video, index) => {
			return (
				<div className='image' key={index}>
					<iframe src={video.url}/>

					<div className='del-btn'>
						<button className="btn xs btn-primary"
						        name='videos'
						        value={video.url}
						        onClick={this.removeImageVideo}>clear
						</button>

						<button className="btn xs btn-primary"
						        data-state-prop={'videos'}
						        onClick={(e) => this.showMediaInfo(e, video)}>info
						</button>
					</div>
				</div>
			);
		});

		let categories = this.state.allCategories.map(e => {
			let classList = this.state.categoryIds.includes(e._id) ? 'btn category-label selected' : 'btn category-label';
			return (
				<button key={e._id}
				        className={classList}
				        name="categoryIds"
				        value={e._id}
				        onClick={this.handleArrChange}>{e.name.bg}
				</button>
			);
		});

		let isStar = (<button className={this.state.isStar ? 'btn category-label attention' : 'btn category-label'}
		                      name="isStar"
		                      value={this.state.isStar}
		                      onClick={this.handleCheckBoxChange}>
			<i className="fa fa-star" aria-hidden="true"/>
			{CREATE_PROJECT_INPUTS.bg.isStar}
		</button>);

		let info = Object.keys(this.state.info).map(e => {

			let section = this.state.allInfoSectionIds.filter(s => s._id === e)[0];
			let text = this.state.info[e];

			return (
				<div key={e} className="info-text">

					<div className="section-header">
						<h3 className="title">{section.name.bg}&nbsp;&nbsp;| </h3>
						<button className="btn btn-default xs"
						        data-state-prop={'info'}
						        name={e}
						        onClick={this.loadTextSectionForm}>{BUTTONS.bg.edit}
						</button>
						<button className="btn btn-default xs"
						        name={e}
						        data-state-prop={'info'}
						        onClick={this.removeInfoSection}>{BUTTONS.bg.delete}
						</button>
					</div>

					<span className="label">BG</span>
					<div dangerouslySetInnerHTML={{__html: text.bg}}
					     className="text"/>

					<span className="label">EN</span>
					<div dangerouslySetInnerHTML={{__html: text.en}}
					     className="text"/>
				</div>
			);
		});

		return (
			<div id="project-create" className="container">

				<Notifications onRef={ref => (this.notifications = ref)} language='bg'/>
				<ConfirmDialog onRef={ref => (this.confirmDialog = ref)} language='bg'/>

				<TextSectionFrom onRef={ref => (this.textSectionForm = ref)}
				                 submit={this.addInfoSection}
				                 notifications={this.notifications}/>

				<MediaInfo onRef={ref => (this.mediaInfo = ref)}
				           loadTextSectionForm={this.loadTextSectionForm}
				           notifications={this.notifications}/>

				{/*//PAGE HEADER*/}
				<div className="page-header">
					<h1 className="page-title">{title}</h1>

					{this.projectId &&
					<button className="btn btn-danger xs" onClick={this.confirmDeleteProject}>
						<i className="fa fa-trash" aria-hidden="true"/>
						{BUTTONS.bg.delete}
					</button>
					}
				</div>

				{/*//FORM*/}
				<form method="post" onSubmit={this.saveProject} id="create-project-form">


					{/*//PROJECT Info*/}
					<div id="project-info">

						{/*//NAME BG*/}
						<FormInput type='text'
						           name='name'
						           value={this.state.name.bg}
						           id='name-bg'
						           placeholder=''
						           label={CREATE_PROJECT_INPUTS.bg.name}
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
						           label={CREATE_PROJECT_INPUTS.en.name}
						           className='name-field'
						           required={true}
						           disabled={false}
						           onChange={this.handleMultiLangChange}/>

						<div className="form-group">
							{isStar}
						</div>

						<div className="form-group">
							{categories}
						</div>

						{/*//DESCRIPTION BG*/}
						<Textarea name='description'
						          value={this.state.description.bg}
						          id='description-bg'
						          placeholder=''
						          label={CREATE_PROJECT_INPUTS.bg.description}
						          className='description-field'
						          required={false}
						          onChange={this.handleMultiLangChange}/>

						{/*//DESCRIPTION EN*/}
						<Textarea name='description'
						          value={this.state.description.en}
						          id='description-en'
						          placeholder=''
						          label={CREATE_PROJECT_INPUTS.en.description}
						          className='description-field'
						          required={false}
						          onChange={this.handleMultiLangChange}/>

						{/*//CLIENT*/}
						<FormSelectField name='clientId'
						                 label={CREATE_PROJECT_INPUTS.bg.client}
						                 className='client-field'
						                 required={true}
						                 disabled={false}
						                 defaultValue={this.state.clientId}
						                 options={this.state.allClients}
						                 onChange={this.handleInputChange}/>

						{/*//YEAR*/}
						<FormInput type='text'
						           name='year'
						           value={this.state.year}
						           id='year'
						           placeholder=''
						           label={CREATE_PROJECT_INPUTS.bg.year}
						           className='year-field'
						           required={false}
						           disabled={false}
						           onChange={this.handleInputChange}/>

						{/*//Web page*/}
						<FormInput type='text'
						           name='webPage'
						           value={this.state.webPage}
						           id='web-page'
						           placeholder=''
						           label={CREATE_PROJECT_INPUTS.bg.webPage}
						           className=''
						           required={false}
						           disabled={false}
						           onChange={this.handleInputChange}/>

						<div className="form-group">
							<label>{CREATE_PROJECT_INPUTS.bg.info}</label>

							<button className="btn btn-default-light xs"
							        data-state-prop={'info'}
							        onClick={this.loadTextSectionForm}>{BUTTONS.bg.addSection}
							</button>

							{info}
						</div>

					</div>


					{/*//PROJECT IMAGES & VIDEOS*/}
					<aside id="project-data">

						<div className="project-data">

							<h3 className="section-title">{ADMIN_PAGES_TEXT.project.bg.thumbnail}</h3>
							<div className="container">
								{thumbnail}
							</div>

							<AddOnInput
								name="thumbnail"
								label={CREATE_PROJECT_INPUTS.bg.thumbnail}
								labelClassName="no-label"
								buttonText='+'
								value={this.state.thumbnail}
								placeholder={this.state.thumbnail}
								onChange={this.handleInputChange}
								clearText={false}/>
						</div>

						{/*Images*/}
						<div className="project-data">
							<h3 className="section-title">{ADMIN_PAGES_TEXT.project.bg.images}</h3>
							<SortableList elements={this.state.images}
							              name="images"
							              onDelete={this.handleArrChange}
							              onChange={this.handleNewOrder}/>

							<AddOnInput
								name='images'
								// label={CREATE_PROJECT_INPUTS.bg.images}
								labelClassName='no-label'
								buttonText='+'
								placeholder='/images/projects/folderName/imageName'
								onChange={this.handleArrChange}
								clearText={true}/>
						</div>

						{/*Videos*/}
						<div className='project-data'>
							<h3 className='section-title'>{ADMIN_PAGES_TEXT.project.bg.videos}</h3>
							<div className='container'>
								{videos}
							</div>

							<AddOnInput
								name="videos"
								// label={CREATE_PROJECT_INPUTS.bg.videos}
								labelClassName="no-label"
								buttonText='+'
								placeholder='Добави видео'
								onChange={this.addImageVideo}
								clearText={true}/>
						</div>

					</aside>


					{/*//SUBMIT*/}
					<div className="buttons-container text-center form-group">
						<button className="btn btn-default-light" onClick={this.cancel}>{BUTTONS.bg.cancel}</button>
						<button className="btn btn-primary" type="submit">{buttonText}</button>
					</div>

				</form>

			</div>

		);
	}
}

export default createProject;

