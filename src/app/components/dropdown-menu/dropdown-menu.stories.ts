import type { Meta, StoryObj } from '@storybook/angular';
import { DropdownMenu } from './dropdown-menu';

const meta: Meta<DropdownMenu> = {
  title: 'Components/Dropdown Menu',
  component: DropdownMenu,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<DropdownMenu>;

export const Default: Story = {};
