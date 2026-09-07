import { ButtonProps } from "../button/button";

export const registerModal = (id: string) => {
    const control = {
        id,
    };

    const openerProps: ButtonProps = {
        popoverTarget: id,
        popoverTargetAction: 'show'
    };

    return {
        control,
        openerProps,
    }
};