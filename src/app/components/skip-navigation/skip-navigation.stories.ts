import type { Meta, StoryObj } from '@storybook/angular';
import { SkipNavigation } from './skip-navigation';

const meta: Meta<SkipNavigation> = {
  title: 'Components/Skip Navigation',
  component: SkipNavigation,
  tags: ['autodocs'],
  parameters: {
    a11y: {
      test: 'todo',
    },
  },
  render: (args) => ({
    props: args,
    template: `
      <app-skip-navigation [links]="links"></app-skip-navigation>

      <header id="main-navigation" tabindex="-1" style="padding: 24px; background: #f8f9fb;">
        <h2>Primary navigation target</h2>
        <p>This simulates the app header/navigation landmark.</p>
      </header>

      <main tabindex="-1" style="padding: 24px; min-height: 240px;">
        <h2>Main content target</h2>
        <p>This simulates the routed page content area.</p>
      </main>
    `,
  }),
  args: {
    links: [
      { label: 'Skip to main content', targetId: 'main-content' },
      { label: 'Skip to primary navigation', targetId: 'main-navigation' },
    ],
  },
};

export default meta;

type Story = StoryObj<SkipNavigation>;

export const Default: Story = {};
