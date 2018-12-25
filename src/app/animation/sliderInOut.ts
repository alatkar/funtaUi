import { trigger, state, style, transition, group, animate } from '@angular/animations';

export const SlideInOutAnimation = [
  trigger('slideInOut', [
    state('in', style({
      'transform': 'translateX(0%)'
    })),
    state('out', style({
      'transform': 'translateX(100%)'
    })),
    transition('in => out', [group([
      animate('400ms 100ms ease-in-out', style({
        'transform': 'translateX(100%)'
      }))
    ]
    )]),
    transition('out => in', [group([
      animate('600ms 100ms ease-in-out', style({
        'transform': 'translateX(0)'
      }))
    ]
    )])
  ]),
];
