export const GA_TRACKING_ID = 'UA-150290652-3';

export const pageview = (url: string) => {
    // @ts-ignore
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    })
};

export const event = ({ action, category, label, value }: any) => {
    // @ts-ignore
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    })
};