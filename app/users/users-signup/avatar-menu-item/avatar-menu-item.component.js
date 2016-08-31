import template from './avatar-menu-item.html';
import './avatar-menu-item.scss';

export default  {
    bindings: {
        url: '<',
        select: '&'
    },
    templateUrl: template
}
