import ProductPage from "@/components/product";
import { baseServerSideFetch } from "@/lib/api-ssr";

export default async function Page({ params }: { params: { productId: string } }) {
  const { data: product } = await baseServerSideFetch<any>(`/api/product/get`, { id: params.productId });
  return <ProductPage product={product}></ProductPage>
}