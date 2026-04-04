import type { Meta, StoryObj } from '@storybook/angular';
import { Tabs } from './tabs';

const meta: Meta<Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<Tabs>;

export const Default: Story = {};
