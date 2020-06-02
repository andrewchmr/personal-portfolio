export const isMobile = () => {
    let ua = navigator.userAgent;
    return /Android|Mobi|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
};