import type { Meta, StoryObj } from '@storybook/angular';
import { SkipNavigation } from './skip-navigation';

const meta: Meta<SkipNavigation> = {
  title: 'Components/Skip Navigation',
  component: SkipNavigation,
  tags: ['autodocs'],
  args: {
    links: [
      { label: 'Skip to main content', targetId: 'main-content' },
      { label: 'Skip to navigation', targetId: 'main-navigation' },
    ],
  },
  render: (args) => ({
    props: args,
    template: `
      <app-skip-navigation [links]="links"></app-skip-navigation>

      <header style="padding: 24px; background: #f3f4f6;">
        <nav id="main-navigation" tabindex="-1">Main navigation target</nav>
      </header>

      <main id="main-content" tabindex="-1" style="padding: 24px; min-height: 300px;">
        Main content target
      </main>
    `,
  }),
};

export default meta;
type Story = StoryObj<SkipNavigation>;

export const Default: Story = {};
