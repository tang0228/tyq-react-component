import React from 'react';
import Button from '../components/Button/Button';

// 定义故事的元数据
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    primary: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

// 定义组件的模板
const Template = (args) => <Button {...args}>Click me</Button>;

// 导出不同的故事
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
};