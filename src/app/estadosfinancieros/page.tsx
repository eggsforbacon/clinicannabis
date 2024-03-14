import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import {BiPlus} from "react-icons/bi";
import YearChip from "@/components/content/finances/YearChip";
import Link from "next/link";
import Image from "next/image";

export default function Finances() {
  return (
      <main className={"w-full min-h-screen overflow-x-clip"}>
        <Navbar selection={""}/>
        <section className={"mt-24 py-32 px-96 flex flex-col gap-6 items-center justify-center relative overflow-clip"}>
          <Image src={"/images/financiero/fianncieroszz.webp"} alt={""} width={1920} height={1080} quality={100} className={"absolute brightness-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}/>
          <h1 className={"relative text-white text-6xl font-bold"}>Estados Financieros</h1>
        </section>
        <section className={"flex flex-col items-stretch justify-start gap-8 py-16 w-full px-96"}>
          <YearChip year={"2023"}>
            <Link href={"/data/estados-financieros/2023/1.Estados Financieros  2023 2022.pdf"}>1. Estados Financieros 2023 2022</Link>
            <Link href={"/data/estados-financieros/2023/2.Notas Estados Financieros 2023 2022.pdf"}>2. Notas Estados Financieros 2023 2022</Link>
            <Link href={"/data/estados-financieros/2023/3. Informe de Gestion 2023.pdf"}>3. Informe de Gestión 2023</Link>
          </YearChip>
          <YearChip year={"2022"}>
            <Link href={"/data/estados-financieros/2022/1.Estados Finanacieros 2022_2021_Firmado.pdf"}>1. Estados Financieros 2022 2021</Link>
            <Link href={"/data/estados-financieros/2022/2.Notas y Certificacion Estados Financieros_Firmado .pdf"}>2. Notas y Certificación Estados Financieros</Link>
            <Link href={"/data/estados-financieros/2022/3.Informe de Gestion 2022.pdf"}>3. Informe de Gestión 2022</Link>
          </YearChip>
        </section>
        <Footer/>
      </main>
  );
}