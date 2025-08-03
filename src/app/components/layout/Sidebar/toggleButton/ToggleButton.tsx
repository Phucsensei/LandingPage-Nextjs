import React, { Dispatch, SetStateAction } from 'react'
import { motion } from 'framer-motion'

type ToggleButtonProps = {
    setOpen: Dispatch<SetStateAction<boolean>>;
};

const topVariant = {
    closed: { d: 'M 2 2.5 L 20 2.5' },
    open: { d: 'M 3 16.5 L 17 2.5' }
}

const middleVariant = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
}

const bottomVariant = {
    closed: { d: 'M 2 16.346 L 20 16.346' },
    open: { d: 'M 3 2.5 L 17 16.346' }
}

export const ToggleButton = ({ setOpen }: ToggleButtonProps) => {
    const [isOpen, setIsOpen] = React.useState(false)

    const handleToggle = () => {
        setOpen(prev => !prev)
        setIsOpen(prev => !prev)
    }

    return (
        <motion.button
            onClick={handleToggle}
            style={{
                background: 'black',
                border: 'none',
                cursor: 'pointer',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                WebkitTapHighlightColor: 'transparent'
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <svg width={24} height={24} viewBox="0 0 24 24">
                <motion.path
                    initial="closed"
                    animate={isOpen ? 'open' : 'closed'}
                    variants={topVariant}
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    d="M 2 2.5 L 20 2.5"
                />
                <motion.path
                    initial="closed"
                    animate={isOpen ? 'open' : 'closed'}
                    variants={middleVariant}
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    d="M 2 10.346 L 20 10.346"
                />
                <motion.path
                    initial="closed"
                    animate={isOpen ? 'open' : 'closed'}
                    variants={bottomVariant}
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    d="M 2 16.346 L 20 16.346"
                />
            </svg>
        </motion.button>
    )
}
