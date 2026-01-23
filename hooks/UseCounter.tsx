import { animate, motion, useMotionValue, useTransform } from 'motion/react';
import React, { useEffect } from 'react';

const UseCounter = ({ count }: { count: number }) => {

    const countValue = useMotionValue(0)

    const rounded = useTransform(countValue, (v) => Math.round(v))

    useEffect(() => {
        const controls = animate(countValue, count, { duration: 5, ease: 'easeOut' })
        return () => controls.stop()
    }, [count])

    return (
        <div>
            <motion.pre>{rounded}</motion.pre>
        </div>
    );
};

export default UseCounter;