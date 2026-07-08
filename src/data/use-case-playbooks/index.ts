import type { UseCasePlaybookContent } from './types';
import { welcomeSeries } from './welcome-series';
import { emailDesign } from './email-design';
import { loyalty } from './loyalty';
import { holidayGifting } from './holiday-gifting';
import { winback } from './winback';
import { abandonedCart } from './abandoned-cart';
import { browseAbandonment } from './browse-abandonment';
import { replenishment } from './replenishment';
import { analytics } from './analytics';
import { postPurchase } from './post-purchase';
import { discountStrategy } from './discount-strategy';
import { productLaunch } from './product-launch';
import { backInStock } from './back-in-stock';
import { blackFriday } from './black-friday';
import { deliverability } from './deliverability';
import { reviewsAndUgc } from './reviews-and-ugc';
import { segmentation } from './segmentation';
import { vipSegments } from './vip-segments';

export type { UseCasePlaybookContent, PlaybookStackLayer } from './types';

export const USE_CASE_PLAYBOOKS: UseCasePlaybookContent[] = [
  welcomeSeries,
  emailDesign,
  loyalty,
  holidayGifting,
  winback,
  abandonedCart,
  browseAbandonment,
  replenishment,
  analytics,
  postPurchase,
  discountStrategy,
  productLaunch,
  backInStock,
  blackFriday,
  deliverability,
  reviewsAndUgc,
  segmentation,
  vipSegments,
];

export function useCasePlaybookBySlug(slug: string): UseCasePlaybookContent | undefined {
  return USE_CASE_PLAYBOOKS.find((p) => p.slug === slug);
}
