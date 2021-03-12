import { Component, h } from '@stencil/core';

@Component({
  tag: 'results-page',
  styleUrl: 'results-page.css',
  shadow: true,
})
export class ResultsPage {

  render() {
    return (
      <div class="results-page-wrapper">
        Results page
      </div>
    )
  }
}
