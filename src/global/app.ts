import CategoryService from "../services/storage/category-service";
import { FinalStorage } from "../services/storage/final-storage";
import OptionService from "../services/storage/option-service";
import PeerXmn from "../services/xmn/peer-xmn";

export default async () => {
  /**
   * The code to be executed should be placed within a default function that is
   * exported by the global script. Ensure all of the code in the global script
   * is wrapped in the function() that is exported.
   */

  FinalStorage.init();
  PeerXmn.init();
  CategoryService.init();
  OptionService.init();
};
