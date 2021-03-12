import { Component, h, Prop } from '@stencil/core';
import CategoryService from '../../services/storage/category-service';
import { RouterHistory } from '@stencil/router';

const spaceRegex = /\s/g;

@Component({
  tag: 'create-poll',
  styleUrl: 'create-poll.css',
  shadow: true,
})
export class CreatePoll {

  @Prop() history: RouterHistory;

  handleCategoryClick(category: string) {

    category = category.replace(spaceRegex, '-');
    this.history.push(`/create-poll/${category}`);
  }

  addCategory() {
    // todo: later  
    console.log(`wasp > addCategory`)
  }

  getCategories() {
    const categories: string[] = CategoryService.retrieveAll();

    console.log(categories)

    return categories.map((category: string) => {
      return <div onClick={() => this.handleCategoryClick(category)}>
        {category}
      </div>
    })
  }

  render() {
    return (
      <div class="create-poll-wrapper">
        {this.getCategories()}
      </div>
    )
  }
}
