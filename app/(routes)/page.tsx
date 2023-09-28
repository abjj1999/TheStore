import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/Productlist";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard("123c1a51-ee23-4683-b476-cddde1c1aaf6");
    const products = await getProducts({isFeatured: true});
    return ( 
        <div className="">
            <Container>
                <div className="space-y-10 pb-10">
                    <Billboard data={billboard} />
                </div>
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </Container>
        </div>
     );
}
 
export default HomePage;