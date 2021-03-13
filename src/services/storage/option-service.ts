import { StorageEnum } from "../../global/enums";
import { DefaultCategories } from "./category-service";
import { FinalStorage } from "./final-storage";

const DefaultOptions = {
  'food': [
    'north indian',
    'south indian',
    'pizza',
    'burger',
    'chinese'
  ],
  'movies': [
    'horror',
    'romantic',
    'thriller',
    'action',
    'suspense',
    'comedy',
    'drama',
    'mind fuck'
  ],
  'games': [
    'estimate',
    'uno',
    'kings cup'
  ]
}

export default class OptionService {

  // initialize with default options in each category if no options are already set
  static init() {

    const data = FinalStorage.get(StorageEnum.Categories);
    const savedCategories: string[] = JSON.parse(data);

    for (const category of savedCategories) {

      if (!DefaultCategories.includes(category)) {
        continue;
      }

      const savedOptions: string[] = JSON.parse(FinalStorage.get(category));

      if (!savedOptions || !savedOptions.length) {
        const options = DefaultOptions[category];
        FinalStorage.set(category, JSON.stringify(options), true);
      }

    }

  }

  static retrieveAll(category: string) {

    const options: string[] = JSON.parse(FinalStorage.get(category));

    return options;
  }

  static create(option: string, category: string) {

    option = option.toLowerCase();

    const savedOptions: string[] = JSON.parse(FinalStorage.get(category));

    if (!savedOptions || !savedOptions.length) {
      FinalStorage.set(category, [option], true);
    } else if (!savedOptions.includes(option)) {
      savedOptions.push(option);
      FinalStorage.set(category, savedOptions, true);
    }

  }

  static delete(option: string, category: string) {

    option = option.toLowerCase();

    const savedOptions = JSON.parse(FinalStorage.get(category));

    if (savedOptions?.length) {

      const index = savedOptions.indexOf(option);
      index !== -1 ? savedOptions.splice(index, 1) : null;

      FinalStorage.set(category, savedOptions, true);
    }

  }
}