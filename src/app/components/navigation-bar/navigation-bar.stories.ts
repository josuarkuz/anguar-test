import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { NavigationBar } from './navigation-bar';

const meta: Meta<NavigationBar> = {
  title: 'Components/Navigation Bar',
  component: NavigationBar,
  tags: ['autodocs'],
  parameters: {
    a11y: {
      test: 'todo',
    },
  },
  decorators: [
    applicationConfig({
      providers: [provideRouter([])],
    }),
  ],
  render: () => ({
    imports: [NavigationBar],
    template: `
      <app-navigation-bar></app-navigation-bar>

      <main style="padding: 24px;">
        <section style="min-height: 120px;">
          <h2>Routed navigation demo</h2>
          <p>
            This story shows the navigation bar structure and dropdown behavior.
          </p>
        </section>
      </main>
    `,
  }),
};

export default meta;

type Story = StoryObj<NavigationBar>;

export const Default: Story = {};
