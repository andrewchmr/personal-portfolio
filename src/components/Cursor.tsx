import React, { useCallback, useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router'
import classNames from "classnames";
import { isMobile } from "../utils/isMobile";
import { AppContext } from "../context/AppContext";

interface Position {
  x: number,
  y: number
}

export const Cursor = () => {
  const router = useRouter();
  const context = useContext(AppContext);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(false);

  const onMouseMove = React.useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const onMouseDown = React.useCallback(() => {
    setClicked(true);
  }, []);

  const onMouseUp = React.useCallback(() => {
    setClicked(false);
  }, []);

  const onMouseLeave = React.useCallback(() => {
    setHidden(true);
  }, []);

  const onMouseEnter = React.useCallback(() => {
    setHidden(false);
  }, []);

  const addEventListeners = useCallback(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  }, [onMouseMove, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp]);

  const removeEventListeners = useCallback(() => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  }, [onMouseMove, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp]);

  const handleLinkHoverEvents = useCallback(() => {
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseover", () => context?.setLinkHovered?.(true));
      el.addEventListener("mouseout", () => context?.setLinkHovered?.(false));
    });
    document.querySelectorAll("iframe").forEach(el => {
      el.addEventListener("mouseover", () => setHidden(true));
      el.addEventListener("mouseout", () => setHidden(false));
    });
  }, [context]);

  useEffect(() => {
    handleLinkHoverEvents()
  }, [router.pathname, handleLinkHoverEvents]);

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, [addEventListeners, removeEventListeners]);

  const cursorClasses = classNames(
    'Cursor',
    {
      'Cursor--clicked': clicked,
      'Cursor--hidden': hidden,
      'Cursor--link-hovered': context?.linkHovered
    }
  );

  if (typeof navigator !== 'undefined' && isMobile()) return null;

  return <div className={cursorClasses} style={{ left: `${position.x}px`, top: `${position.y}px` }} />
};