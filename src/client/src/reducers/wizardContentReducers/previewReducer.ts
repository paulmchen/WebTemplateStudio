import WizardContentActionType from "../../store/wizardContent/wizardContentActionType";
import { WIZARD_CONTENT_TYPEKEYS } from "../../store/wizardContent/typeKeys";

const previewStatus = (
  state = false,
  action: WizardContentActionType
) => {
  switch (action.type) {
    case WIZARD_CONTENT_TYPEKEYS.SET_PREVIEW_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export default previewStatus;
