import type { SegmentPageContent } from './types';
import { fashion } from './fashion';
import { beauty } from './beauty';
import { supplements } from './supplements';
import { jewelry } from './jewelry';
import { homeGoods } from './home-goods';
import { foodAndBeverage } from './food-and-beverage';
import { petProducts } from './pet-products';
import { digitalProducts } from './digital-products';
import { printOnDemand } from './print-on-demand';
import { highAov } from './high-aov';
import { subscriptionBoxes } from './subscription-boxes';
import { b2bWholesale } from './b2b-wholesale';

export type { SegmentPageContent, StackLayer } from './types';

export const SEGMENT_PAGES: SegmentPageContent[] = [
  fashion,
  beauty,
  supplements,
  jewelry,
  homeGoods,
  foodAndBeverage,
  petProducts,
  digitalProducts,
  printOnDemand,
  highAov,
  subscriptionBoxes,
  b2bWholesale,
];

export function segmentPageBySlug(slug: string): SegmentPageContent | undefined {
  return SEGMENT_PAGES.find((p) => p.slug === slug);
}
