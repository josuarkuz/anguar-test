// sort-indicator.component.ts
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type SortIndicatorState = 'unsorted' | 'asc' | 'desc';

@Component({
  selector: 'app-sort-indicator',
  standalone: true,
  template: `
    <span class="sort-indicator" aria-hidden="true">
      @switch (state) {
        @case ('unsorted') {
          <svg viewBox="0 0 24 24" class="sort-indicator__svg">
            <path
              d="M8 7l4-4 4 4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 4v16"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M16 17l-4 4-4-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
        @case ('asc') {
          <svg viewBox="0 0 24 24" class="sort-indicator__svg">
            <path
              d="M12 20V4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M8 8l4-4 4 4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
        @case ('desc') {
          <svg viewBox="0 0 24 24" class="sort-indicator__svg">
            <path
              d="M12 4v16"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M8 16l4 4 4-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
      }
    </span>
  `,
  styles: [
    `
      .sort-indicator {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 1rem;
        color: var(--color-text);
        line-height: 1;
      }

      .sort-indicator__svg {
        width: 1rem;
        height: 1rem;
        display: block;
        flex-shrink: 0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortIndicatorComponent {
  @Input() state: SortIndicatorState = 'unsorted';
}
