import { ItemType } from "../App";

export interface TableController {
  handleTaxonClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleItemsClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleWtVolClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleOccurClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleUnspcClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleCommonNameClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleMetricsClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleFractionDietClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleFamilyClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleNumberOfStudiesClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  resetTable: (itemType: ItemType) => void;
}
