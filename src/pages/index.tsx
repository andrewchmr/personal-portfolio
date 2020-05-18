import React from "react";
import ReactTooltip from "react-tooltip";

function Index() {
    const renderTooltips = () => {
        return <><ReactTooltip className={'Index__tooltip'} place="left" id='my-photo'>
            <img className={'Index__photo Index__photo--vertical'}
                 alt={'Andriy Chemerynskiy Photo'}
                 src={'/media/personal-photo.jpg'}/>
        </ReactTooltip>
            <ReactTooltip className={'Index__tooltip'} place="right" id={'wroclaw-photo'}>
                <img className={'Index__photo Index__photo--horizontal'}
                     alt={'Wroclaw, Poland Photo'}
                     src={'/media/wroclaw.jpg'}/>
            </ReactTooltip></>
    };

    return <div className={'Index'}>Hey, I’m <span data-tip={true} data-for="my-photo">Andriy Chemerynskiy</span>
        , a Software Engineer currently based in <span data-tip={true} data-for="wroclaw-photo">Wroclaw, Poland</span>.
        {renderTooltips()}
    </div>
}

export default Index;