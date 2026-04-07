import type { Meta, StoryObj } from '@storybook/angular';
import { Tabs } from './tabs';

const meta: Meta<Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  render: () => ({
    imports: [Tabs],
    template: `
      <div style="max-width: 800px;">
        <app-tabs></app-tabs>
      </div>
    `,
  }),
};

export default meta;

type Story = StoryObj<Tabs>;

export const Default: Story = {};
