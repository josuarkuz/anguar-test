import type { Meta, StoryObj } from '@storybook/angular';
import { DropdownMenu } from './dropdown-menu';

const meta: Meta<DropdownMenu> = {
  title: 'Components/Dropdown Menu',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    a11y: {
      test: 'todo',
    },
  },
  render: () => ({
    imports: [DropdownMenu],
    template: `
      <div style="padding-bottom: 280px; max-width: 800px;">
        <app-dropdown-menu></app-dropdown-menu>
      </div>
    `,
  }),
};

export default meta;

type Story = StoryObj<DropdownMenu>;

export const Default: Story = {};
