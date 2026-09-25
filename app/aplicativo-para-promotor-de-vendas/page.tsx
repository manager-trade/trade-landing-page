import {
  SeoSolutionPage,
  buildSeoPageMetadata,
} from "@/components/SeoSolutionPage";
import { getSeoPageByPath } from "@/lib/seo-pages";

const page = getSeoPageByPath("/aplicativo-para-promotor-de-vendas")!;

export const metadata = buildSeoPageMetadata(page);

export default function Page() {
  return <SeoSolutionPage page={page} />;
}
