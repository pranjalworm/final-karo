import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {

  render() {
    return (
      <div>
        <header>
          <div class="heading">final karo</div>
          <div>
            take group decisions in 60 seconds
          </div>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="landing-page" exact={true} />
              <stencil-route url="/create-poll/" component="create-poll" exact={true} />
              <stencil-route url="/create-poll/:category" component="options-page" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
