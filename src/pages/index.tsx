import React from "react";
import ReactTooltip from "react-tooltip";
import {Layout} from "../components/Layout";

function Index() {
    const renderTooltips = () => {
        return (<>
            <ReactTooltip className={'Index__tooltip'} uuid="my-photo" place="left" id='my-photo'>
                <img className={'Index__photo Index__photo--vertical'}
                     alt={'Andriy Chemerynskiy Photo'}
                     src={'/static/personal-photo.jpg'}/>
            </ReactTooltip>
            <ReactTooltip className={'Index__tooltip'} uuid="wroclaw-photo" place="right" id={'wroclaw-photo'}>
                <img className={'Index__photo Index__photo--horizontal'}
                     alt={'Wroclaw, Poland Photo'}
                     src={'/static/wroclaw.jpg'}/>
            </ReactTooltip>
        </>)
    };

    return (
        <Layout pageTitlePrefix={''}
                description={'Hey, I’m Andriy Chemerynskiy, a Software Engineer currently based in Wroclaw, Poland.'}>
            <div className={'Index'}>Hey, I’m <span data-tip={true} data-for="my-photo">Andriy Chemerynskiy</span>
                , a Software Engineer currently based in <span data-tip={true}
                                                               data-for="wroclaw-photo">Wroclaw, Poland</span>.
                {renderTooltips()}
            </div>
        </Layout>
    )
}

export default Index;