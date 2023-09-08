import { useRouter } from "next/router";
import CardDetail from "../../components/CardDetail";
import imgAbout from "../../assets/image/img-about.jpeg";
import imgAbout2 from "../../assets/image/Kucing.jpg";
import Footer from "@/components/Footer";

const imageMapping: { [key: string]: string } = {
    "1": imgAbout.src,
    "2": imgAbout2.src,
    "3": imgAbout.src,
    "4": imgAbout.src,
    "5": imgAbout.src,
    "6": imgAbout.src,
    "7": imgAbout.src,
    "8": imgAbout.src,
    "9": imgAbout.src,
    "10": imgAbout.src,
};

const CardDetailsPage = () => {
    const router = useRouter();
    const { id } = router.query as { id: string }; // Specify the type of id as string
    const image = imageMapping[id] || "/default-image.jpg";

    // Data contoh untuk demonstrasi, ganti dengan logika pengambilan data sebenarnya
    const cardData = {
        id: Number(id),
        title: `Daily Mix ${id}`,
        description: `Deskripsi ${id}`,
        image: image,
    };

    const handleBackClick = () => {
        router.back();
    };

    return (
        <div>
            <div className="bg-blue-900 min-h-screen text-white">
                <div className="container mx-auto p-4">
                    <button
                        className="bg-white text-blue-900 px-4 py-2 rounded-lg absolute top-4 left-4"
                        onClick={handleBackClick}
                    >
                        Back
                    </button>
                    <CardDetail
                        title={cardData.title}
                        description={cardData.description}
                        image={cardData.image}
                    />
                </div>

            </div>
            <Footer />
        </div>


    );
};

export default CardDetailsPage;
