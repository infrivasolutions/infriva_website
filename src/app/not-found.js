import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="bg-background py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-7xl font-bold text-primary">404</h1>

            <h2 className="mt-6 text-4xl font-bold">Page Not Found</h2>

            <p className="mt-4 text-muted">
              The page you are looking for does not exist or has been moved.
            </p>

            <Link href="/">
              <Button className="mt-8">Back To Home</Button>
            </Link>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
