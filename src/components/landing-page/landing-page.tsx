import { Component, ComponentInterface, h } from '@stencil/core';
import { Utils } from '../../global/utils';

@Component({
  tag: 'landing-page',
  styleUrl: 'landing-page.css',
  shadow: true,
})
export class Landing implements ComponentInterface {

  getCreatePollView() {
    return (
      <stencil-route-link url="/create-poll/">
        <button>Create Poll</button>
      </stencil-route-link>
    )
  }

  getVoteOnPollView() {
    return (
      <span>Load Poll Data</span>
    )
  }

  loadView() {

    const id = Utils.getIdParam();
    return id ? this.getVoteOnPollView() : this.getCreatePollView();
  }

  render() {
    return (
      <div class="landing-wrapper">
        {this.loadView()}
      </div>
    );
  }
}
