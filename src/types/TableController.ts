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
}
