import React from 'react';
import PropTypes from 'prop-types';

// Utils
import UTILS from "../../../../../utils/utils";

class ImageGallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            translateValue: 0,
            step: 0,
            imageIndex: 0,
        };

        this.container = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('resize', this.moveGalleryToStart);
    }

    componentWillReceiveProps(nextProps, nextContext) {

        let direction = nextProps.direction;

        if (direction) {
            this.moveCarousel(direction);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.moveGalleryToStart);
    }

    moveGalleryToStart = () => {

        if (window.innerWidth <= 768 && this.state.imageIndex > 0) {

            let container = this.container.current;

            this.setState({
                translateValue: 0,
                imageIndex: 0
            }, () => {
                window.requestAnimationFrame(function () {
                    container.style.transform = `translateX(-${0}px)`;
                    container.style.transition = '.6s ease-out';
                });
            });
        }

        this.props.changeState('');
    };

    getCurrentImageWidth = (direction, callback) => {

        let index = this.state.imageIndex;

        if (direction === 'left' && index > 0) index -= 1;

        let el = 'img' + index;

        // Get parent width with included padding
        let currentImageWidth = this[el].current.parentNode.clientWidth;

        this.setState({step: currentImageWidth}, () => callback());
    };

    moveCarousel = (direction) => {

        this.getCurrentImageWidth(direction, () => {

            let container = this.container.current;

            let step = this.state.step;
            let translateValue = this.state.translateValue;
            let translateMaxValue = container.scrollWidth;

            let nextImageIndex;

            if (direction === 'left') {

                if (translateValue <= 0) return;

                translateValue -= step;

                if (translateValue < 0) translateValue = 0; // fix bug if value goes negative

                nextImageIndex = this.state.imageIndex - 1;

            } else {

                translateValue = this.state.translateValue + step;

                if (translateValue > translateMaxValue - step) return;

                nextImageIndex = this.state.imageIndex + 1;
            }

            this.setState({
                translateValue,
                imageIndex: nextImageIndex
            }, () => {
                window.requestAnimationFrame(function () {
                    container.style.transform = `translateX(-${translateValue}px)`;
                    container.style.transition = '.6s ease-out';
                });
            });
        });
    };

    render() {

        let lang = this.props.language;

        let gallery = this.props.images.map((image, i) => {

            let info;

            if (image.info && image.info.length > 0) {
                info = image.info.map(imageObj => {
                    return (
                        <div key={image.url + imageObj} className='section'>
                            <p className='section-name'>{this.props.sections[imageObj.sectionId][lang]}</p>
                            {/*<p className='section-text' dangerouslySetInnerHTML={{__html: video.info[vObject][lang]}}/>*/}
                            <p className='section-text'>{imageObj.text[lang]}</p>
                        </div>
                    );
                })
            }


            let name = 'img' + i;

            this[name] = React.createRef();

            let imageUrl = UTILS.generateUrl(this.props.projectFolder, image.url);

            return (
                <div key={name} className='image-container'>
                    <figure className="image"
                            ref={this[name]}
                            onLoad={() => {
                                let img = this[name].current;
                                if (img.clientWidth > img.clientHeight) {
                                    img.parentNode.classList.add('portrait');
                                }
                            }}>
                        <img src={imageUrl}
                             className="img-fit"
                             alt={image.url}
                             data-target={JSON.stringify(image)}
                             onClick={this.props.showPreview}/>
                        <span className='btn md'
                              data-target={JSON.stringify(image)}
                              onClick={this.props.showPreview}>
						View
					</span>
                    </figure>


                    <div className='video-info'>
                        {info}
                    </div>

                    {image.Headline &&
                    <div className='name' dangerouslySetInnerHTML={{__html: image.Headline[lang]}}/>
                    }
                </div>
            );
        });

        return (
            <div id="project-gallery" className='section-padding-top-bottom'>

                <div id='gallery' ref={this.container}>
                    {gallery}
                </div>


                <div className="gallery-navigation">
                    <button
                        className={this.state.imageIndex === 0 ? 'btn btn-default md disabled' : 'btn btn-default md'}
                        aria-label={'Move left'}
                        onClick={() => this.moveCarousel('left')}>
                        <i className="fa fa-arrow-left" aria-hidden="true"/>
                    </button>
                    <button
                        className={this.state.imageIndex === (this.props.images.length - 1) ? 'btn btn-default md disabled' : 'btn btn-default md'}
                        aria-label={'Move right'}
                        onClick={() => this.moveCarousel('right')}>
                        <i className="fa fa-arrow-right" aria-hidden="true"/>
                    </button>
                </div>
            </div>
        );
    }
}

export default ImageGallery;

ImageGallery.propTypes = {
    images: PropTypes.array,
    language: PropTypes.string,
    sections: PropTypes.object,
    projectFolder: PropTypes.string,
    showPreview: PropTypes.func,
    direction: PropTypes.string,
    changeState: PropTypes.func
};