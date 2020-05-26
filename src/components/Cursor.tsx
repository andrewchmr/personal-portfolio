import React, {useEffect, useRef} from "react";
import {useRouter} from 'next/router'

const isMobile = () => {
    let ua = navigator.userAgent;
    return /Android|Mobi|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
};

export const Cursor = () => {

    if (typeof navigator !== 'undefined' && isMobile()) return null;

    const cursor = useRef<HTMLDivElement | null>(null);
    const router = useRouter();

    useEffect(() => {
        addEventListeners();
        return () => removeEventListeners();
    }, []);

    useEffect(() => {
        handleLinkEvents()
    }, [router.pathname]);

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseenter", onMouseEnter);
        document.removeEventListener("mouseleave", onMouseLeave);
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
        if (cursor.current) {
            cursor.current.style.left = `${e.pageX}px`;
            cursor.current.style.top = `${e.pageY}px`;
        }
    };

    const onMouseDown = () => {
        if (cursor.current) {
            cursor.current.classList.add('Cursor--clicked');
        }
    };

    const onMouseUp = () => {
        if (cursor.current) {
            cursor.current.classList.remove('Cursor--clicked');
        }
    };

    const onMouseLeave = () => {
        if (cursor.current) {
            cursor.current.classList.add('Cursor--hidden');
        }
    };

    const onMouseEnter = () => {
        if (cursor.current) {
            cursor.current.classList.remove('Cursor--hidden');
        }
    };

    const handleLinkEvents = () => {
        document.querySelectorAll("a, button").forEach(el => {
            el.addEventListener("mouseover", () => {
                if (cursor.current) {
                    cursor.current.classList.add('Cursor--link-hovered');
                }
            });
            el.addEventListener("mouseout", () => {
                if (cursor.current) {
                    cursor.current.classList.remove('Cursor--link-hovered');
                }
            });
        });
    };

    return <div ref={cursor} className={'Cursor'}/>
};