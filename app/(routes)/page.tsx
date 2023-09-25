import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard("123c1a51-ee23-4683-b476-cddde1c1aaf6");
    return ( 
        <div className="">
            <Container>
                <div className="space-y-10 pb-10">
                    <Billboard data={billboard} />
                </div>
            </Container>
        </div>
     );
}
 
export default HomePage;