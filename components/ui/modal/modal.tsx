import { XIcon } from "lucide-react";
import { Button } from "../button/button";
import type { registerModal } from "./register-modal";
import styles from './modal.module.css';
import clsx from "clsx";

const SIZE_CLASSES = {
    sm: 'w-32',
    md: 'w-48'
};

type SizeProp = keyof typeof SIZE_CLASSES;

type CustomProps = {
    size?: SizeProp;
    title?: string;
}

export type ModalProps = {
    control: ReturnType<typeof registerModal>['control'],
    children?: React.ReactNode;
} & CustomProps;

export const Modal: React.FC<ModalProps> = ({ control, children, size = 'md', title, ...props }) => {
    return <dialog {...props} id={control.id} popover="" className={styles.root}>
        <div className="flex justify-center items-center">
            {/* Dialog */}
            <div className={clsx("flex flex-col gap-1 py-2", SIZE_CLASSES[size])}>
                {/* Header */}
                <div className="flex justify-between items-center">
                    {title ? <h2 className="pl-4">{title}</h2> : <span/>}
                    <Button data-testid={`modal-${control.id}-close`} popoverTarget={control.id} popoverTargetAction="hide" variant="ghost" size="icon">
                        <XIcon/>
                    </Button>
                </div>

                {/* Body */}
                <div className="pb-2 px-4">
                    {children}
                </div>
            </div>
        </div>
    </dialog>;
}