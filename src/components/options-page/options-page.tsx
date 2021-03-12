import { Component, h, Prop } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import OptionService from '../../services/storage/option-service';

@Component({
  tag: 'options-page',
  styleUrl: 'options-page.css',
  shadow: true,
})
export class OptionsPage {

  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;

  handleOptionClick(_option: string) {

  }

  handleCreatePollClick() {

    this.history.push(`/results-page/`);
  }

  addOption() {
    // todo: later  
    console.log(`wasp > addOption`)
  }

  getOptions() {
    const options: string[] = OptionService.retrieveAll(this.match.params.category);

    console.log(options)

    return options.map((option: string) => {
      return <div onClick={() => this.handleOptionClick(option)}>
        {option}
      </div>
    })
  }

  render() {
    return (
      <div class="option-page-wrapper">
        <div class="options-wrapper">
          {this.getOptions()}
        </div>

        <div class="button-wrapper">
          <button onClick={() => this.handleCreatePollClick()}>
            Create Poll
          </button>
        </div>
      </div>

    )
  }
}
