import React from 'react';
import PropTypes from 'prop-types';

// Partials
import ArticleSection from '../../common/articlePartials/ArticleSection';
import SectionHeader from '../../common/headers/SectionHeader';
import SectionImage from '../../common/images/SectionImage';

class StoryArchetypes extends React.Component {

	render () {

		let activeLanguage = this.props.language;

		return (
			<section id='story-archetypes'>
				<div className='container'>

					<SectionHeader pageName='aboutUs' language={activeLanguage} sectionName='storyArchetypes'/>


					<ArticleSection language={activeLanguage}
					                pageName='aboutUs'
					                sectionName='storyArchetypes'
					                subSectionName='theMonster'/>

					<ArticleSection language={activeLanguage}
					                pageName='aboutUs'
					                sectionName='storyArchetypes'
					                subSectionName='reborn'/>
				</div>


				<SectionImage image={'/images/bgs/about-us-1.jpg'}/>


				<div className='container'>

					<ArticleSection language={activeLanguage}
					                pageName='aboutUs'
					                sectionName='storyArchetypes'
					                subSectionName='ragsToRiches'/>

					<ArticleSection language={activeLanguage}
					                pageName='aboutUs'
					                sectionName='storyArchetypes'
					                subSectionName='theQuest'/>
				</div>


				<SectionImage image={'/images/bgs/about-us-2.jpg'}/>

				<div className='container'>

					<ArticleSection language={activeLanguage}
					                pageName='aboutUs'
					                sectionName='storyArchetypes'
					                subSectionName='tragedy'/>

					<ArticleSection language={activeLanguage}
					                pageName='aboutUs'
					                sectionName='storyArchetypes'
					                subSectionName='comedy'/>

					<ArticleSection language={activeLanguage}
					                pageName='aboutUs'
					                sectionName='storyArchetypes'
					                subSectionName='travel'/>

				</div>

				<div className='container section-padding-top-bottom'>
					<SectionHeader pageName='aboutUs' language={activeLanguage} sectionName='ps'/>
				</div>

			</section>

		);
	}
}

export default StoryArchetypes;

StoryArchetypes.propTypes = {
	language: PropTypes.string
};