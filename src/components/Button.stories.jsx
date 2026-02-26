import Button from './Button';
import '../index.css';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
        className: {
            control: { type: 'select' },
            options: ['btn-green', 'btn-orange', 'btn-red', 'btn-blue', 'btn-purple', ''],
        },
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Почати гру',
    className: 'btn-green',
};

export const Warning = Template.bind({});
Warning.args = {
    children: 'Стерти результати',
    className: 'btn-red',
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Звичайний текст',
    className: '',
};