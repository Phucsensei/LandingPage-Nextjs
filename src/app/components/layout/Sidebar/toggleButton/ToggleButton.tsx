import { Dispatch, SetStateAction } from 'react'

type ToggleButtonProps = {
    setOpen: Dispatch<SetStateAction<boolean>>;
};

export const ToggleButton = ({ setOpen }: ToggleButtonProps) => {
    return (
        <button onClick={() => setOpen(prev => !prev)}>
            Button
        </button>
    )
}
