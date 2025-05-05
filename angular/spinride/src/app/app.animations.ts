import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const swipeAnimation = trigger('routeAnimations', [
  transition('* => *', [
    query(':enter, :leave', style({position: 'absolute', width: '100%'}), {
      optional: true,
    }),
    group([
      query(
        ':enter',
        [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate(
            '300ms ease-in-out',
            style({transform: 'translateX(0)', opacity: 1})
          ),
        ],
        {optional: true}
      ),
      query(
        ':leave',
        [
          animate(
            '300ms ease-in-out',
            style({transform: 'translateX(-100%)', opacity: 0})
          ),
        ],
        {optional: true}
      ),
    ]),
  ]),
]);
