import WinDialog from './WinDialog';
import '../index.css';

export default {
    title: 'Components/WinDialog',
    component: WinDialog,
    argTypes: {
        onRestart: { action: 'restarted' },
        onNextLevel: { action: 'next level triggered' },
        onViewResults: { action: 'viewed results' },
        difficulty: { control: { type: 'range', min: 1, max: 3, step: 1 } },
        moves: { control: 'number' },
        time: { control: 'number' },
    },
};

const Template = (args) => <WinDialog {...args} />;

export const StandardWin = Template.bind({});
StandardWin.args = {
    moves: 45,
    time: 120,
    difficulty: 1,
};

export const HardLevelWin = Template.bind({});
HardLevelWin.args = {
    moves: 130,
    time: 300,
    difficulty: 3,
};

export const FastWin = Template.bind({});
FastWin.args = {
    moves: 12,
    time: 15,
    difficulty: 2,
};