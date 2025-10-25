import { useRef, useEffect, useState } from 'react';

export function useSlider(steps = 5) {
    const sliderRef = useRef(null);
    const thumbRef = useRef(null);
    const fillRef = useRef(null);
    const shiftXRef = useRef(0);

    const [value, setValue] = useState(1);

    useEffect(() => {
        const slider = sliderRef.current;
        const thumb = thumbRef.current;
        const fill = fillRef.current;

        if (!slider || !thumb || !fill) return;

        thumb.style.left = `0px`;
        fill.style.width = `0px`;

        function onMove(e) {
            const sliderRect = slider.getBoundingClientRect();
            const thumbW = thumb.offsetWidth;
            let newLeft = e.clientX - shiftXRef.current - sliderRect.left;

            if (newLeft < 0) newLeft = 0;
            const rightEdge = slider.offsetWidth;
            if (newLeft > rightEdge) newLeft = rightEdge;

            thumb.style.left = `${newLeft}px`;
            fill.style.width = `${newLeft + thumbW / 2 - 12}px`;
        }

        function onUp(e) {
            try {
                thumb.releasePointerCapture(e.pointerId);
            } catch {}

            const sliderRect = slider.getBoundingClientRect();
            const rightEdge = slider.offsetWidth;
            const stepSize = rightEdge / (steps - 1);

            let currentCenter =
                parseFloat(thumb.style.left) + thumb.offsetWidth / 2;
            let nearestStep = Math.round(currentCenter / stepSize);

            let snapLeft = nearestStep * stepSize;
            thumb.style.left = `${snapLeft}px`;
            fill.style.width = `${snapLeft + thumb.offsetWidth / 2 - 12}px`;

            setValue(nearestStep + 1);

            thumb.removeEventListener('pointermove', onMove);
            thumb.removeEventListener('pointerup', onUp);
        }

        function onDown(e) {
            e.preventDefault();
            shiftXRef.current = e.clientX - thumb.getBoundingClientRect().left;
            thumb.setPointerCapture(e.pointerId);
            thumb.addEventListener('pointermove', onMove);
            thumb.addEventListener('pointerup', onUp);
        }

        thumb.addEventListener('pointerdown', onDown);
        thumb.addEventListener('dragstart', (e) => e.preventDefault());

        return () => {
            thumb.removeEventListener('pointerdown', onDown);
            thumb.removeEventListener('pointermove', onMove);
            thumb.removeEventListener('pointerup', onUp);
        };
    }, [steps]);

    return { sliderRef, thumbRef, fillRef, value };
}
