import type { LucideIcon } from 'lucide-react';
import { Users, Shield, Code, Heart, Leaf, Lock, Eye, Globe, Lightbulb } from 'lucide-react';

export type EthicsPrinciple = {
    key: string;
    icon: LucideIcon;
    valueKeys: string[];
};

const VALUES_5 = ['0', '1', '2', '3', '4'];
const VALUES_6 = ['0', '1', '2', '3', '4', '5'];

export const ETHICS_PRINCIPLES: EthicsPrinciple[] = [
    { key: 'accessibility', icon: Users, valueKeys: VALUES_5 },
    { key: 'privacy', icon: Shield, valueKeys: VALUES_6 },
    { key: 'open-source', icon: Code, valueKeys: VALUES_6 },
    { key: 'sustainability', icon: Leaf, valueKeys: VALUES_6 },
    { key: 'ethical-ai', icon: Heart, valueKeys: VALUES_6 },
    { key: 'security', icon: Lock, valueKeys: VALUES_6 },
    { key: 'transparency', icon: Eye, valueKeys: VALUES_6 },
    { key: 'inclusive-tech', icon: Globe, valueKeys: VALUES_6 },
    { key: 'continuous-learning', icon: Lightbulb, valueKeys: VALUES_6 },
];
