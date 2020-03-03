import { trigger, transition, style, query, animateChild, animate, group, state } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          overflow: 'hidden',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 1
        })
      ],
      { optional: true }
    ),
    query(':enter', [style({ opacity: 0 })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ opacity: 0 }))], { optional: true }),
      query(':enter', [animate('300ms ease-out', style({ opacity: 1 }))], { optional: true })
    ]),
    query(':enter', animateChild(), { optional: true })
  ])
]);

export const detailExpand = trigger('detailExpand', [
  state('collapsed', style({ height: '0px', minHeight: '0' })),
  state('expanded', style({ height: '*' })),
  transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
]);
