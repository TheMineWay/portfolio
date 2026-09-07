import { ButtonProps } from "../button/button";

export const registerModal = (id: string) => {
    const control = {
        id,
    };

    const openButonProps: ButtonProps = {
        popoverTarget: id,
        popoverTargetAction: 'show'
    };

    const closeButtonProps: ButtonProps = {
        popoverTarget: id,
        popoverTargetAction: 'hide',
    }

    return {
        control,
        openButonProps,
        closeButtonProps,
    }
};