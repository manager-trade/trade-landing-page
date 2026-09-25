import {
  SeoSolutionPage,
  buildSeoPageMetadata,
} from "@/components/SeoSolutionPage";
import { getSeoPageByPath } from "@/lib/seo-pages";

const page = getSeoPageByPath("/software-de-trade-marketing")!;

export const metadata = buildSeoPageMetadata(page);

export default function Page() {
  return <SeoSolutionPage page={page} />;
}
