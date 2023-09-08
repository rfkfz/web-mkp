// components/Footer.tsx

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto text-center font-serif">
                &copy; {new Date().getFullYear()} Multi Karya Prima
            </div>
        </footer>
    );
}
