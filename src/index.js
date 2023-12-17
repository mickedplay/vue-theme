import * as components from './components';

const defaultComponents = components?.defaults;
const ThemeComponents = {
    install(Vue) {
        Object.keys(defaultComponents).forEach(name => {
            Vue.component(name, defaultComponents[name]);
        });
    }
};

export default ThemeComponents;

export {
    Backend
} from './components/scaffolds';

export {
    ArrowLeftIcon,
    ArrowLeftLongIcon,
    ArrowRightIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    CreateIcon,
    DeleteIcon,
    EditIcon,
    Icon,
    LinkIcon,
    LockIcon,
    SaveIcon,
    SendIcon,
    UnlockIcon,
    ViewIcon,
    WaitingIcon
} from './components/icons';
