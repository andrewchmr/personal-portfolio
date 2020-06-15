import React from "react";
import ReactTooltip from "react-tooltip";
import { Layout } from "../components/Layout";
import { isMobile } from "../utils/isMobile";

function Index() {
    const renderTooltips = () => {

        if (typeof navigator !== 'undefined' && isMobile()) return null;

        return (<>
            <ReactTooltip className={'Index__tooltip'} arrowColor={'#121212'}
                          uuid="my-photo" place="left" id='my-photo'>
                <img className={'Index__photo Index__photo--vertical'}
                     alt={'Andriy Chemerynskiy Photo'}
                     src={'/static/personal-photo.jpg'}/>
            </ReactTooltip>
            <ReactTooltip className={'Index__tooltip'} arrowColor={'#121212'}
                          uuid="wroclaw-photo" place="right" id={'wroclaw-photo'}>
                <img className={'Index__photo Index__photo--horizontal'}
                     alt={'Wroclaw, Poland Photo'}
                     src={'/static/wroclaw.jpg'}/>
            </ReactTooltip>
        </>)
    };

    return (
        <Layout pageTitlePrefix={''}
                description={'Hey, I’m Andriy Chemerynskiy, a Software Engineer currently based in Wroclaw, Poland.'}
                imageUrl={'https://andrewchmr.com/static/about.png'}>
            <div className={'Index'}>
                <div className={'Index__paragraph'}>Hey, I’m{' '}
                    <a data-tip={true} data-for="my-photo">Andriy Chemerynskiy</a>
                    , a Software Engineer
                </div>
                <div className={'Index__paragraph'}> currently based in {' '}
                    <a data-tip={true} data-for="wroclaw-photo">Wroclaw, Poland</a>.
                </div>
                {renderTooltips()}
            </div>
        </Layout>
    )
}

export default Index;