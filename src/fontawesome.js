import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(far, fas);

export default function(app) {
    app.component('fa', FontAwesomeIcon);
}
