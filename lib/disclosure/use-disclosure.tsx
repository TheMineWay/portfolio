import { useCallback, useState } from "react"

export const useDisclosure = (initialState: boolean = false) => {
    const [isOpen, setOpen] = useState(initialState);

    const open = useCallback(() => {
        setOpen(true);
    }, [setOpen]);

    const close = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const toggle = useCallback(() => {
        setOpen(!open);
    }, [open, setOpen]);

    return {
        isOpen,
        setOpen,

        // Actions
        open,
        close,
        toggle,
    };
}