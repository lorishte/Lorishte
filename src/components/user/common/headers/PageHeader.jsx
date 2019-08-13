import React from 'react';
import PropTypes from 'prop-types';

// Constants
import { USER_PAGES_TEXT } from '../../../../constants/constants';

// Utils
import UTILS from '../../../../utils/utils';



class PageHeader extends React.Component {

	render () {

		let { language, pageName } = this.props;

		let subtitle = UTILS.createMarkup(USER_PAGES_TEXT[pageName][language].subtitle);

		return (

			<section className='banner container page-header'>

				<h1 className='page-title'
				    dangerouslySetInnerHTML={UTILS.createMarkup(USER_PAGES_TEXT[pageName][language].title)}/>

				{subtitle.__html &&
				<p className="subtitle"
				   dangerouslySetInnerHTML={subtitle}/>
				}

			</section>
		);
	}
}

export default PageHeader;

PageHeader.propTypes = {
	language: PropTypes.string,
	pageName: PropTypes.string
};