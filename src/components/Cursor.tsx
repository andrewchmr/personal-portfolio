import React, {useEffect, useState} from "react";
import {useRouter} from 'next/router'
import classNames from "classnames";

interface Position {
    x: number,
    y: number
}

const isMobile = () => {
    let ua = navigator.userAgent;
    return /Android|Mobi|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
};

export const Cursor = () => {

    if (typeof navigator !== 'undefined' && isMobile()) return null;

    const router = useRouter();
    const [position, setPosition] = useState<Position>({x: 0, y: 0});
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        addEventListeners();
        return () => removeEventListeners();
    }, []);

    useEffect(() => {
        handleLinkHoverEvents()
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
        setPosition({x: e.pageX, y: e.pageY});
    };

    const onMouseDown = () => {
        setClicked(true);
    };

    const onMouseUp = () => {
        setClicked(false);
    };

    const onMouseLeave = () => {
        setHidden(true);
    };

    const onMouseEnter = () => {
        setHidden(false);
    };

    const handleLinkHoverEvents = () => {
        document.querySelectorAll("a, button").forEach(el => {
            el.addEventListener("mouseover", () => {
                setLinkHovered(true);
            });
            el.addEventListener("mouseout", () => {
                setLinkHovered(false);
            });
        });
    };

    const cursorClasses = classNames(
        'Cursor',
        {
            'Cursor--clicked': clicked,
            'Cursor--hidden': hidden,
            'Cursor--link-hovered': linkHovered
        }
    );

    return <div className={cursorClasses} style={{left: `${position.x}px`, top: `${position.y}px`}}/>
};