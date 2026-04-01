import type { Meta, StoryObj } from '@storybook/angular';
import { NavigationBar } from './navigation-bar';

const meta: Meta<NavigationBar> = {
  title: 'Components/Navigation Bar',
  component: NavigationBar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<NavigationBar>;

export const Default: Story = {};

export const MobileMenuOpen: Story = {
  render: (args) => ({
    props: {
      ...args,
      mobileMenuOpen: () => true,
    },
  }),
};
